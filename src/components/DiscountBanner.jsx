import { ArrowRight, Sparkles, Tag } from "lucide-react";

export default function DiscountBanner() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600 p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle line decorations */}
          <div className="pointer-events-none absolute -right-10 -bottom-10 size-60 rounded-full border-4 border-white/10" />
          <div className="pointer-events-none absolute -left-10 -top-10 size-48 rounded-full border-4 border-white/10" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-300 backdrop-blur-md mb-3">
              <Tag className="size-3.5" />
              <span>Limited Time Discovery Offer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get special discount up to 20% for your next project
            </h3>
            <p className="mt-2 text-sm text-indigo-100/90">
              Book your technical architecture consultation before the end of the month and receive 20% off your initial agile sprint.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="#consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-indigo-700 shadow-xl transition-all duration-200 hover:bg-indigo-50 hover:shadow-2xl active:scale-95"
            >
              <span>Claim Discount</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
