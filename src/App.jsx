import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";
import DiscountBanner from "./components/DiscountBanner";
import Footer from "./components/Footer";

export default function App() {
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
