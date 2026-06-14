"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredIndiaCities } from "@/data/indiaCities";
import { biharCities, patnaAreas } from "@/data/locations";
import { internationalLocations } from "@/data/internationalLocations";

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightKeywords = (text: string, phrases: string[]) => {
  const uniquePhrases = [...new Set(phrases.filter(Boolean))];
  if (!text || uniquePhrases.length === 0) return [text];
  const phraseSet = new Set(uniquePhrases.map((phrase) => phrase.toLowerCase()));
  const pattern = new RegExp(
    `(${uniquePhrases.sort((a, b) => b.length - a.length).map(escapeRegex).join("|")})`,
    "gi"
  );
  return text.split(pattern).filter(Boolean).map((part, index) =>
    phraseSet.has(part.toLowerCase()) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-foreground">{part}</strong>
    ) : (
      part
    )
  );
};

interface ServiceLocationLinksProps {
  serviceSlug: string;
  serviceTitle: string;
}

export default function ServiceLocationLinks({ serviceSlug, serviceTitle }: ServiceLocationLinksProps) {
  const otherServices = [
    { name: "Web Development", slug: "web-development" },
    { name: "Software Development", slug: "software-development" },
    { name: "Mobile App Development", slug: "mobile-app-development" },
    { name: "Digital Marketing & SEO", slug: "digital-marketing" },
    { name: "IT Consulting", slug: "it-consulting" },
  ].filter((s) => s.slug !== serviceSlug);

  const serviceKeywords = [
    `${serviceTitle} company in India`,
    `${serviceTitle} in Delhi`,
    `${serviceTitle} in Mumbai`,
    `offshore ${serviceTitle.toLowerCase()} from India`,
    `best ${serviceTitle.toLowerCase()} company India`,
  ];

  return (
    <>
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {serviceTitle} Across India & Globally
              </h2>
              <p className="text-lg text-muted-foreground">
                City-specific pages for India SEO plus offshore pages for international clients hiring from India.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
            <p className="text-muted-foreground leading-relaxed">
              {highlightKeywords(
                `Rank for ${serviceTitle} in India, ${serviceTitle} in Delhi, Mumbai, Bangalore, and offshore ${serviceTitle.toLowerCase()} from India — each page targets local or international search intent.`,
                serviceKeywords
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" aria-hidden="true">🇮🇳</span>
            <h3 className="font-heading text-lg font-bold text-foreground">Major Indian Cities</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {featuredIndiaCities.slice(0, 15).map((loc, index) => (
              <motion.div key={loc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <Link href={`/services/${serviceSlug}/${loc.slug}`} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{serviceTitle} in {loc.city}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Globe2 className="h-5 w-5 text-primary" />
            <h3 className="font-heading text-lg font-bold text-foreground">International / Offshore</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {internationalLocations.slice(0, 8).map((loc, index) => (
              <motion.div key={loc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <Link href={`/services/${serviceSlug}/global/${loc.slug}`} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm">
                  <span aria-hidden="true">{loc.flag}</span>
                  <span className="text-foreground">{serviceTitle} for {loc.country}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Bihar Cities</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {biharCities.slice(0, 10).map((loc, index) => (
              <motion.div key={loc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <Link href={`/services/${serviceSlug}/${loc.slug}`} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{serviceTitle} in {loc.city}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground text-center mb-6">Patna Areas</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {patnaAreas.slice(0, 10).map((loc, index) => (
              <motion.div key={loc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <Link href={`/services/${serviceSlug}/${loc.slug}`} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{serviceTitle} in {loc.city}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/locations">View All Service Locations</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="font-heading text-xl font-bold text-foreground text-center mb-8">Explore Our Other Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
