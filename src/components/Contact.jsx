import { useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useIntersection } from "../hooks/useIntersection";

// Contact info items
const CONTACT_INFO = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "manzoorahmadm293@gmail.com",
    href:"https://mail.google.com/mail/u/0/#inbox",
    color: "#22d3ee",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/manzoor",
    href: "https://www.linkedin.com/in/manzoor-ahmad-b776a2269/",
    color: "#a78bfa",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/manzoor",
    href: "https://github.com/manzoor293",
    color: "#34d399",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Pakistan 🇵🇰",
    color: "#fbbf24",
  },
];

// Simple email regex
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!EMAIL_RE.test(form.email)) e.email = "Valid email required";
    if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters";
    return e;
  };

  // ── Submit handler ────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSending(true);
    // Replace with real EmailJS / API call
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: "" }));
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "100px 0", background: "var(--bg2)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>
            Get In Touch
          </div>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: 16 }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p
            style={{
              color: "var(--text2)",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Have a project or just want to say hi? My inbox is always open.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 40,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* ── Left: Contact info ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-25px)",
              transition: "all 0.7s 0.2s",
            }}
          >
            {CONTACT_INFO.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "18px 20px",
                  borderRadius: 14,
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  marginBottom: 14,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: `${c.color}12`,
                    border: `1px solid ${c.color}28`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.color,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text3)",
                      fontFamily: "'JetBrains Mono',monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── Right: Form ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(25px)",
              transition: "all 0.7s 0.3s",
            }}
          >
            {sent ? (
              /* Success state */
              <div
                style={{
                  padding: "40px",
                  textAlign: "center",
                  background: "var(--card)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  borderRadius: 20,
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>✅</div>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    color: "#34d399",
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text2)" }}>
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              /* Form */
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "32px",
                }}
              >
                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text2)",
                        display: "block",
                        marginBottom: 8,
                        fontWeight: 600,
                      }}
                    >
                      Name *
                    </label>
                    <input
                      placeholder="Your name"
                      value={form.name}
                      onChange={update("name")}
                    />
                    {errors.name && (
                      <p
                        style={{
                          color: "#f87171",
                          fontSize: "0.72rem",
                          marginTop: 4,
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text2)",
                        display: "block",
                        marginBottom: 8,
                        fontWeight: 600,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={update("email")}
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#f87171",
                          fontSize: "0.72rem",
                          marginTop: 4,
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text2)",
                      display: "block",
                      marginBottom: 8,
                      fontWeight: 600,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    placeholder="Project inquiry, collaboration, etc."
                    value={form.subject}
                    onChange={update("subject")}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <label
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text2)",
                      display: "block",
                      marginBottom: 8,
                      fontWeight: 600,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={update("message")}
                  />
                  {errors.message && (
                    <p
                      style={{
                        color: "#f87171",
                        fontSize: "0.72rem",
                        marginTop: 4,
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={handleSubmit}
                >
                  {sending ? (
                    "Sending…"
                  ) : (
                    <>
                      <Mail size={16} /> Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Contact;
