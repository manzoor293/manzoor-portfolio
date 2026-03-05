import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/index.jsx";

/**
 * Navbar — sticky header with dark/light toggle, active section highlight,
 * and a responsive hamburger menu for mobile.
 */
function Navbar({ dark, toggleDark, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position to add background blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 0" : "20px 0",
          transition: "all 0.3s",
          background: scrolled ? "rgba(7,7,15,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.4rem",
              background: "var(--gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MA<span style={{ color: "var(--cyan)" }}>.</span>
          </span>

          {/* ── Desktop Nav Links ── */}
          <div
            style={{ display: "flex", gap: 32, alignItems: "center" }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <span
                key={link}
                className={`nav-link${activeSection === link.toLowerCase() ? " active" : ""}`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </span>
            ))}
          </div>

          {/* ── Right Controls ── */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {/* Dark / Light toggle */}
            <button
              onClick={toggleDark}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--card)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text2)",
                transition: "all 0.2s",
              }}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hire Me CTA — hidden on mobile */}
            <button
              className="desktop-cta btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.8rem" }}
              onClick={() => scrollTo("Contact")}
            >
              Hire Me
            </button>

            {/* Hamburger — visible on mobile only */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--card)",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "var(--bg2)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className="nav-link"
              onClick={() => scrollTo(link)}
              style={{ fontSize: "1rem", padding: "6px 0" }}
            >
              {link}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
