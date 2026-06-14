"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import HeroLeadForm from "@/components/forms/HeroLeadForm";

interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  description: string;
  backLink?: { href: string; label: string };
  actions?: React.ReactNode;
  showForm?: boolean;
  formContext?: string;
  formTitle?: string;
  formSubtitle?: string;
  centered?: boolean;
}

export default function PageHero({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  backLink,
  actions,
  showForm = true,
  formContext = "Website Inquiry",
  formTitle,
  formSubtitle,
  centered = false,
}: PageHeroProps) {
  return (
    <section className="hero-premium">
      <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
      <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20 min-w-0">
        {centered ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            {backLink && (
              <Link
                href={backLink.href}
                className="mb-5 inline-flex min-h-[44px] items-center text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                {backLink.label}
              </Link>
            )}
            {badge && (
              <span className="glass-dark mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent">
                {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
                {badge}
              </span>
            )}
            <h1 className="heading-display mb-4 text-[1.75rem] text-primary-foreground sm:mb-6 sm:text-4xl md:text-5xl break-words">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg md:text-xl">
              {description}
            </p>
            {actions && <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>}
          </motion.div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_400px] lg:items-center xl:grid-cols-[1fr_420px] lg:gap-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl min-w-0"
            >
              {backLink && (
                <Link
                  href={backLink.href}
                  className="mb-5 inline-flex min-h-[44px] items-center text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  {backLink.label}
                </Link>
              )}
              {badge && (
                <span className="glass-dark mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent">
                  {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
                  {badge}
                </span>
              )}
              <h1 className="heading-display mb-4 text-[1.75rem] text-primary-foreground sm:mb-6 sm:text-4xl md:text-5xl break-words">
                {title}
              </h1>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:mb-8 sm:text-lg md:text-xl">
                {description}
              </p>
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </motion.div>

            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full"
              >
                <HeroLeadForm
                  context={formContext}
                  title={formTitle}
                  subtitle={formSubtitle}
                  variant="light"
                />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
