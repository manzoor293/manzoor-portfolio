import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  FolderOpen,
  MapPin,
} from "lucide-react";

// Roles cycled through the typewriter effect
const TITLES = [
  "Full Stack Web Developer",
  "React.js Specialist",
  "MERN Stack Engineer",
  "UI/UX Enthusiast",
];

// Pre-generated particle config (avoids layout shift on re-render)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 12}s`,
  duration: `${8 + Math.random() * 14}s`,
  size: `${2 + Math.random() * 3}px`,
  color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#fbbf24",
}));

function Hero() {
  // ── Typewriter state ──────────────────────────────────────────────────────
  const [typed, setTyped] = useState("");
  const [tIdx, setTIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[tIdx];
    let timeout;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(
        () => setTyped(current.slice(0, typed.length + 1)),
        80,
      );
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(
        () => setTyped(current.slice(0, typed.length - 1)),
        40,
      );
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setTIdx((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, tIdx]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* ── Animated Background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            top: "-10%",
            right: "-15%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
            animation: "mesh-move 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            bottom: "-10%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
            animation: "mesh-move 25s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            top: "40%",
            left: "40%",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite",
          }}
        />
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px)," +
              "linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.4,
          }}
        />
        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              background: p.color,
              animationDelay: p.delay,
              animationDuration: p.duration,
              boxShadow: `0 0 6px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* ── Main Content ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* ── Left: Text ── */}
          <div>
            {/* Available badge */}
            <div
              style={{
                marginBottom: 24,
                animation: "reveal-up 0.6s ease forwards",
                animationDelay: "0.1s",
                opacity: 0,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  fontSize: "0.75rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--cyan)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22d3ee",
                    animation: "pulse-ring 2s infinite",
                  }}
                />
                Available for freelance work
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: 12,
                animation: "reveal-up 0.7s ease forwards",
                animationDelay: "0.2s",
                opacity: 0,
              }}
            >
              Hi, I'm <span className="gradient-text-shift">Manzoor Ahmad</span>
            </h1>

            {/* Typewriter */}
            <div
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "var(--text2)",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                marginBottom: 20,
                height: "2em",
                animation: "reveal-up 0.7s ease forwards",
                animationDelay: "0.3s",
                opacity: 0,
              }}
            >
              <span>{typed}</span>
              <span className="cursor-blink" />
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text2)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 36,
                animation: "reveal-up 0.7s ease forwards",
                animationDelay: "0.4s",
                opacity: 0,
              }}
            >
              I craft{" "}
              <strong style={{ color: "var(--text)" }}>
                scalable, performant web applications
              </strong>{" "}
              that solve real problems. Passionate about clean code, intuitive
              UX, and pushing the boundaries of modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 40,
                animation: "reveal-up 0.7s ease forwards",
                animationDelay: "0.5s",
                opacity: 0,
              }}
            >
              <button
                className="btn-primary"
                onClick={() => scrollTo("projects")}
              >
                <FolderOpen size={16} /> View Projects
              </button>
              <button className="btn-outline">
                <Download size={16} /> Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                animation: "reveal-up 0.7s ease forwards",
                animationDelay: "0.6s",
                opacity: 0,
              }}
            >
              {[
                { icon: <Github size={18} />, href: "#", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "#", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--text2)",
                    transition: "all 0.25s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--cyan)";
                    e.currentTarget.style.color = "var(--cyan)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginLeft: 8,
                  color: "var(--text3)",
                  fontSize: "0.8rem",
                }}
              >
                <MapPin size={14} style={{ color: "var(--cyan)" }} />
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          {/* ── Right: Avatar Orb ── */}
          <div
            className="hero-avatar"
            style={{
              display: "flex",
              justifyContent: "center",
              animation: "reveal-right 0.8s ease forwards",
              animationDelay: "0.5s",
              opacity: 0,
            }}
          >
            <div
              className="animate-float"
              style={{ position: "relative", width: 280, height: 280 }}
            >
              {/* Spinning decorative rings */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  border: "2px dashed rgba(34,211,238,0.2)",
                }}
              />
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  border: "1px dashed rgba(167,139,250,0.15)",
                  animationDirection: "reverse",
                  animationDuration: "30s",
                }}
              />
              {/* Avatar circle */}
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))",
                  border: "2px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "7rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(34,211,238,0.1) 100%)",
                  }}
                />
                <span
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(34,211,238,0.5))",
                  }}
                >
                  👨‍💻
                </span>
              </div>

              {/* Floating tech badges */}
              {[
                {
                  txt: "React.js",
                  pos: { top: -10, right: -20 },
                  color: "#22d3ee",
                },
                {
                  txt: "Node.js",
                  pos: { bottom: 20, left: -40 },
                  color: "#34d399",
                },
                {
                  txt: "Next.js",
                  pos: { top: 80, right: -55 },
                  color: "#a78bfa",
                },
              ].map((b) => (
                <div
                  key={b.txt}
                  style={{
                    position: "absolute",
                    ...b.pos,
                    padding: "5px 12px",
                    borderRadius: 8,
                    fontSize: "0.72rem",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    background: `${b.color}18`,
                    border: `1px solid ${b.color}40`,
                    color: b.color,
                    backdropFilter: "blur(8px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {b.txt}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 1,
            background: "var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border)",
            animation: "reveal-up 0.7s ease forwards",
            animationDelay: "0.8s",
            opacity: 0,
          }}
        >
          {[
            { num: "2+", label: "Years Experience" },
            { num: "15+", label: "Projects Built" },
            { num: "8+", label: "Technologies" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "20px",
                textAlign: "center",
                background: "var(--bg2)",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  color: "var(--cyan)",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text2)",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
