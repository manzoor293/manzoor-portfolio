import { useRef } from "react";
import { User, GraduationCap, CheckCircle } from "lucide-react";
import { useIntersection } from "../hooks/useIntersection";
import { SKILLS, TECH_BADGES } from "../data/index.jsx";

function About() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="about" ref={ref} style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            className="section-label"
            style={{
              marginBottom: 12,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          >
            About Me
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(2rem,4vw,2.8rem)",
              marginBottom: 16,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s 0.1s",
            }}
          >
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p
            style={{
              color: "var(--text2)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s 0.2s",
            }}
          >
            A passionate developer who loves turning complex ideas into elegant
            solutions
          </p>
        </div>

        {/* ── Two-column Layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* ── Left: Bio + Education ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s 0.2s",
            }}
          >
            {/* Professional summary card */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "28px",
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <User size={22} style={{ color: "var(--cyan)" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    Professional Summary
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--text2)" }}>
                    Full Stack Web Developer
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  fontSize: "0.9rem",
                }}
              >
                I'm{" "}
                <strong style={{ color: "var(--text)" }}>Manzoor Ahmad</strong>,
                a Full Stack Web Developer with expertise in building scalable,
                high-performance web applications. I focus on crafting clean,
                maintainable code with exceptional user experiences. My approach
                combines{" "}
                <strong style={{ color: "var(--cyan)" }}>
                  modern technologies
                </strong>{" "}
                with solid software engineering principles.
              </p>
              <p
                style={{
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  fontSize: "0.9rem",
                  marginTop: 14,
                }}
              >
                I thrive in collaborative environments and enjoy solving
                challenging technical problems, from architecting RESTful APIs
                to building responsive, accessible frontends.
              </p>
            </div>

            {/* Education card */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "24px",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <GraduationCap size={20} style={{ color: "var(--violet)" }} />
                Education
              </h4>
              <div
                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: "rgba(167,139,250,0.1)",
                    border: "1px solid rgba(167,139,250,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  🎓
                </div>
                <div>
                  <h5
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    BS Computer Science
                  </h5>
                  <p
                    style={{
                      color: "var(--cyan)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    UET Mardan
                  </p>
                  <p style={{ color: "var(--text2)", fontSize: "0.78rem" }}>
                    University of Engineering &amp; Technology, Mardan
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 8,
                      padding: "3px 10px",
                      borderRadius: 20,
                      background: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      fontSize: "0.72rem",
                      color: "var(--cyan)",
                    }}
                  >
                    <CheckCircle size={11} /> Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Skills ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s 0.35s",
            }}
          >
            <h4
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                marginBottom: 24,
                fontSize: "1.05rem",
              }}
            >
              Technical Skills
            </h4>

            {/* Animated progress bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {SKILLS.map((skill, i) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {skill.icon} {skill.name}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: "0.75rem", color: "var(--cyan)" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress-bar-track">
                    {visible && (
                      <div
                        className="progress-bar-fill"
                        style={{
                          "--fill-w": `${skill.level}%`,
                          animationDelay: `${0.4 + i * 0.08}s`,
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Technology badges */}
            <div style={{ marginTop: 28 }}>
              <h4
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  marginBottom: 16,
                  fontSize: "0.9rem",
                  color: "var(--text2)",
                }}
              >
                Technologies &amp; Tools
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TECH_BADGES.map((badge) => (
                  <span key={badge} className="skill-badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default About;
