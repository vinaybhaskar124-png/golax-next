"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface TrustStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface TrustBarProps {
  stats: TrustStat[];
  variant?: "light" | "dark";
}

export default function TrustBar({ stats, variant = "light" }: TrustBarProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative border-y overflow-hidden ${
        isDark
          ? "border-primary-foreground/15 bg-primary/50 backdrop-blur-md"
          : "border-border/60 bg-card/90 backdrop-blur-sm"
      }`}
    >
      {!isDark && <div className="absolute inset-0 bg-mesh pointer-events-none" />}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`flex items-center gap-3 sm:gap-4 ${
                index > 0 ? "lg:border-l lg:border-border/50 lg:pl-8" : ""
              }`}
            >
              <div
                className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                  isDark
                    ? "bg-accent/20 text-accent ring-1 ring-accent/30"
                    : "bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-primary/10"
                }`}
              >
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <div
                  className={`font-heading text-xl sm:text-2xl md:text-3xl font-bold leading-none mb-1 tabular-nums ${
                    isDark ? "text-primary-foreground" : "text-gradient"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-xs sm:text-sm leading-snug font-medium ${
                    isDark ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
