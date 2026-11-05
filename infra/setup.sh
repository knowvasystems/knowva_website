#!/usr/bin/env bash
set -euo pipefail

BUCKET="knowva-systems-frontend"
REGION="us-east-1"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# ── 1. S3 Bucket ────────────────────────────────────────────────────────────
aws s3api create-bucket --bucket "$BUCKET" --region "$REGION"

aws s3api put-public-access-block --bucket "$BUCKET" \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# ── 2. CloudFront OAC ───────────────────────────────────────────────────────
OAC_ID=$(aws cloudfront create-origin-access-control \
  --origin-access-control-config \
    "Name=knowva-oac,OriginAccessControlOriginType=s3,SigningBehavior=always,SigningProtocol=sigv4,Description=''" \
  --query 'OriginAccessControl.Id' --output text)

echo "OAC ID: $OAC_ID"

# ── 3. CloudFront Distribution ──────────────────────────────────────────────
DIST_ID=$(aws cloudfront create-distribution --distribution-config "{
  \"CallerReference\": \"knowva-$(date +%s)\",
  \"Comment\": \"Knowva Systems  frontend\",
  \"DefaultRootObject\": \"index.html\",
  \"Origins\": {
    \"Quantity\": 1,
    \"Items\": [{
      \"Id\": \"s3-origin\",
      \"DomainName\": \"${BUCKET}.s3.${REGION}.amazonaws.com\",
      \"S3OriginConfig\": {\"OriginAccessIdentity\": \"\"},
      \"OriginAccessControlId\": \"${OAC_ID}\"
    }]
  },
  \"DefaultCacheBehavior\": {
    \"TargetOriginId\": \"s3-origin\",
    \"ViewerProtocolPolicy\": \"redirect-to-https\",
    \"CachePolicyId\": \"658327ea-f89d-4fab-a63d-7e88639e58f6\",
    \"Compress\": true,
    \"AllowedMethods\": {\"Quantity\": 2, \"Items\": [\"GET\", \"HEAD\"], \"CachedMethods\": {\"Quantity\": 2, \"Items\": [\"GET\", \"HEAD\"]}}
  },
  \"CustomErrorResponses\": {
    \"Quantity\": 1,
    \"Items\": [{
      \"ErrorCode\": 403,
      \"ResponsePagePath\": \"/index.html\",
      \"ResponseCode\": \"200\",
      \"ErrorCachingMinTTL\": 0
    }]
  },
  \"Enabled\": true,
  \"HttpVersion\": \"http2and3\",
  \"PriceClass\": \"PriceClass_100\"
}" --query 'Distribution.Id' --output text)

echo "CloudFront Distribution ID: $DIST_ID"

# ── 4. S3 Bucket Policy (allow CloudFront OAC) ──────────────────────────────
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "{
  \"Version\": \"2012-10-17\",
  \"Statement\": [{
    \"Sid\": \"AllowCloudFront\",
    \"Effect\": \"Allow\",
    \"Principal\": {\"Service\": \"cloudfront.amazonaws.com\"},
    \"Action\": \"s3:GetObject\",
    \"Resource\": \"arn:aws:s3:::${BUCKET}/*\",
    \"Condition\": {
      \"StringEquals\": {
        \"AWS:SourceArn\": \"arn:aws:cloudfront::${ACCOUNT_ID}:distribution/${DIST_ID}\"
      }
    }
  }]
}"

# ── 5. IAM User for GitHub Actions ──────────────────────────────────────────
aws iam create-user --user-name knowva-github-actions

aws iam put-user-policy --user-name knowva-github-actions \
  --policy-name knowva-deploy \
  --policy-document "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [
      {
        \"Effect\": \"Allow\",
        \"Action\": [\"s3:PutObject\", \"s3:DeleteObject\", \"s3:ListBucket\"],
        \"Resource\": [
          \"arn:aws:s3:::${BUCKET}\",
          \"arn:aws:s3:::${BUCKET}/*\"
        ]
      },
      {
        \"Effect\": \"Allow\",
        \"Action\": \"cloudfront:CreateInvalidation\",
        \"Resource\": \"arn:aws:cloudfront::${ACCOUNT_ID}:distribution/${DIST_ID}\"
      }
    ]
  }"

aws iam create-access-key --user-name knowva-github-actions

echo ""
echo "✅ Done. Copy the AccessKeyId and SecretAccessKey above into GitHub secrets:"
echo "   AWS_ACCESS_KEY_ID"
echo "   AWS_SECRET_ACCESS_KEY"
echo "   AWS_S3_BUCKET        = $BUCKET"
echo "   AWS_CLOUDFRONT_DISTRIBUTION_ID = $DIST_ID"
