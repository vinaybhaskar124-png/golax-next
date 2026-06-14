"use client";

import { useEffect, useState } from "react";

/**
 * Fixed gradient progress bar at the top of the viewport that tracks
 * reading progress through the targeted article element.
 */
export default function ReadingProgress({ targetSelector = "article.blog-article" }: { targetSelector?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.querySelector(targetSelector) as HTMLElement | null;
      if (!el) {
        setProgress(0);
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = -rect.top;
      const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      setProgress(pct);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetSelector]);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-150 ease-out shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
