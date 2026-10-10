import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import Standards from "./components/Standards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Solutions />
        <Process />
        <Standards />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
