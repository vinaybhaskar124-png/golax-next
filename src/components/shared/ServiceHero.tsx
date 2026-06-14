"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";

interface ServiceHeroProps {
  icon: LucideIcon;
  badge: string;
  title: React.ReactNode;
  description: string;
  formContext: string;
  defaultService: string;
  formTitle?: string;
  formSubtitle?: string;
}

export default function ServiceHero({
  icon: Icon,
  badge,
  title,
  description,
  formContext,
  defaultService,
  formTitle,
  formSubtitle,
}: ServiceHeroProps) {
  return (
    <section className="hero-premium">
      <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
      <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-10 sm:py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-primary-foreground/70 hover:text-accent mb-5 text-sm transition-colors min-h-[44px]"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              All Services
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 ring-1 ring-accent/30 flex items-center justify-center shrink-0">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <span className="glass-dark rounded-full px-4 py-1.5 text-accent font-semibold text-sm sm:text-base">{badge}</span>
            </div>
            <h1 className="heading-display text-[1.75rem] sm:text-4xl md:text-5xl text-primary-foreground mb-4 sm:mb-6">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:hidden lg:flex">
              <Button asChild variant="accent" size="lg" className="w-full sm:w-auto min-h-[48px]">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto min-h-[48px]">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-2 w-full"
          >
            <HeroLeadForm
              context={formContext}
              defaultService={defaultService}
              title={formTitle ?? `Get a Free ${defaultService} Quote`}
              subtitle={formSubtitle ?? "Reply on WhatsApp within 2 business hours."}
              variant="light"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
