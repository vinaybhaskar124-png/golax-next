"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl mb-10 sm:mb-14 flex flex-col ${alignClass} ${className}`}
    >
      {badge && (
        <>
          <span className="badge-premium mb-3 sm:mb-4">
            {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
            {badge}
          </span>
          <div className={`accent-line mb-4 sm:mb-5 ${align === "center" ? "mx-auto" : ""}`} />
        </>
      )}
      <h2 className="heading-display text-2xl sm:text-3xl md:text-[2.5rem] text-foreground mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
