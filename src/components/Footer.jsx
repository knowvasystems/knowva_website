import { useState } from "react";
import { Send, Linkedin, Twitter, Github, CheckCircle2 } from "lucide-react";
import { CappsLogo } from "./Nav";

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 pt-20 pb-12">
      {/* Subtle Circular Line Art in Footer Background */}
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-96 rounded-full border border-indigo-900/40 opacity-30" />
      <div className="pointer-events-none absolute left-10 top-10 size-64 rounded-full border border-indigo-900/40 opacity-20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <div className="text-white">
              <CappsLogo />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Knowva Systems delivers mission-critical cloud platforms, cybersecurity architectures, and bespoke software engineering for enterprises worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3 text-slate-400">
              <a href="#" className="flex size-9 items-center justify-center rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-4" />
              </a>
              <a href="#" className="flex size-9 items-center justify-center rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="size-4" />
              </a>
              <a href="#" className="flex size-9 items-center justify-center rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#team" className="hover:text-indigo-400 transition-colors">Our Experts</a></li>
              <li><a href="#consultation" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: IT Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              IT Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">IT Management</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Cyber Security Defense</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Cloud & DevOps Migration</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Data & Analytics Pipelines</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Informed
            </h4>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Subscribe to our monthly newsletter for engineering case studies, cloud architectural benchmarks, and tech insights.
            </p>
            <form onSubmit={handleNewsletter} className="mt-4 flex gap-2">
              <input
                type="email"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-indigo-600 text-white transition-all hover:bg-indigo-700 active:scale-95"
              >
                <Send className="size-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-teal-400 flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="size-3.5" /> Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>©  2026 Knowva Systems LLC.  </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
