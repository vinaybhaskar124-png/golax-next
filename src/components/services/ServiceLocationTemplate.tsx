"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Globe, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Cloud, 
  Search,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/seo/JsonLd";
import { ServiceLocationData } from "@/data/serviceLocations";
import { buildServiceLocationKeywords } from "@/data/serviceKeywords";
import {
  getFullLocation,
  getLocationKeyword,
  isBiharLocation,
} from "@/lib/locationDisplay";

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

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code,
  Smartphone,
  TrendingUp,
  Cloud,
  Search
};

interface ServiceLocationTemplateProps {
  data: ServiceLocationData;
}

export default function ServiceLocationTemplate({ data }: ServiceLocationTemplateProps) {
  const { service, location, seoContent, faqs } = data;
  const locationString = getLocationKeyword(location);
  const fullLocation = getFullLocation(location);
  const isBihar = isBiharLocation(location);
  const canonicalPath = `/services/${service.slug}/${location.slug}`;
  
  const IconComponent = iconMap[service.icon] || Globe;

  const pageTitle = `${service.title} Company in ${locationString} | Golax India`;
  const pageDescription = `Need more leads from ${locationString}? Golax India provides ${service.title.toLowerCase()} for businesses that want faster growth, better visibility, and more enquiries.`;
  const keywords = buildServiceLocationKeywords(service.slug, { city: location.city, state: location.state });
  const rankingKeywords = Array.from(new Set([
    `${service.title} in ${location.city}`,
    `${service.title} in ${locationString}`,
    `${service.shortTitle} company in ${location.city}`,
    `${service.shortTitle} services in ${location.city}`,
    `best ${service.slug.replace(/-/g, " ")} company in ${location.city}`,
    `${service.title.toLowerCase()} services in ${location.city}`,
    `${service.title.toLowerCase()} company in ${location.city}`,
  ]));

  // Top 30 highest-intent combos have unique OG images; others fall back to the location OG image.
  const TOP_OG_LOCATIONS = new Set([
    "boring-road", "kankarbagh", "patna", "gaya", "muzaffarpur", "bhagalpur",
  ]);
  const ogImage = TOP_OG_LOCATIONS.has(location.slug)
    ? `https://golaxindiapvtltd.in/og-services/${service.slug}-${location.slug}.jpg`
    : `https://golaxindiapvtltd.in/og-locations/${location.slug}.jpg`;

  return (
    <Layout>
      
      {/* JSON-LD: Service + LocalBusiness Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.title} in ${location.city}`,
          description: pageDescription,
          provider: {
            "@type": "LocalBusiness",
            name: "Golax India Pvt Ltd",
            "@id": `https://golaxindiapvtltd.in${canonicalPath}`,
            url: "https://golaxindiapvtltd.in",
            telephone: primaryPhoneHref,
            address: { "@type": "PostalAddress", addressLocality: location.city, addressRegion: location.state, addressCountry: "IN" },
          },
          areaServed: { "@type": location.isPatnaArea ? "Place" : "City", name: location.city },
          serviceType: service.title,
          offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://golaxindiapvtltd.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://golaxindiapvtltd.in/services" },
            { "@type": "ListItem", position: 3, name: service.title, item: `https://golaxindiapvtltd.in/services/${service.slug}` },
            { "@type": "ListItem", position: 4, name: location.city, item: `https://golaxindiapvtltd.in/services/${service.slug}/${location.slug}` },
          ],
        }}
      />
      {faqs && faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }}
        />
      )}

      {/* Hero Section */}
      <section className="hero-premium py-20 overflow-hidden lg:overflow-visible">
        <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
        <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start">
              <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
                <span>/</span>
                <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">{service.title}</Link>
                <span>/</span>
                <span className="text-primary-foreground">{location.city}</span>
              </nav>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    {service.shortTitle} Services
                  </span>
                </div>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                {service.title} in{" "}
                <strong className="text-accent font-bold not-italic">{locationString}</strong>
              </h1>
              
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                {highlightKeywords(
                  `Need more leads from ${locationString}? Golax India delivers ${service.title.toLowerCase()} for businesses in ${fullLocation} that want better search visibility, stronger conversions, and dependable local support.`,
                  rankingKeywords,
                  "font-semibold text-primary-foreground"
                )}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
                <HeroLeadForm context={`${service.title} in ${location.city}`} defaultService={service.title} variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative border-y border-border/60 bg-card/90 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" aria-hidden />
        <div className="container relative mx-auto px-4 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Projects Delivered" },
              { icon: Star, value: "4.9/5", label: "Client Rating" },
              { icon: Clock, value: "24/7", label: "Support Available" },
              { icon: Award, value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - SEO Rich */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Best {service.title} Company in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.introduction.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Why Service Matters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why {service.title} Matters for Businesses in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.whyServiceMatters.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Our Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Approach to {service.title} in {locationString}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.ourApproach.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Service Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Comprehensive {service.title} Services in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  {seoContent.serviceDetails.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
                
                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Industry Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {service.title} for Different Industries in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.industryApplications.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Local Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Choose a Local {service.shortTitle} Company in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.localExpertise.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Process Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our {service.title} Process in {locationString}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.processOverview.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Choose Golax India for {service.title} in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.whyChooseUs.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Technologies We Use for {service.title}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-6">
                  {seoContent.technologyStack.split('\n\n').slice(0, 2).map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Pricing Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {service.title} Pricing in {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.pricingOverview.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Success Stories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {service.title} Success Stories from {location.city}
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {seoContent.successStories.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{highlightKeywords(para, rankingKeywords)}</p>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground"
              >
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Ready to Get Started with {service.title} in {location.city}?
                </h2>
                <div className="text-primary-foreground/80 mb-6">
                  {seoContent.callToAction.split('\n\n').slice(0, 2).map((para, i) => (
                    <p key={i} className="mb-3">{highlightKeywords(para, rankingKeywords, "font-semibold text-primary-foreground")}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="accent" size="lg">
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="lg">
                    <a href={`tel:${primaryPhoneHref}`}>Call: {primaryPhoneDisplay}</a>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Get Free Quote
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Contact us for professional {service.title.toLowerCase()} services in {location.city}
                  </p>
                  <div className="space-y-4">
                    <a
                      href={`tel:${primaryPhoneHref}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span>{primaryPhoneDisplay}</span>
                    </a>
                    <a
                      href="mailto:contact@golaxindia.com"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>contact@golaxindia.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        {isBihar
                          ? `Serving ${fullLocation} and all of Bihar`
                          : `Serving ${fullLocation} and businesses across India`}
                      </span>
                    </div>
                  </div>
                  <Button asChild variant="default" size="lg" className="w-full mt-6">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>

                {/* Services Links */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Our Services in {location.city}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Web Development", slug: "web-development" },
                      { name: "Software Development", slug: "software-development" },
                      { name: "Mobile App Development", slug: "mobile-app-development" },
                      { name: "Digital Marketing", slug: "digital-marketing" },
                      { name: "SEO Services", slug: "seo-services" },
                      { name: "IT Consulting", slug: "it-consulting" },
                    ].map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}/${location.slug}`}
                          className={`flex items-center gap-2 text-sm transition-colors ${
                            svc.slug === service.slug
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <ArrowRight className="h-4 w-4" />
                          {svc.name} in {location.city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Locations Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-secondary rounded-xl p-6"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {isBihar ? "Serving All of Bihar" : "Serving Across India"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isBihar
                      ? `We provide ${service.title.toLowerCase()} services across 25+ locations in Bihar.`
                      : `We provide ${service.title.toLowerCase()} services in ${location.city}, ${location.state} and 25+ cities nationwide.`}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/locations">View All Locations</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions About {service.title} in {location.city}
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {highlightKeywords(faq.question, rankingKeywords)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {highlightKeywords(faq.answer, rankingKeywords)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Transform Your Business with {service.title} in {location.city}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {highlightKeywords(
                isBihar
                  ? `Partner with Bihar's leading IT company for ${service.title.toLowerCase()} in ${locationString} and turn search traffic into qualified business enquiries.`
                  : `Partner with Golax India for ${service.title.toLowerCase()} in ${locationString} and turn search traffic into qualified business enquiries.`,
                rankingKeywords,
                "font-semibold text-primary-foreground"
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">
                  Request Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
