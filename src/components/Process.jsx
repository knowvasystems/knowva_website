import { steps } from "../lib/content";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">How we deliver</h2>
      <p className="mt-4 max-w-xl text-slate-600">Four stages, each with a deliverable you can review and sign off.</p>
      <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-white p-6">
            <span className="font-display text-3xl font-semibold text-signal">{i + 1}</span>
            <h3 className="font-display mt-4 text-lg font-semibold leading-snug">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
