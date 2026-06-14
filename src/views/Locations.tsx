"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Building2, Users, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import TrustBar from "@/components/shared/TrustBar";
import CTABanner from "@/components/shared/CTABanner";
import { patnaAreas, biharCities } from "@/data/locations";
import { featuredIndiaCities } from "@/data/indiaCities";
import { internationalLocations } from "@/data/internationalLocations";

export default function Locations() {
  return (
    <Layout>
      
      <PageHero
        badge="Our Service Areas"
        badgeIcon={MapPin}
        title={<>IT Services Across <span className="text-accent">India & Worldwide</span></>}
        description="Headquartered in Patna, Bihar — delivering web, software, apps and digital marketing to 25+ Indian cities and 12+ countries worldwide."
        formContext="Locations"
        actions={
          <>
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="tel:+919470024607">Call: +91 94700 24607</a>
            </Button>
          </>
        }
      />

      <TrustBar
        stats={[
          { icon: Globe2, value: "25+", label: "Indian Cities" },
          { icon: Building2, value: "500+", label: "Projects Delivered" },
          { icon: Users, value: "300+", label: "Happy Clients" },
          { icon: MapPin, value: "10+", label: "Years Experience" },
        ]}
      />

      {/* India Cities */}
      <section id="india" className="section-padding relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-40" aria-hidden />
        <div className="container relative mx-auto px-4">
          <SectionHeader
            badge="All India"
            title="IT Services in Major Indian Cities"
            description="Web development, software, mobile apps and digital marketing for businesses in metro and tier-2 cities across India."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIndiaCities.map((city, index) => (
              <motion.div key={city.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <Link href={`/locations/${city.slug}`} className="block premium-card p-6 h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {city.city}, {city.state}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{city.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {city.industries.slice(0, 3).map((industry, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">{industry}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patna Areas */}
      <section id="patna" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Building2 className="h-5 w-5" />
                <span className="font-medium">Patna City</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                IT Services in Patna Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We serve all major localities in Patna with dedicated IT solutions
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patnaAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/locations/patna/${area.slug}`}
                  className="block premium-card p-6 h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {area.city}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.industries.slice(0, 3).map((industry, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bihar Districts */}
      <section id="bihar" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Users className="h-5 w-5" />
                <span className="font-medium">Bihar State</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                IT Services Across Bihar Districts
              </h2>
              <p className="text-lg text-muted-foreground">
                Expanding our reach to major cities and districts across Bihar
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biharCities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/locations/${city.slug}`}
                  className="block premium-card p-6 h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {city.city}
                        </h3>
                        <p className="text-xs text-muted-foreground">Bihar</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {city.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.industries.slice(0, 3).map((industry, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Locations */}
      <section id="global" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Globe2 className="h-5 w-5" />
                <span className="font-medium">Global · Offshore Partner</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Offshore IT Services for International Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                We help startups, SMEs, and enterprises across the US, UK, Canada, Australia, UAE and more outsource web development, software, mobile apps, and digital marketing to India — at 40–60% lower cost.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/locations/global/${loc.slug}`}
                  className="block premium-card p-6 h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl leading-none">{loc.flag}</span>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {loc.country}
                        </h3>
                        <p className="text-xs text-muted-foreground">{loc.region} · {loc.currency} · {loc.timezoneOverlap} overlap</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {loc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loc.industries.slice(0, 3).map((industry, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Location?"
        description="We serve businesses across India and globally. Contact us to discuss how we can help your business, wherever you're located."
      />
    </Layout>
  );
}
