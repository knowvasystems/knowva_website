import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const STATEMENT_WORDS = [
  { text: "We", highlight: false },
  { text: "empower", highlight: false },
  { text: "ambitious", highlight: false },
  { text: "enterprises", highlight: true },
  { text: "with", highlight: false },
  { text: "high-velocity", highlight: true },
  { text: "cloud", highlight: false },
  { text: "infrastructure,", highlight: false },
  { text: "resilient", highlight: false },
  { text: "cyber", highlight: true },
  { text: "defense,", highlight: true },
  { text: "and", highlight: false },
  { text: "bespoke", highlight: false },
  { text: "software", highlight: true },
  { text: "engineered", highlight: false },
  { text: "for", highlight: false },
  { text: "continuous", highlight: false },
  { text: "scale.", highlight: true },
];

export default function ScrollStatement() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress as element passes through the viewport
      // Starts when the top enters viewport (rect.top <= windowHeight)
      // Completes when element is well in view
      const totalDist = windowHeight * 0.9;
      const current = windowHeight - rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 text-white border-y border-slate-800/80"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent blur-3xl opacity-60" />
      
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Eyebrow badge matching Tech-128 */}
        <div className="reveal-text flex items-center justify-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md">
            <Sparkles className="size-3.5 text-indigo-400" />
            Our Core Mission
          </span>
        </div>

        {/* Scroll scrub illuminated statement */}
        <div className="text-center font-sans text-3xl font-bold leading-relaxed tracking-tight sm:text-4xl md:text-5xl md:leading-tight lg:text-[3.25rem] lg:leading-[1.25]">
          {STATEMENT_WORDS.map((item, index) => {
            // Fraction step for each word
            const wordThreshold = (index + 1) / STATEMENT_WORDS.length;
            const isLit = scrollProgress >= wordThreshold * 0.85;

            return (
              <span
                key={index}
                className={`inline-block mr-2.5 sm:mr-3.5 transition-all duration-300 ${
                  isLit
                    ? item.highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-100 to-teal-300 font-extrabold scale-[1.02]"
                      : "text-white"
                    : "text-slate-600/80 hover:text-slate-400"
                }`}
              >
                {item.text}
              </span>
            );
          })}
        </div>

        {/* Bottom micro-metrics & link */}
        <div className="reveal-text delay-200 mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-teal-400 animate-pulse" />
            <span>99.99% Guaranteed SLA</span>
          </div>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div>Enterprise-Grade Security</div>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <a
            href="#solutions"
            className="group inline-flex items-center gap-1.5 font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
          >
            <span>Explore our capabilities</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
