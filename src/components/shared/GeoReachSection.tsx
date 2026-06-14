"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { featuredIndiaCities } from "@/data/indiaCities";
import { internationalLocations } from "@/data/internationalLocations";
import { patnaAreas } from "@/data/locations";

interface GeoReachSectionProps {
  showPatna?: boolean;
}

export default function GeoReachSection({ showPatna = true }: GeoReachSectionProps) {
  const topIndia = featuredIndiaCities.slice(0, 16);
  const topGlobal = internationalLocations.slice(0, 8);

  return (
    <section className="section-padding bg-card border-y border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 space-y-14 sm:space-y-16 relative z-10">
        <SectionHeader
          badge="Global Reach"
          title="Serving Businesses Across India & Worldwide"
          description="Headquartered in Patna, Bihar — delivering web, software, apps and digital marketing to clients in 25+ Indian cities and 12+ countries."
        />

        {/* India */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl" aria-hidden="true">🇮🇳</span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Major Cities in India</h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {topIndia.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                <Link
                  href={`/locations/${city.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium border border-border/80 hover:border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {city.city}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/locations#india" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              View all India locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* International */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe2 className="h-6 w-6 text-primary" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Offshore & International</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {topGlobal.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={`/locations/global/${loc.slug}`}
                  className="flex items-center gap-2 p-3 sm:p-4 bg-background rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all text-sm font-medium"
                >
                  <span className="text-xl" aria-hidden="true">{loc.flag}</span>
                  <span className="text-foreground">{loc.country}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/locations#global" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              All international locations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Patna & Bihar */}
        {showPatna && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-6 w-6 text-accent" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Patna & Bihar — Our Home Base</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base max-w-2xl">
              Proudly headquartered in Patna with deep local presence across Bihar districts and neighbourhoods.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {patnaAreas.slice(0, 8).map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/patna/${area.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-full text-sm font-medium border border-accent/20 transition-all"
                >
                  {area.city}
                </Link>
              ))}
              <Link
                href="/locations#bihar"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-primary font-medium text-sm hover:underline"
              >
                All Bihar cities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        <div className="text-center pt-2">
          <Button asChild variant="hero" size="lg">
            <Link href="/locations">Explore All Service Locations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
