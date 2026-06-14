"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface LegalPageHeroProps {
  badge: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export default function LegalPageHero({ badge, icon: Icon, title, subtitle }: LegalPageHeroProps) {
  return (
    <section className="hero-premium py-16 md:py-20 overflow-hidden">
      <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
      <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-accent">
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            {badge}
          </span>
          <h1 className="heading-display text-4xl md:text-5xl text-primary-foreground mb-6">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-lg text-primary-foreground/80 leading-relaxed">{subtitle}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
