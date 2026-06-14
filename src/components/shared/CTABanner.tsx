"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
}

export default function CTABanner({
  title,
  description,
  primaryLabel = "Get Free Quote",
  primaryHref = "/contact",
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/25 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-foreground/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-dark rounded-3xl px-6 py-10 sm:px-10 sm:py-14"
        >
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-4 opacity-90" />
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 mb-6 sm:mb-8 px-2 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button asChild variant="accent" size="xl" className="w-full sm:w-auto">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {showPhone && (
              <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <a href="tel:+919470024607">
                  <Phone className="mr-2 h-5 w-5" />
                  +91 94700 24607
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
