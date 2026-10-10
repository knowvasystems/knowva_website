import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          <span className="mr-2 inline-block size-2.5 rounded-sm bg-signal align-middle" aria-hidden />Knowva Systems
        </a>
        <ul className="hidden items-center gap-7 text-sm text-slate-600 lg:flex">
          {navLinks.map((l) => (<li key={l.href}><a className="hover:text-ink" href={l.href}>{l.label}</a></li>))}
        </ul>
        <a href="#contact" className="hidden rounded-md bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 lg:inline-block">Schedule a Discovery Call</a>
        <button className="lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-5 pb-5 lg:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (<li key={l.href}><a onClick={() => setOpen(false)} className="block py-3 text-slate-700" href={l.href}>{l.label}</a></li>))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="block rounded-md bg-ink px-4 py-3 text-center text-sm font-medium text-white">Schedule a Discovery Call</a>
        </div>
      )}
    </header>
  );
}
