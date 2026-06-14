"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  badge?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  variant?: "default" | "card";
}

export default function FeatureGrid({
  badge,
  title,
  description,
  features,
  columns = 3,
  variant = "default",
}: FeatureGridProps) {
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="section-padding relative bg-card overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" aria-hidden />
      <div className="container relative mx-auto px-4 sm:px-6">
        <SectionHeader badge={badge} title={title} description={description} />
        <div className={`grid grid-cols-1 ${gridCols} gap-4 sm:gap-6 lg:gap-8`}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`group premium-card p-5 sm:p-6 lg:p-8 ${
                variant === "default" ? "bg-background/80" : ""
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
