import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

/**
 * ScrollToTop — floating button that appears after scrolling 300px,
 * smoothly returns the user to the top of the page on click.
 */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        width: 44,
        height: 44,
        borderRadius: 12,
        border: "1px solid var(--border-hover)",
        background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#07070f",
        transition: "all 0.3s",
        boxShadow: "0 8px 24px rgba(34,211,238,0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
}

export default ScrollToTop;
