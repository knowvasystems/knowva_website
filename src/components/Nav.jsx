import { useState } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "../lib/content";
import logoImg from "../assets/logo.png";

export function CappsLogo({ className = "size-9", textClassName = "text-slate-900" }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoImg}
        alt="Knowva Systems Logo"
        className={`object-contain rounded-xl shadow-md shadow-indigo-600/30 ${className}`}
      />
      <span className="font-sans text-2xl font-extrabold tracking-tight">
        <span className="text-indigo-600">Knowva</span>{" "}
        <span className={textClassName}>Systems</span>
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
