import { useState } from "react";
import { ArrowRight, Play, CheckCircle2, Star, ShieldCheck, Sparkles } from "lucide-react";


export default function Hero() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white">
      {/* Decorative SVG Circular Background Arcs from Figma */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute -left-40 -top-40 size-[600px] text-white" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="2" strokeDasharray="12 12" />
          <circle cx="300" cy="300" r="210" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
        <svg className="absolute -right-20 top-1/4 size-[700px] text-white" viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="320" stroke="currentColor" strokeWidth="2" />
          <circle cx="350" cy="350" r="240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 10" />
          <circle cx="350" cy="350" r="160" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide uppercase text-indigo-100 backdrop-blur-md">
              <Sparkles className="size-3.5 text-yellow-300" />
              <span>Best Quality IT Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
              We provide best IT solutions for help your problem about technology
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-100/90 font-normal">
              Empowering organizations with high-velocity cloud architecture, dedicated cyber defense, and tailored enterprise software built for modern scale.
            </p>

            {/* Search/Email CTA Bar */}
            <div className="mt-8 max-w-lg">
              <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row items-center gap-2 rounded-full bg-white p-1.5 shadow-2xl shadow-indigo-950/40">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full rounded-full border-none px-5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 cursor-pointer rounded-full bg-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 active:scale-95"
                >
                  Get Started
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs font-semibold text-teal-300 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="size-3.5" />
                  Thank you! An IT consultant will contact you shortly.
                </p>
              )}
            </div>

            {/* Trust bullet features */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-medium text-indigo-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300 shrink-0" />
                <span>Zero Downtime Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300 shrink-0" />
                <span>24/7 Dedicated IT Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300 shrink-0" />
                <span>100% Guaranteed IP Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Collage & Interactive Floating Badges */}
          <div className="relative flex justify-center lg:col-span-5">
            {/* Circular Composition Ring Frame */}
            <div className="relative size-80 sm:size-96 rounded-full border-4 border-white/20 p-3 shadow-2xl">
              <div className="relative size-full overflow-hidden rounded-full border-4 border-white/40 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="IT Solutions Team Working Collaboratively"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent" />
              </div>

              {/* Top-Right Mini Circular Photo Badge */}
              <div className="absolute -top-3 -right-3 size-24 sm:size-28 overflow-hidden rounded-full border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="IT Engineer Coding"
                  className="size-full object-cover"
                />
              </div>

              {/* Bottom-Left Experience Floating Badge */}
              <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white p-4 shadow-2xl text-slate-800 border border-slate-100 flex items-center gap-3.5 animate-in slide-in-from-bottom-3 duration-500">
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-lg">
                  25+
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-bold text-xs text-slate-900 mt-0.5">Years of Experience</p>
                  <p className="text-[10px] text-slate-500">In Enterprise IT Solutions</p>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-xs flex items-center gap-2 text-xs font-bold text-indigo-900 border border-indigo-100">
                <ShieldCheck className="size-4 text-indigo-600" />
                <span>Verified ISO 27001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client / Partner Brand Logos Strip */}
        <div className="mt-20 border-t border-white/15 pt-10">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-indigo-200/80 mb-6">

          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-85">

          </div>
        </div>
      </div>
    </section>
  );
}
