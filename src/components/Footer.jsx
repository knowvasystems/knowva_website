import { navLinks } from "../lib/content";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-lg font-semibold">Knowva Systems</p>
          <p className="mt-2 text-sm text-slate-600">Production-grade platforms and software for complex operations.</p>
          <a href="mailto:hello@knowvasystems.com" className="mt-3 inline-block text-sm text-signal underline underline-offset-4">hello@knowvasystems.com</a>
        </div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-slate-600">
          {navLinks.map((l) => (<li key={l.href}><a className="hover:text-ink" href={l.href}>{l.label}</a></li>))}
          <li><a className="hover:text-ink" href="/privacy">Privacy policy</a></li>
        </ul></nav>
      </div>
      <p className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">© Knowva Systems LLC. All rights reserved.</p>
    </footer>
  );
}
