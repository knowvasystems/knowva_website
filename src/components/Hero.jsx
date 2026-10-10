import { Gauge, Cloud, KeyRound } from "lucide-react";

const badges = [
  { icon: Gauge, text: "99.99% target reliability" },
  { icon: Cloud, text: "Cloud-native architecture" },
  { icon: KeyRound, text: "End-to-end IP ownership" },
];

function Topology() {
  const nodes = [
    { x: 60, y: 60, l: "Ingest" }, { x: 60, y: 160, l: "Events" },
    { x: 230, y: 110, l: "Region A" }, { x: 400, y: 60, l: "Region B" }, { x: 400, y: 160, l: "Analytics" },
  ];
  const links = [[0, 2], [1, 2], [2, 3], [2, 4]];
  return (
    <figure className="rounded-xl border border-slate-800 bg-deep p-4 shadow-xl">
      <svg viewBox="0 0 460 220" role="img" aria-label="Diagram: events flow into two cloud regions and an analytics store" className="w-full">
        {links.map(([a, b], i) => (
          <line key={i} className="flow" x1={nodes[a].x + 40} y1={nodes[a].y} x2={nodes[b].x - 40} y2={nodes[b].y} stroke="#2dd4bf" strokeWidth="1.5" />
        ))}
        {nodes.map((n) => (
          <g key={n.l}>
            <rect x={n.x - 40} y={n.y - 20} width="80" height="40" rx="6" fill="#111c33" stroke="#334155" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="11" fill="#e2e8f0">{n.l}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
        <span>Active-active, two regions</span>
        <span className="flex items-center gap-1.5 text-teal-300"><span className="size-1.5 rounded-full bg-teal-300" />All services healthy</span>
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24">
      <div>
        <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          Engineering Scalable Digital Platforms for Complex Enterprise Problems
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Knowva Systems designs, deploys and maintains high-reliability cloud tools and analytics engines that automate the processes your operations depend on.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-md bg-signal px-5 py-3 text-sm font-medium text-white hover:bg-teal-800">Book a Technical Discovery</a>
          <a href="#solutions" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium hover:border-slate-400">Explore Solutions</a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-700">
          {badges.map(({ icon: I, text }) => (<li key={text} className="flex items-center gap-2"><I className="size-4 text-signal" aria-hidden />{text}</li>))}
        </ul>
      </div>
      <Topology />
    </section>
  );
}
