import { Lock, GitMerge, Boxes, Layers } from "lucide-react";
import { standards } from "../lib/content";

const icons = { Lock, GitMerge, Boxes, Layers };

export default function Standards() {
  return (
    <section id="standards" className="bg-deep py-20 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Engineering standards we hold ourselves to</h2>
          <p className="mt-4 text-slate-400">These are defaults on every project, not add-ons.</p>
        </div>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {standards.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className="border-t border-slate-800 pt-5">
                <Icon className="size-5 text-teal-300" aria-hidden />
                <h3 className="font-display mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
