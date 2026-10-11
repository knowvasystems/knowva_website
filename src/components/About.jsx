import { CheckCircle2, ArrowRight, Award } from "lucide-react";
import { aboutChecklist } from "../lib/content";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Column: Text & Advantages */}
          <div className="lg:col-span-6">
            <span className="reveal-text inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
              About Company
            </span>
            <h2 className="reveal-text delay-100 mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]">
              We have over 25+ years in the Tech Industry
            </h2>
            <p className="reveal-text delay-200 mt-5 text-base leading-relaxed text-slate-600">
              Knowva Systems partners with enterprises and emerging startups to design, architect, and deploy reliable digital solutions. We turn complex IT bottlenecks into agile competitive advantages with battle-tested engineering standards.
            </p>

            {/* Checklist */}
            <ul className="reveal-text delay-300 mt-8 space-y-3.5">
              {aboutChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mt-0.5">
                    <CheckCircle2 className="size-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA & Founder Quote */}
            <div className="reveal-text delay-400 mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
              >
                <span>Discover More</span>
                <ArrowRight className="size-4" />
              </a>

              <div className="flex items-center gap-3">
                <div className="size-11 overflow-hidden rounded-full border-2 border-indigo-600">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Founder"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">David Reynolds</p>
                  <p className="text-xs text-slate-500 font-medium">Founder & Principal Architect</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dual Overlapping Photo Composition */}
          <div className="reveal-text delay-200 relative lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Primary Larger Photo */}
              <div className="relative h-80 sm:h-96 w-4/5 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Server and Cloud Workspace"
                  className="size-full object-cover"
                />
              </div>

              {/* Secondary Overlapping Photo */}
              <div className="absolute -bottom-10 -right-2 sm:-right-4 h-64 sm:h-72 w-3/5 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="IT Team Collaboration"
                  className="size-full object-cover"
                />
              </div>

              {/* Floating Satisfaction Badge */}
              <div className="absolute -top-4 -right-2 rounded-2xl bg-indigo-600 px-5 py-3 text-white shadow-xl flex items-center gap-3 border border-indigo-500">
                <Award className="size-6 text-yellow-300" />
                <div className="text-left">
                  <p className="font-extrabold text-sm leading-tight">100% Guaranteed</p>
                  <p className="text-[11px] text-indigo-100">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
