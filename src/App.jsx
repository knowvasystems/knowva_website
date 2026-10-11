import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ScrollStatement from "./components/ScrollStatement";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";
import DiscountBanner from "./components/DiscountBanner";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Webflow Tech 128 style scroll-triggered text reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".reveal-text");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ScrollStatement />
        <Solutions />
        <About />
        <Projects />
        <Process />
        <Team />
        <ContactForm />
        <DiscountBanner />
      </main>
      <Footer />
    </div>
  );
}
