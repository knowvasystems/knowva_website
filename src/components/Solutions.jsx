import { useState } from "react";
import { Server, Code2, ShieldAlert, CloudRain, Check, ArrowRight } from "lucide-react";
import { services, statsMetrics } from "../lib/content";

const iconMap = {
  Server,
  Code2,
  ShieldAlert,
  CloudRain,
};

export default function Solutions() {
  const [activeId, setActiveId] = useState("soft-dev");

  return (
    <section id="services" className="bg-slate-50/60 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal-text inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
            Our Services
          </span>
          <h2 className="reveal-text delay-100 mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
            Different Disciplines, One Accountable Team
          </h2>
          <p className="reveal-text delay-200 mt-4 text-base text-slate-600">
            Delivering tailored technology strategies that resolve technical debt, strengthen security postures, and accelerate your business roadmap.
          </p>
        </div>

        {/* 4 Service Cards Grid - Active purple style shifts on hover */}
        <div className="reveal-text delay-200 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = iconMap[item.icon] || Server;
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className={`group relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 -translate-y-2 scale-[1.02]"
                    : "bg-white text-slate-800 shadow-md shadow-slate-200/60 hover:shadow-lg border border-slate-100 hover:-translate-y-1"
                  }`}
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`flex size-14 items-center justify-center rounded-xl transition-all duration-300 ${isActive ? "bg-white/20 text-white scale-105" : "bg-indigo-50 text-indigo-600"
                      }`}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`mt-6 text-xl font-bold transition-colors duration-200 ${isActive ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed transition-colors duration-200 ${isActive ? "text-indigo-100" : "text-slate-600"}`}>
                    {item.description}
                  </p>

                  {/* Features Checklist */}
                  <ul className="mt-6 space-y-2.5 text-xs font-medium">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check className={`size-4 shrink-0 transition-colors duration-200 ${isActive ? "text-teal-300" : "text-indigo-600"}`} />
                        <span className={`transition-colors duration-200 ${isActive ? "text-indigo-100" : "text-slate-700"}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className={`mt-8 pt-4 border-t transition-colors duration-200 ${isActive ? "border-white/20" : "border-slate-100"}`}>
                  <a
                    href="#consultation"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:gap-3 ${isActive ? "text-white hover:text-indigo-200" : "text-indigo-600 hover:text-indigo-800"
                      }`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Counter Stats Strip (from Figma design) */}
        <div className="reveal-text delay-200 mt-20 rounded-2xl bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
            {statsMetrics.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i > 0 ? "lg:pl-8" : ""}`}>
                <p className="font-sans text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{stat.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">Industry benchmark validated</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
