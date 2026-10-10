export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#standards" },
  { label: "Engineering Process", href: "#process" },
  { label: "Case Studies", href: "#contact" },
  { label: "About", href: "#about" },
];

export const solutions = [
  {
    id: "cloud", icon: "Cloud", title: "Cloud & Infrastructure Solutions",
    summary: "Move to the cloud and stay up when a region doesn't.",
    features: ["Cloud migration with staged cutovers", "Microservices and container orchestration", "Multi-region reliability and failover", "Infrastructure as code for every environment"],
    benefit: "Every environment is reproducible from code, so recovery is a deploy rather than a rebuild, and each service scales on its own.",
  },
  {
    id: "data", icon: "BarChart3", title: "Data Analytics & Business Intelligence (BI)",
    summary: "Turn operational data into numbers people act on.",
    features: ["ETL/ELT data pipelines", "Real-time analytics dashboards", "BI tool integrations", "Predictive modeling on live telemetry"],
    benefit: "One governed pipeline feeds every dashboard, so teams stop reconciling spreadsheets and see current numbers.",
  },
  {
    id: "secure", icon: "ShieldCheck", title: "Software Maintenance, QA & Cybersecurity",
    summary: "Keep critical software patched, tested and defended.",
    features: ["Zero-trust security reviews and code audits", "Automated test suites and CI/CD gates", "Zero-downtime upgrades", "24/7 maintenance under written SLAs"],
    benefit: "Releases pass automated gates before they ship, and security findings are fixed in the same pipeline that delivers features.",
  },
];

export const steps = [
  { title: "Architectural discovery and requirements", body: "We write the business requirements document and produce high-level and low-level system designs you can review before any code exists." },
  { title: "Agile sprint execution and continuous integration", body: "Two-week sprints end in working software. Every merge builds, tests and deploys to a staging environment." },
  { title: "Security audits and production hardening", body: "We run a zero-trust review, dependency and code audits, load tests and a failover drill before launch." },
  { title: "Managed operations, SLAs and long-term support", body: "We monitor, patch and improve the platform under a written SLA, with an on-call engineer who knows your system." },
];

export const standards = [
  { icon: "Lock", title: "SOC 2 and zero-trust principles", body: "Least-privilege access, audited change history and no implicit trust between services." },
  { icon: "GitMerge", title: "CI/CD automated test gates", body: "Unit, integration and security tests must pass before code reaches production." },
  { icon: "Boxes", title: "Decoupled microservices", body: "Services own their data and deploy independently, so one failure stays contained." },
  { icon: "Layers", title: "Infrastructure as code", body: "Terraform and Kubernetes manifests keep environments identical and reviewable." },
];
