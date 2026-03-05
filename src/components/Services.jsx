import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useIntersection } from "../hooks/useIntersection";
import { SERVICES } from "../data/index.jsx";

function Services() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section id="services" ref={ref} style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>
            What I Offer
          </div>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: 16 }}
          >
            My <span className="gradient-text">Services</span>
          </h2>
          <p
            style={{
              color: "var(--text2)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Comprehensive web development services from concept to deployment
          </p>
        </div>

        {/* ── Service Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            marginBottom: 64,
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="service-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(25px)",
                transition: `all 0.6s ${0.1 + i * 0.12}s`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  marginBottom: 20,
                  background: `${service.color}12`,
                  border: `1px solid ${service.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  marginBottom: 12,
                  fontSize: "1rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                }}
              >
                {service.desc}
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: service.color,
                  fontSize: "0.8rem",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08))",
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s 0.5s",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: 8,
              }}
            >
              Let's Build Something{" "}
              <span className="gradient-text">Remarkable</span>
            </h3>
            <p style={{ color: "var(--text2)", fontSize: "0.9rem" }}>
              Have a project in mind? Let's discuss how I can help.
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a Project <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
