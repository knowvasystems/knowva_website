import { useState } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "../lib/content";

export function CappsLogo({ className = "size-9" }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative flex items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ${className}`}>
        {/* Animated Knowledge Burst Nova Icon */}
        <svg viewBox="0 0 36 36" fill="none" className="size-6 text-white overflow-visible" aria-hidden="true">
          <defs>
            {/* Soft Nova Glow Filter */}
            <filter id="nova-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Highly Visible Expanding Knowledge Wave 1 */}
          <circle cx="18" cy="18" r="3" stroke="#ffffff" fill="none">
            <animate attributeName="r" values="3;17.5" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.75;0" keyTimes="0;0.65;1" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.4;1.6;0.6" keyTimes="0;0.65;1" dur="2.4s" repeatCount="indefinite" />
          </circle>

          {/* Highly Visible Expanding Knowledge Wave 2 */}
          <circle cx="18" cy="18" r="3" stroke="#e0e7ff" fill="none">
            <animate attributeName="r" values="3;17.5" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.75;0" keyTimes="0;0.65;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.4;1.6;0.6" keyTimes="0;0.65;1" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
          </circle>

          {/* Highly Visible Expanding Knowledge Wave 3 */}
          <circle cx="18" cy="18" r="3" stroke="#c7d2fe" fill="none">
            <animate attributeName="r" values="3;17.5" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.75;0" keyTimes="0;0.65;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.4;1.6;0.6" keyTimes="0;0.65;1" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
          </circle>

          {/* Radiant Diagonal Quanta Sparks (Knowledge Burst Embers) */}
          <circle cx="18" cy="18" r="1.4" fill="#ffffff">
            <animate attributeName="cx" values="18;27" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="18;9" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
            <animate attributeName="r" values="1.4;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="18" cy="18" r="1.4" fill="#ffffff">
            <animate attributeName="cx" values="18;27" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="18;27" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="r" values="1.4;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="18" cy="18" r="1.4" fill="#ffffff">
            <animate attributeName="cx" values="18;9" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="18;27" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="r" values="1.4;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="18" cy="18" r="1.4" fill="#ffffff">
            <animate attributeName="cx" values="18;9" dur="2s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="18;9" dur="2s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" begin="1.5s" repeatCount="indefinite" />
            <animate attributeName="r" values="1.4;0.4" dur="2s" begin="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Secondary 4-Point Star Flare (45° rotated) */}
          <path
            d="M 18,9 Q 18,18 27,18 Q 18,18 18,27 Q 18,18 9,18 Q 18,18 18,9 Z"
            fill="#ffffff"
            opacity="0.25"
            transform="rotate(45 18 18)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="45 18 18; 405 18 18"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          {/* Primary 4-Point Nova Starburst (Astroid Flare) */}
          <path
            d="M 18,6 Q 18,18 30,18 Q 18,18 18,30 Q 18,18 6,18 Q 18,18 18,6 Z"
            fill="#ffffff"
            opacity="0.85"
            filter="url(#nova-glow)"
          >
            <animate
              attributeName="opacity"
              values="0.75;1;0.75"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </path>

          {/* Core Pulsing Halo */}
          <circle cx="18" cy="18" r="4.5" fill="#ffffff" opacity="0.35">
            <animate attributeName="r" values="3.8;5.6;3.8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.45;0.15;0.45" dur="1.8s" repeatCount="indefinite" />
          </circle>

          {/* Brilliant Central Nova Core */}
          <circle cx="18" cy="18" r="2.4" fill="#ffffff" />
        </svg>
      </div>
      <span className="font-sans text-2xl font-extrabold tracking-tight text-slate-900">
        <span className="text-indigo-600">Knowva Systems</span>
      </span>
    </div>
  );
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-200">
      <nav aria-label="Main Navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" className="transition-transform duration-200 hover:scale-105">
          <CappsLogo />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-indigo-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA & Hotline */}
        <div className="hidden items-center gap-6 sm:flex">
          <div className="hidden items-center gap-2.5 xl:flex">
            <div className="flex size-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <Phone className="size-4" aria-hidden="true" />
            </div>
            <div className="text-left text-xs leading-tight">
              <span className="block text-slate-400 font-medium">Free Helpline</span>
              <a href="tel:+18005550199" className="font-bold text-slate-800 hover:text-indigo-600">
                +1 (800) 555-0199
              </a>
            </div>
          </div>

          <a
            href="#consultation"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold text-slate-800 hover:text-indigo-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <Phone className="size-4 text-indigo-600" />
              <span>+1 (800) 555-0199</span>
            </a>
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block w-full rounded-full bg-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-700"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
