"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Code,
  Smartphone,
  TrendingUp,
  Cloud,
  Building2,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/seo/JsonLd";

interface LocationData {
  city: string;
  slug?: string;
  state: string;
  description: string;
  about: string;
  whyChooseUs: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  nearbyAreas?: string[];
  isPatnaArea?: boolean;
  seoContent?: {
    introduction: string;
    whyDigitalPresence: string;
    ourExpertise: string;
    webDevelopmentDetails: string;
    softwareDevelopmentDetails: string;
    mobileAppDetails: string;
    digitalMarketingDetails: string;
    itConsultingDetails: string;
    localBusinessBenefits: string;
    technologyStack: string;
    processOverview: string;
    commitment: string;
  };
}

interface LocationPageTemplateProps {
  location: LocationData;
}

import { patnaAreas, biharCities } from "@/data/locations";
import { indiaCities } from "@/data/indiaCities";
import { buildLocationAllServicesKeywords } from "@/data/serviceKeywords";
import {
  getFormContext,
  getFullLocation,
  getLocationKeyword,
  isBiharLocation,
} from "@/lib/locationDisplay";
import { HQ_GEO } from "@/lib/seo/schema";

const primaryPhoneDisplay = "+91 94700 24607";
const primaryPhoneHref = "+919470024607";

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightKeywords = (
  text: string,
  phrases: string[],
  emphasisClassName = "font-semibold text-foreground"
) => {
  const uniquePhrases = [...new Set(phrases.filter(Boolean))];

  if (!text || uniquePhrases.length === 0) return [text];

  const phraseSet = new Set(uniquePhrases.map((phrase) => phrase.toLowerCase()));
  const pattern = new RegExp(
    `(${uniquePhrases.sort((a, b) => b.length - a.length).map(escapeRegex).join("|")})`,
    "gi"
  );

  return text.split(pattern).filter(Boolean).map((part, index) => (
    phraseSet.has(part.toLowerCase()) ? (
      <strong key={`${part}-${index}`} className={emphasisClassName}>
        {part}
      </strong>
    ) : (
      part
    )
  ));
};

const services = [
  { icon: Globe, title: "Web Development", slug: "web-development", desc: "Custom websites & web apps" },
  { icon: Code, title: "Software Development", slug: "software-development", desc: "Enterprise software solutions" },
  { icon: Smartphone, title: "Mobile App Development", slug: "mobile-app-development", desc: "iOS & Android apps" },
  { icon: TrendingUp, title: "Digital Marketing & SEO", slug: "digital-marketing", desc: "Grow your online presence" },
  { icon: Cloud, title: "IT Consulting", slug: "it-consulting", desc: "Cloud & infrastructure services" },
];

