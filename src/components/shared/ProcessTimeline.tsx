"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  description?: string;
  steps: ProcessStep[];
}

export default function ProcessTimeline({ title, description, steps }: ProcessTimelineProps) {
  return (
    <section className="section-padding relative bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" aria-hidden />
      <div className="container relative mx-auto px-4 sm:px-6">
        <SectionHeader title={title} description={description} />
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-premium text-primary-foreground flex items-center justify-center font-heading font-bold text-sm sm:text-lg shadow-premium ring-4 ring-primary/10">
                {step.step}
              </div>
              <div className="flex-1 premium-card p-4 sm:p-6">
                <h3 className="font-heading text-base sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
