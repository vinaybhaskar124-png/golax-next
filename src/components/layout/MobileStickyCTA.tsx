"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+919470024607";
const WHATSAPP = "919470024607";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Golax India, I'm interested in your IT services. Please share more details."
);

interface MobileStickyCTAProps {
  onVisibilityChange?: (visible: boolean) => void;
}

/** Mobile bottom bar — hides on scroll down, reappears on scroll up or at top */
export default function MobileStickyCTA({ onVisibilityChange }: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const visibleRef = useRef(true);
  const onVisibilityChangeRef = useRef(onVisibilityChange);

  useEffect(() => {
    onVisibilityChangeRef.current = onVisibilityChange;
  }, [onVisibilityChange]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const setBarVisible = (next: boolean) => {
      if (visibleRef.current === next) return;
      visibleRef.current = next;
      setVisible(next);
      onVisibilityChangeRef.current?.(next);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (y < 48) {
        setBarVisible(true);
      } else if (delta > 8) {
        setBarVisible(false);
      } else if (delta < -8) {
        setBarVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
      role="complementary"
      aria-label="Quick contact actions"
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 gap-2 p-2.5 max-w-lg mx-auto">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-primary text-primary-foreground font-semibold text-sm active:scale-[0.98] transition-transform"
        >
          <Phone className="h-5 w-5 shrink-0" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-[#25D366] text-white font-semibold text-sm active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="h-5 w-5 shrink-0" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
