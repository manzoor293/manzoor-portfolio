import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import useIntersection from "./hooks/useIntersection";
// import index from "./data/index.js";
// import globals from "./styles/globals.css";

const SECTIONS = ["home", "about", "projects", "services", "contact"];

function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // ── Track active section for nav highlight ────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { threshold: 0.4 },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Apply 'light' class to root to activate light-mode CSS variables
    <div className={dark ? "" : "light"} style={{ minHeight: "100vh" }}>
      <Navbar
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
        activeSection={activeSection}
      />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
