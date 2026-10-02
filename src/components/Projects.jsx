import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

import { useIntersection } from "../hooks/useIntersection";
import { PROJECTS } from "../data/index.jsx";

const FILTERS = ["All", "Next.js", "React", "Node.js", "MongoDB"];

function Projects() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.some((t) => t.includes(filter)));

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: "100px 0", background: "var(--bg2)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>
            My Work
          </div>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: 16 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            style={{
              color: "var(--text2)",
              maxWidth: 480,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            A selection of projects that showcase my problem-solving ability and
            technical range
          </p>

          {/* Filter pills */}
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "7px 18px",
                  borderRadius: 50,
                  fontSize: "0.8rem",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  border:
                    filter === f
                      ? "1px solid var(--cyan)"
                      : "1px solid var(--border)",
                  background:
                    filter === f ? "rgba(34,211,238,0.12)" : "var(--card)",
                  color: filter === f ? "var(--cyan)" : "var(--text2)",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Project Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="project-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ${0.1 + i * 0.1}s`,
              }}
            >
              {/* Image / icon area */}
              <div
                style={{
                  height: 180,
                  position: "relative",
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "5rem",
                    filter: `drop-shadow(0 0 20px ${project.color}60)`,
                  }}
                >
                  {project.icon}
                </span>

                {/* Hover overlay — links */}
                <div
                  className="project-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 16,
                    gap: 10,
                  }}
                >
                  <a
                    href={project.github}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "7px 14px",
                      borderRadius: 8,
                      background: "white",
                      color: "rgba(7,7,15,0.9)",
                      fontSize: "0.75rem",
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Github size={13} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "7px 14px",
                        borderRadius: 8,
                        background: project.color,
                        color: "#07070f",
                        fontSize: "0.75rem",
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 8,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text2)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {project.desc}
                </p>
                {/* Tech stack badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 10px",
                        borderRadius: 6,
                        fontSize: "0.7rem",
                        fontFamily: "'JetBrains Mono',monospace",
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}30`,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button className="btn-outline">
            View All Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
