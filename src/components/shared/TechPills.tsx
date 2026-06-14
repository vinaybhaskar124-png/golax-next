"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface TechPillsProps {
  title: string;
  description?: string;
  items: string[] | { name: string; category?: string }[];
}

export default function TechPills({ title, description, items }: TechPillsProps) {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title={title} description={description} />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
        >
          {items.map((item, index) => {
            const name = typeof item === "string" ? item : item.name;
            return (
              <span
                key={`${name}-${index}`}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground shadow-sm hover:border-primary hover:text-primary transition-colors"
              >
                {name}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
