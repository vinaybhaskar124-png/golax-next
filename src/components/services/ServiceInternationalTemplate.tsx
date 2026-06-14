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
  Clock,
  DollarSign,
  Shield,
  Zap,
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
import { ServiceInternationalData, internationalLocations } from "@/data/internationalLocations";
import { getCountryGeo } from "@/data/countryGeo";
import { getServiceKeywords } from "@/data/serviceKeywords";
import KeywordTopicsSection from "@/components/seo/KeywordTopicsSection";
import { slugifyCity } from "@/data/internationalLocations";
import type { SearchTermLink } from "@/lib/seo/internationalKeywords";

const primaryPhoneDisplay = "+91 94700 24607";
const primaryPhoneHref = "+919470024607";
const SITE = "https://golaxindiapvtltd.in";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Code,
  Smartphone,
  TrendingUp,
  Cloud,
  Search,
};

interface Props {
  data: ServiceInternationalData;
}

export default function ServiceInternationalTemplate({ data }: Props) {
  const { service, location, seoContent, faqs } = data;
  const Icon = iconMap[service.icon] || Globe;
  const canonical = `/services/${service.slug}/global/${location.slug}`;
  const ogImage = `${SITE}/og-locations/global-${location.slug}.jpg`;
  const geo = getCountryGeo(location.slug);

  const title = `${service.title} for ${location.country} Businesses | Offshore from India — Golax India`;
  const description = `${service.title} for ${location.country} businesses — senior offshore team from India, transparent ${location.currency} pricing, ${location.timezoneOverlap} of daily overlap. Book a free discovery call.`;
  const servicePool = getServiceKeywords(service.slug);
  const searchTerms: SearchTermLink[] = [
    { label: `${service.title.toLowerCase()} company in ${location.country}` },
    { label: `offshore ${service.title.toLowerCase()} for ${location.country}` },
    { label: `outsource ${service.title.toLowerCase()} from ${location.country} to India` },
    { label: `hire ${service.shortTitle.toLowerCase()} team for ${location.country}` },
    { label: `best ${service.slug.replace(/-/g, " ")} agency for ${location.country}` },
    ...servicePool.slice(0, 12).map((k) => ({ label: `${k} in ${location.country}` })),
    ...location.majorCities.slice(0, 6).flatMap((c) => [
      { label: `${service.title.toLowerCase()} company in ${c}`, href: `/locations/global/${location.slug}/${slugifyCity(c)}` },
      ...servicePool.slice(0, 2).map((k) => ({ label: `${k} in ${c}`, href: `/locations/global/${location.slug}/${slugifyCity(c)}` })),
    ]),
  ].slice(0, 32);

  const hreflangAlternates = [
    ...internationalLocations
      .map((l) => {
        const g = getCountryGeo(l.slug);
        if (!g) return null;
        return { hreflang: g.hreflang, href: `/services/${service.slug}/global/${l.slug}` };
      })
      .filter(Boolean) as { hreflang: string; href: string }[],
    { hreflang: "x-default", href: canonical },
  ];

  return (
    <Layout>
      

      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE}${canonical}`,
            name: `${service.title} for ${location.country} Businesses`,
            description,
            provider: {
              "@type": "Organization",
              name: "Golax India Pvt Ltd",
              url: SITE,
              telephone: primaryPhoneHref,
              email: "contact@golaxindia.com",
            },
            areaServed: { "@type": "Country", name: location.country, identifier: location.countryCode },
            serviceType: service.title,
            inLanguage: geo?.hreflang ?? "en",
            offers: { "@type": "Offer", priceCurrency: location.currency, availability: "https://schema.org/InStock" },
          }} />

      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
              { "@type": "ListItem", position: 3, name: service.title, item: `${SITE}/services/${service.slug}` },
              { "@type": "ListItem", position: 4, name: location.country, item: `${SITE}${canonical}` },
            ],
          }} />

      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }} />

      {/* Hero */}
      <section className="hero-premium py-20 overflow-hidden lg:overflow-visible">
        <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
        <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start">
              <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href={`/locations/global/${location.slug}`} className="inline-flex items-center text-primary-foreground/80 hover:text-accent mb-6 transition-colors">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                All services for {location.country}
              </Link>
              <div className="flex items-center gap-3 text-accent mb-4">
                <span className="text-2xl leading-none">{location.flag}</span>
                <Icon className="h-5 w-5" />
                <span className="font-medium">{service.title} · {location.country}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                {service.title} for <strong className="text-accent font-bold not-italic">{location.country}</strong> Businesses
              </h1>
              <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8">
                Senior offshore {service.shortTitle.toLowerCase()} team from India for {location.country} startups, SMEs, and enterprises. Transparent {location.currency} pricing, {location.timezoneOverlap} of daily overlap, and senior engineers leading every engagement.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">Book Discovery Call</Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <a href={`tel:${primaryPhoneHref}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call {primaryPhoneDisplay}
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-foreground/90">
                <div className="flex items-start gap-2"><Clock className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Overlap</div><div className="font-semibold">{location.timezoneOverlap}</div></div></div>
                <div className="flex items-start gap-2"><DollarSign className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Billed in</div><div className="font-semibold">{location.currency}</div></div></div>
                <div className="flex items-start gap-2"><Zap className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Kick-off</div><div className="font-semibold">5–7 days</div></div></div>
                <div className="flex items-start gap-2"><Shield className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Savings</div><div className="font-semibold">40–60%</div></div></div>
              </div>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context={`${data.service.title} for ${data.location.country}`} defaultService={data.service.title} variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* Features quick list */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              What's Included in {service.title} for {location.country}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 bg-gradient-subtle rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <KeywordTopicsSection
        title={`${service.title} Keywords & Searches in ${location.country}`}
        subtitle={`High-intent searches like "${servicePool[0] ?? service.title.toLowerCase()} in ${location.country}" and city-specific terms across ${location.majorCities.slice(0, 3).join(", ")}.`}
        terms={searchTerms}
      />

      {/* Long-form */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {([
              ["introduction", `${service.title} Company for ${location.country} — Offshore from India`],
              ["whyServiceMatters", `Why ${location.country} Businesses Invest in ${service.title}`],
              ["ourApproach", `Our ${service.title} Approach for ${location.country} Clients`],
              ["serviceDetails", `${service.title} Services Included for ${location.country}`],
              ["industryApplications", `${service.title} for ${location.country} Industries`],
              ["pricingOverview", `${service.title} Pricing in ${location.currency} for ${location.country}`],
              ["workingModel", `Offshore ${service.title} Collaboration — ${location.country} Time Zones`],
              ["technologyStack", `${service.title} Technology Stack for ${location.country} Projects`],
              ["processOverview", `${service.title} Delivery Process for ${location.country}`],
              ["whyChooseUs", `Why Hire Golax India for ${service.title} in ${location.country}`],
              ["successStories", `${service.title} Results for ${location.country} Clients`],
              ["callToAction", `Start Your ${service.title} Project in ${location.country}`],
            ] as const).map(([key, heading], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mb-10 ${i === 11 ? "bg-gradient-hero rounded-2xl p-8 text-primary-foreground" : ""}`}
              >
                <h3 className={`font-heading text-2xl font-bold mb-4 ${i === 11 ? "text-primary-foreground" : "text-foreground"}`}>
                  {heading}
                </h3>
                <p className={`leading-relaxed whitespace-pre-line ${i === 11 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {seoContent[key]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              FAQs — {service.title} for {location.country}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-gradient-subtle border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Cross-link other countries for the same service */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              {service.title} For Other Countries
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {internationalLocations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/services/${service.slug}/global/${l.slug}`}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-2xl">{l.flag}</span>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{l.country}</div>
                    <div className="text-xs text-muted-foreground">{service.shortTitle}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Start Your {service.title} Project for {location.country}
            </h2>
            <p className="text-xl text-primary-foreground/85 mb-8">
              Free 30-minute discovery call · Written proposal in {location.currency} within 48 hours · No obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <a href={`mailto:contact@golaxindia.com?subject=${encodeURIComponent(`${service.title} enquiry from ${location.country}`)}`}>
                  <Mail className="mr-2 h-5 w-5" /> Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