// Get all locations for internal linking
const getAllLocationSlugs = () => {
  const patnaAreaSlugs = patnaAreas.map(loc => ({ city: loc.city, slug: loc.slug, isPatnaArea: true }));
  const biharCitySlugs = biharCities.map(loc => ({ city: loc.city, slug: loc.slug, isPatnaArea: false }));
  return [...patnaAreaSlugs, ...biharCitySlugs];
};

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const locationKeyword = getLocationKeyword(location);
  const fullLocation = getFullLocation(location);
  const isBihar = isBiharLocation(location);
  const relatedLocations = (isBihar ? biharCities : indiaCities)
    .filter((loc) => loc.city !== location.city)
    .slice(0, 8);

  const pagePath = location.isPatnaArea ? `/locations/patna/${location.slug}` : `/locations/${location.slug}`;
  const rankingKeywords = Array.from(new Set([
    `website development company in ${location.city}`,
    `website development company in ${locationKeyword}`,
    `website development in ${location.city}`,
    `website development in ${locationKeyword}`,
    `web development in ${location.city}`,
    `web development in ${locationKeyword}`,
    `website designing company in ${location.city}`,
    `website designing company in ${locationKeyword}`,
    `web design company in ${location.city}`,
    `website design in ${location.city}`,
    `software development in ${location.city}`,
    `mobile app development in ${location.city}`,
    `digital marketing in ${location.city}`,
    `SEO services in ${location.city}`,
    `IT company in ${location.city}`,
    `best website development company in ${location.city}`,
  ]));

  return (
    <Layout>
      
      {/* JSON-LD: LocalBusiness Schema */}
      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `https://golaxindiapvtltd.in${pagePath}`,
            name: `Golax India Pvt Ltd - ${location.city}`,
            image: "https://golaxindiapvtltd.in/logo.png",
            description: `Lead-focused website development company in ${locationKeyword} offering web design, software development, mobile apps, and SEO services for businesses that want more enquiries.`,
            url: `https://golaxindiapvtltd.in${pagePath}`,
            telephone: primaryPhoneHref,
            email: "contact@golaxindia.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: location.isPatnaArea
                ? "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Kankarbagh"
                : undefined,
              addressLocality: location.isPatnaArea ? location.city : location.city,
              addressRegion: location.state,
              addressCountry: "IN",
            },
            ...(location.isPatnaArea
              ? {
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: HQ_GEO.latitude,
                    longitude: HQ_GEO.longitude,
                  },
                }
              : {}),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "14:00",
              },
            ],
            priceRange: "$$",
            areaServed: {
              "@type": location.isPatnaArea ? "Place" : "City",
              name: location.city,
            },
            sameAs: [
              "https://www.facebook.com/golaxindiapvtltd",
              "https://www.linkedin.com/company/golaxindiapvtltd",
              "https://twitter.com/golaxindiapvtltd",
              "https://www.instagram.com/golaxindiapvtltd",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "IT Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: `Website Development in ${location.city}` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: `Web Design in ${location.city}` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: `Software Development in ${location.city}` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: `Mobile App Development in ${location.city}` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: `Digital Marketing in ${location.city}` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: `IT Consulting in ${location.city}` } },
              ],
            },
          }} />

      {/* JSON-LD: BreadcrumbList Schema */}
      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://golaxindiapvtltd.in/" },
              { "@type": "ListItem", position: 2, name: "Locations", item: "https://golaxindiapvtltd.in/locations" },
              ...(location.isPatnaArea
                ? [
                    { "@type": "ListItem", position: 3, name: "Patna", item: "https://golaxindiapvtltd.in/locations" },
                    { "@type": "ListItem", position: 4, name: location.city, item: `https://golaxindiapvtltd.in/locations/patna/${location.slug}` },
                  ]
                : [
                    { "@type": "ListItem", position: 3, name: location.city, item: `https://golaxindiapvtltd.in/locations/${location.slug}` },
                  ]),
            ],
          }} />

      {/* JSON-LD: FAQPage Schema */}
      {location.faqs && location.faqs.length > 0 && (
        <JsonLd data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: location.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }} />
      )}

      {/* Hero Section */}
      <section className="hero-premium py-20 overflow-hidden">
        <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
        <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />
        <div className="container mx-auto px-4 relative z-10 min-w-0">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start min-w-0">
              <div className="max-w-2xl min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/locations" 
                className="inline-flex items-center text-primary-foreground/80 hover:text-accent mb-6 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                All Locations
              </Link>
              <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent mb-4">
                <MapPin className="h-4 w-4" />
                {fullLocation}
              </span>
              <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6 break-words">
                Website Development Company in{" "}
                <strong className="text-accent font-bold not-italic">{location.city}</strong>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                {highlightKeywords(
                  `Need more leads from ${locationKeyword}? Golax India is a website development company in ${locationKeyword} that builds fast websites, software, mobile apps, and SEO campaigns for local businesses.`,
                  rankingKeywords,
                  "font-semibold text-primary-foreground"
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <a href={`tel:${primaryPhoneHref}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context={getFormContext(location)} variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Web Development & Website Design in {location.city}
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>{highlightKeywords(location.about, rankingKeywords)}</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-subtle rounded-2xl p-8 border border-border"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Why Choose Us in {location.city}?
              </h3>
              <div className="space-y-4">
                {location.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Website Development & IT Services in {location.city}
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional website designing company in {locationKeyword} – web design, development & digital marketing
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={`/services/${service.slug}/${location.slug || location.city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all h-full"
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title} in {location.city}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <span className="inline-flex items-center text-primary font-medium" aria-label={`Learn about ${service.title} in ${location.city}`}>
                    Explore {service.title} in {location.city} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve in {location.city}
              </h2>
              <p className="text-lg text-muted-foreground">
                Delivering specialized solutions for various sectors
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {location.industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium"
              >
                {industry}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section */}
      {location.seoContent && (
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Website Development in {location.city} – Best Web Design Company
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.introduction, rankingKeywords)}
                </p>
              </motion.div>

              {/* Why Digital Presence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Why Your {location.city} Business Needs a Strong Digital Presence
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.whyDigitalPresence, rankingKeywords)}
                </p>
              </motion.div>

              {/* Our Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Expertise as a Leading IT Company in {location.city}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.ourExpertise, rankingKeywords)}
                </p>
              </motion.div>

              {/* Service Details Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Complete Range of IT Services in {location.city}
                </h3>
                
                <div className="grid md:grid-cols-1 gap-8">
                  {/* Web Development */}
                  <div className="bg-gradient-subtle rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-heading text-xl font-semibold text-foreground">
                        Website Development & Web Design in {location.city}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {highlightKeywords(location.seoContent.webDevelopmentDetails, rankingKeywords)}
                    </p>
                  </div>

                  {/* Software Development */}
                  <div className="bg-gradient-subtle rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-heading text-xl font-semibold text-foreground">
                        Custom Software Development in {location.city}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {highlightKeywords(location.seoContent.softwareDevelopmentDetails, rankingKeywords)}
                    </p>
                  </div>

                  {/* Mobile App Development */}
                  <div className="bg-gradient-subtle rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-heading text-xl font-semibold text-foreground">
                        Mobile App Development in {location.city}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {highlightKeywords(location.seoContent.mobileAppDetails, rankingKeywords)}
                    </p>
                  </div>

                  {/* Digital Marketing */}
                  <div className="bg-gradient-subtle rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-heading text-xl font-semibold text-foreground">
                        Digital Marketing & SEO Services in {location.city}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {highlightKeywords(location.seoContent.digitalMarketingDetails, rankingKeywords)}
                    </p>
                  </div>

                  {/* IT Consulting */}
                  <div className="bg-gradient-subtle rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cloud className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-heading text-xl font-semibold text-foreground">
                        IT Consulting & Cloud Services in {location.city}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {highlightKeywords(location.seoContent.itConsultingDetails, rankingKeywords)}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Local Business Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Benefits of Partnering with a Local IT Company in {location.city}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.localBusinessBenefits, rankingKeywords)}
                </p>
              </motion.div>

              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 bg-secondary rounded-xl p-8"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Cutting-Edge Technologies We Use
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.technologyStack, rankingKeywords)}
                </p>
              </motion.div>

              {/* Process Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Proven Development Process
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.processOverview, rankingKeywords)}
                </p>
              </motion.div>

              {/* Commitment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-hero rounded-xl p-8 text-primary-foreground"
              >
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Our Commitment to {location.city} Businesses
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed whitespace-pre-line">
                  {highlightKeywords(location.seoContent.commitment, rankingKeywords, "font-semibold text-primary-foreground")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions About Website Development in {location.city}
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our IT services in {location.city}
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {location.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {highlightKeywords(faq.question, rankingKeywords)}
                </h3>
                <p className="text-muted-foreground">{highlightKeywords(faq.answer, rankingKeywords)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas with Links */}
      {location.nearbyAreas && location.nearbyAreas.length > 0 && (
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  We Also Serve Nearby Areas
                </h2>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {location.nearbyAreas.map((area, index) => {
                const allLocations = getAllLocationSlugs();
                const matchedLocation = allLocations.find(loc => loc.city.toLowerCase() === area.toLowerCase());
                const slug = matchedLocation?.slug || area.toLowerCase().replace(/\s+/g, '-');
                const path = matchedLocation?.isPatnaArea ? `/locations/patna/${slug}` : `/locations/${slug}`;
                
                return (
                  <Link
                    key={index}
                    href={path}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {area}
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Locations Internal Links */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {isBihar ? "Explore Our Services Across Bihar" : "Explore IT Services Across India"}
              </h2>
              <p className="text-muted-foreground">
                {isBihar
                  ? "We provide IT services in 25+ cities across Bihar"
                  : `We serve businesses in ${location.city}, ${location.state} and 25+ cities nationwide`}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {relatedLocations.map((loc, index) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/locations/${loc.slug}`}
                  className="block p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                   <span className="font-medium text-foreground">Web Design Company in {loc.city}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Website development & web designing services
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/locations">View All 25+ Locations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Looking for Website Development in {location.city}?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              {highlightKeywords(
                `We are the best website development company in ${locationKeyword} for businesses that want more enquiries, better search visibility, and conversion-focused digital growth.`,
                rankingKeywords,
                "font-semibold text-primary-foreground"
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <a href={`tel:${primaryPhoneHref}`}>Call: {primaryPhoneDisplay}</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <a href="mailto:contact@golaxindia.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                contact@golaxindia.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {fullLocation}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
