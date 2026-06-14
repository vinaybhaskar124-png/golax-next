"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Globe,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { SearchTermLink } from "@/lib/seo/internationalKeywords";

interface Props {
  title: string;
  subtitle?: string;
  terms: SearchTermLink[];
}

interface TermCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: SearchTermLink[];
}

function categorizeTerms(terms: SearchTermLink[]): TermCategory[] {
  const services: SearchTermLink[] = [];
  const cities: SearchTermLink[] = [];
  const offshore: SearchTermLink[] = [];

  for (const term of terms) {
    if (term.href?.includes("/locations/global/") && term.href.split("/").filter(Boolean).length >= 4) {
      cities.push(term);
    } else if (
      term.href?.includes("/services/") ||
      /web development|software development|mobile app|digital marketing|seo services|it consulting/i.test(term.label)
    ) {
      services.push(term);
    } else if (/outsource|offshore|hire|dedicated|outsourcing|saas|e-commerce|react|flutter|startup/i.test(term.label)) {
      offshore.push(term);
    } else {
      services.push(term);
    }
  }

  return [
    {
      id: "services",
      title: "IT & Development Services",
      description: "Core service searches with direct links",
      icon: Code,
      items: services,
    },
    {
      id: "cities",
      title: "City-Specific Searches",
      description: "Local intent across major business hubs",
      icon: MapPin,
      items: cities,
    },
    {
      id: "offshore",
      title: "Offshore & Hiring",
      description: "Outsourcing and dedicated team queries",
      icon: Globe,
      items: offshore,
    },
  ].filter((category) => category.items.length > 0);
}

function TermRow({ term }: { term: SearchTermLink }) {
  const content = (
    <>
      <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {term.href ? (
          <ArrowRight className="h-3.5 w-3.5" />
        ) : (
          <Search className="h-3.5 w-3.5" />
        )}
      </span>
      <span className="text-sm leading-snug text-muted-foreground transition-colors group-hover:text-foreground">
        {term.label}
      </span>
    </>
  );

  if (term.href) {
    return (
      <Link
        href={term.href}
        className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-primary/15 hover:bg-primary/[0.04]"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group flex items-start gap-3 rounded-xl border border-border/50 bg-muted/30 px-3 py-2.5">
      {content}
    </div>
  );
}

export default function KeywordTopicsSection({ title, subtitle, terms }: Props) {
  const categories = categorizeTerms(terms);
  const linkedCount = terms.filter((term) => term.href).length;

  return (
    <section className="section-padding-sm relative overflow-hidden bg-gradient-subtle">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Popular Searches"
          badgeIcon={Sparkles}
          title={title}
          description={subtitle}
          align="center"
          className="max-w-3xl"
        />

        <div className="mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          <span className="badge-premium">
            <Search className="h-3.5 w-3.5" />
            {terms.length} search topics
          </span>
          <span className="inline-flex items-center rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            {linkedCount} with internal links
          </span>
        </div>

        <div
          className={`mx-auto grid max-w-6xl gap-5 sm:gap-6 ${
            categories.length === 1
              ? "max-w-2xl"
              : categories.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="premium-card flex h-full flex-col p-5 sm:p-6"
              >
                <div className="mb-5 flex items-start gap-3 border-b border-border/60 pb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                      {category.description}
                    </p>
                    <span className="mt-2 inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
                      {category.items.length} topics
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-0.5">
                  {category.items.map((term) => (
                    <TermRow key={term.label} term={term} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
