import { Mail } from "lucide-react";
// import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_ICONS = [
  // { icon: <Github size={16} />, href: "#" },
  // { icon: <Linkedin size={16} />, href: "#" },
  { icon: <Mail size={16} />, href: "#" },
];

const QUICK_LINKS = ["Home", "About", "Projects", "Services", "Contact"];
const TECH_STACK = [
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

function Footer() {
  const scrollTo = (id) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        padding: "48px 24px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* ── Top Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                marginBottom: 14,
                background: "var(--gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Manzoor Ahmad
            </div>
            <p
              style={{
                color: "var(--text2)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 20,
              }}
            >
              Full Stack Web Developer building scalable, modern web
              applications with passion and precision.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL_ICONS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--text2)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--cyan)";
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text2)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                marginBottom: 16,
                fontSize: "0.9rem",
              }}
            >
              Quick Links
            </h5>
            {QUICK_LINKS.map((link) => (
              <p key={link} style={{ marginBottom: 10 }}>
                <span
                  style={{
                    color: "var(--text2)",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onClick={() => scrollTo(link)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--cyan)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text2)")
                  }
                >
                  {link}
                </span>
              </p>
            ))}
          </div>

          {/* Tech stack */}
          <div>
            <h5
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                marginBottom: 16,
                fontSize: "0.9rem",
              }}
            >
              Tech Stack
            </h5>
            {TECH_STACK.map((tech) => (
              <p
                key={tech}
                style={{
                  color: "var(--text2)",
                  fontSize: "0.85rem",
                  marginBottom: 10,
                }}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Manzoor Ahmad. All rights reserved.
          </p>
          <p style={{ color: "var(--text3)", fontSize: "0.8rem" }}>
            Built with ⚛️ React + 🎨 Tailwind CSS
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
