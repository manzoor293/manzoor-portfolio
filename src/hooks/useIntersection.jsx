import { useState, useEffect } from "react";

/**
 * useIntersection
 * Returns `true` once the referenced element enters the viewport.
 * Disconnects the observer after first trigger (animate once).
 *
 * @param {React.RefObject} ref       - Ref attached to the target element
 * @param {number}          threshold - 0–1 visibility ratio before firing (default 0.15)
 */
export function useIntersection(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
