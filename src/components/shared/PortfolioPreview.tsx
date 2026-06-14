"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

export interface PortfolioPreviewItem {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  highlight: string;
  color: string;
}

interface PortfolioPreviewProps {
  projects: PortfolioPreviewItem[];
}

export default function PortfolioPreview({ projects }: PortfolioPreviewProps) {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="Our Work"
          title="Projects That Drive Real Results"
          description="A glimpse of how we've helped businesses across India and globally grow with technology."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group premium-card overflow-hidden hover:shadow-xl"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
              <div className="p-5 sm:p-7">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <project.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground text-base sm:text-lg leading-snug mt-1 tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                <p className="text-sm font-semibold text-gradient">{project.highlight}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-12">
          <Button asChild variant="hero" size="lg" className="min-h-[48px]">
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
