import { useState } from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { solutions } from "../lib/content";

const budgets = ["Under $50k", "$50k to $150k", "$150k to $500k", "$500k+", "Not sure yet"];
const field = "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-signal";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      // Replace with your endpoint (route handler, CRM webhook, etc.)
      const res = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Tell us what you're building</h2>
          <p className="mt-4 max-w-md text-slate-600">An engineer, not a salesperson, will reply within one business day to schedule a technical call.</p>
          <p className="mt-8 flex items-start gap-2 text-sm text-slate-700"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />NDA protected. We sign mutual NDAs prior to technical scoping calls.</p>
        </div>
        {status === "sent" ? (
          <div role="status" className="flex flex-col items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-8">
            <CheckCircle2 className="size-6 text-signal" aria-hidden />
            <h3 className="font-display text-xl font-semibold">Inquiry received</h3>
            <p className="text-sm text-slate-700">We'll email you within one business day to schedule your discovery call.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 rounded-xl border border-slate-200 bg-white p-6 sm:grid-cols-2 sm:p-8">
            <label className="text-sm font-medium">Full name<input name="name" required autoComplete="name" className={field} /></label>
            <label className="text-sm font-medium">Work email<input name="email" type="email" required autoComplete="email" className={field} /></label>
            <label className="text-sm font-medium">Company name<input name="company" required autoComplete="organization" className={field} /></label>
            <label className="text-sm font-medium">Solution needed
              <select name="solution" required defaultValue="" className={field}>
                <option value="" disabled>Select a solution</option>
                {solutions.map((s) => (<option key={s.id}>{s.title}</option>))}
              </select>
            </label>
            <label className="text-sm font-medium sm:col-span-2">Project scope and timeline
              <textarea name="scope" required rows={4} className={field} placeholder="What problem are you solving, and by when?" />
            </label>
            <label className="text-sm font-medium sm:col-span-2">Budget range
              <select name="budget" defaultValue="" className={field}>
                <option value="" disabled>Select a range</option>
                {budgets.map((b) => (<option key={b}>{b}</option>))}
              </select>
            </label>
            <div className="sm:col-span-2">
              <button disabled={status === "sending"} className="rounded-md bg-signal px-5 py-3 text-sm font-medium text-white hover:bg-teal-800 disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send inquiry"}
              </button>
              {status === "error" && <p role="alert" className="mt-3 text-sm text-red-700">We couldn't send your inquiry. Check your connection and try again, or email hello@knowvasystems.com.</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
