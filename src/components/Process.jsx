import { useState } from "react";
import { ChevronDown, CheckCircle, Zap, Shield, Cpu, RefreshCw } from "lucide-react";
import { faqProcess } from "../lib/content";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Tech Audit",
    desc: "In-depth architecture analysis, tech stack review, and clear ROI roadmap.",
    icon: Zap,
  },
  {
    step: "02",
    title: "System Architecture",
    desc: "Zero-trust blueprints, containerized microservices, and database models.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Agile Sprint Delivery",
    desc: "Two-week agile iterations with automated CI/CD staging environments.",
    icon: RefreshCw,
  },
  {
    step: "04",
    title: "Production & 24/7 SLAs",
    desc: "Zero-downtime deployment, automated telemetry, and guaranteed SLAs.",
    icon: Shield,
  },
];

export default function Process() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading and Accordion FAQ */}
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]">
              We provide best IT solutions for help your problem
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Clear accountability from discovery to deployment. Here is how our engineering engagement ensures precision, predictability, and performance.
            </p>

            {/* Accordion FAQ */}
            <div className="mt-10 space-y-4">
              {faqProcess.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={item.question}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-indigo-600 bg-indigo-50/30 shadow-md shadow-indigo-600/5"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-base font-bold text-slate-900 hover:text-indigo-600"
                    >
                      <span className="pr-4">{item.question}</span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-indigo-600" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4 Process Step Cards */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-indigo-500/20 blur-2xl" />

              <h3 className="text-xl font-bold text-white mb-2">Our Delivery Framework</h3>
              <p className="text-xs text-slate-400 mb-8">Rigorous engineering lifecycle ensuring project success.</p>

              <div className="space-y-6">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.step} className="flex items-start gap-4 group">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <CheckCircle className="size-4" /> 100% On-Time Delivery
                </span>
                <span>Written SLAs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
