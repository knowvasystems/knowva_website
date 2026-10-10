import { useState } from "react";
import { Cloud, BarChart3, ShieldCheck, Check, ChevronDown } from "lucide-react";
import { solutions } from "../lib/content";

const icons = { Cloud, BarChart3, ShieldCheck };

export default function Solutions() {
  const [open, setOpen] = useState(null);
  return (
    <section id="solutions" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Three disciplines, one accountable team</h2>
        <p className="mt-4 max-w-xl text-slate-600">Choose one or combine them. Each ends with software you own and a team that stays on it.</p>
        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {solutions.map((s) => {
            const Icon = icons[s.icon];
            const isOpen = open === s.id;
            return (
              <article key={s.id} className={`rounded-xl border p-6 transition-colors ${isOpen ? "border-signal bg-teal-50/40" : "border-slate-200 bg-paper hover:border-slate-300"}`}>
                <Icon className="size-6 text-signal" aria-hidden />
                <h3 className="font-display mt-4 text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {s.features.map((f) => (<li key={f} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />{f}</li>))}
                </ul>
                <button onClick={() => setOpen(isOpen ? null : s.id)} aria-expanded={isOpen} aria-controls={`b-${s.id}`}
                  className="mt-6 flex w-full items-center justify-between border-t border-slate-200 pt-4 text-sm font-medium">
                  How this helps your architecture
                  <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden />
                </button>
                <p id={`b-${s.id}`} hidden={!isOpen} className="mt-3 text-sm leading-relaxed text-slate-600">{s.benefit}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
