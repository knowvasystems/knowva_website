import { useState } from "react";
import { ShieldCheck, CheckCircle2, Loader2, ArrowRight, Sparkles } from "lucide-react";
import { metricSkills } from "../lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 1200);
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 py-24 text-white sm:py-28">
      {/* Decorative SVG Arcs matching Figma */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg className="absolute -left-20 bottom-0 size-[600px] text-white" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="2" strokeDasharray="14 14" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -right-20 top-0 size-[500px] text-white" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Column: Clean Floating White Consultation Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-8 sm:p-10 text-slate-800 shadow-2xl border border-slate-100">
              <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600">
                Book A Session
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Consultation For Free
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Talk directly with a senior cloud and security engineer within 24 business hours.
              </p>

              {status === "sent" ? (
                <div className="mt-8 rounded-2xl bg-teal-50 p-6 border border-teal-200 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="size-6 text-teal-600" />
                    <h4 className="font-bold text-teal-900 text-lg">Inquiry Received</h4>
                  </div>
                  <p className="mt-2 text-xs text-teal-800 leading-relaxed">
                    Thank you! Our technical architecture team has received your details and will email you with discovery times.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-bold text-teal-700 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Select Service
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                      >
                        <option value="" disabled>Choose a service</option>
                        <option value="cloud">Cloud & DevOps Migration</option>
                        <option value="software">Custom Software Engineering</option>
                        <option value="security">Cyber Security & Audits</option>
                        <option value="management">IT Infrastructure Management</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe your project objectives and timeline..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-700 active:scale-98 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Sending Request…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-400 pt-2">
                    <ShieldCheck className="size-4 text-indigo-600" />
                    <span>Non-Disclosure Agreement signed prior to consultation.</span>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Radial Metric Progress Rings & Value Highlights */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-200 backdrop-blur-md">
              <Sparkles className="size-3.5 text-teal-300" />
              <span>Proven Track Record</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              We have helped more than 700+ clients worldwide
            </h2>
            <p className="mt-4 text-base leading-relaxed text-indigo-100/90 font-normal">
              From global enterprise infrastructure to breakthrough seed-stage platforms, our dedicated engineering squads bring deep technical precision to every engagement.
            </p>

            {/* Circular / Radial Skill Progress Rings (from Figma design) */}
            <div className="mt-10 space-y-6">
              {metricSkills.map((item) => (
                <div key={item.skill} className="rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span>{item.skill}</span>
                    <span className="text-teal-300 font-mono">{item.percentage}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 to-indigo-300 transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 pt-6 border-t border-white/15 text-xs text-indigo-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300" />
                <span>100% Dedicated Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300" />
                <span>Direct Slack Channel Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300" />
                <span>Written SLA Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
