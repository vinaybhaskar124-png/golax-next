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
  DollarSign,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/seo/JsonLd";
import KeywordTopicsSection from "@/components/seo/KeywordTopicsSection";
import { getCountrySearchTerms } from "@/lib/seo/internationalKeywords";
import { InternationalLocationData, internationalLocations } from "@/data/internationalLocations";
import { getCountryGeo } from "@/data/countryGeo";

const primaryPhoneDisplay = "+91 94700 24607";
const primaryPhoneHref = "+919470024607";
const SITE = "https://golaxindiapvtltd.in";

const services = [
  { icon: Globe, title: "Web Development", slug: "web-development", desc: "Modern, fast, conversion-focused websites" },
  { icon: Code, title: "Software Development", slug: "software-development", desc: "Custom SaaS, ERPs, CRMs & B2B platforms" },
  { icon: Smartphone, title: "Mobile App Development", slug: "mobile-app-development", desc: "iOS, Android & cross-platform apps" },
  { icon: TrendingUp, title: "Digital Marketing & SEO", slug: "digital-marketing", desc: "Performance marketing & content engines" },
  { icon: Search, title: "SEO Services", slug: "seo-services", desc: "Rank for your highest-value keywords" },
  { icon: Cloud, title: "IT Consulting & Cloud", slug: "it-consulting", desc: "Cloud, DevOps & dedicated offshore teams" },
];

interface Props {
  location: InternationalLocationData;
}

export default function InternationalLocationTemplate({ location }: Props) {
  const pagePath = `/locations/global/${location.slug}`;
  const canonical = `${pagePath}`;
  const ogImage = `${SITE}/og-locations/global-${location.slug}.jpg`;
  const geo = getCountryGeo(location.slug);

  const title = `Offshore Web & Software Development Company for ${location.country} | Golax India`;
  const description = location.description;
  const searchTerms = getCountrySearchTerms(location);

  const hreflangAlternates = [
    ...internationalLocations
      .map((l) => {
        const g = getCountryGeo(l.slug);
        if (!g) return null;
        return { hreflang: g.hreflang, href: `/locations/global/${l.slug}` };
      })
      .filter(Boolean) as { hreflang: string; href: string }[],
    { hreflang: "en-in", href: "/" },
    { hreflang: "x-default", href: pagePath },
  ];

  return (
    <Layout>
      

      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${SITE}${pagePath}`,
            name: `Golax India — Offshore IT Services for ${location.country}`,
            description,
            url: `${SITE}${pagePath}`,
            telephone: primaryPhoneHref,
            email: "contact@golaxindia.com",
            priceRange: "$$",
            currenciesAccepted: location.currency,
            inLanguage: geo?.hreflang ?? "en",
            areaServed: {
              "@type": "Country",
              name: location.country,
              identifier: location.countryCode,
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Kankarbagh",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              postalCode: "800020",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.facebook.com/golaxindiapvtltd",
              "https://www.linkedin.com/company/golaxindiapvtltd",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `IT Services for ${location.country}`,
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: `${s.title} for ${location.country} businesses`, areaServed: { "@type": "Country", name: location.country, identifier: location.countryCode } },
              })),
            },
          }} />


      <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE}/locations` },
              { "@type": "ListItem", position: 3, name: "Global", item: `${SITE}/locations#global` },
              { "@type": "ListItem", position: 4, name: location.country, item: `${SITE}${pagePath}` },
            ],
          }} />

      {location.faqs?.length > 0 && (
        <JsonLd data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: location.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }} />
      )}

      {/* Hero */}
      <section className="hero-premium py-20 overflow-hidden lg:overflow-visible">
        <div className="hero-premium-orb hero-premium-orb-accent" aria-hidden />
        <div className="hero-premium-orb hero-premium-orb-primary" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start">
              <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/locations" className="inline-flex items-center text-primary-foreground/80 hover:text-accent mb-6 transition-colors">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                All Locations
              </Link>
              <div className="flex items-center gap-2 text-accent mb-4">
                <span className="text-2xl leading-none">{location.flag}</span>
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Serving {location.country} · {location.region}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                {location.heroTagline.split(location.country)[0]}
                <strong className="text-accent font-bold not-italic">{location.country}</strong>
                {location.heroTagline.split(location.country)[1]}
              </h1>
              <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">Book Discovery Call</Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <a href={`tel:${primaryPhoneHref}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {primaryPhoneDisplay}
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-foreground/90">
                <div className="flex items-start gap-2"><Clock className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Timezone overlap</div><div className="font-semibold">{location.timezoneOverlap}</div></div></div>
                <div className="flex items-start gap-2"><DollarSign className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Billed in</div><div className="font-semibold">{location.currency}</div></div></div>
                <div className="flex items-start gap-2"><Zap className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Kick-off in</div><div className="font-semibold">5–7 days</div></div></div>
                <div className="flex items-start gap-2"><Shield className="h-5 w-5 text-accent mt-0.5" /><div><div className="text-sm opacity-80">Cost savings</div><div className="font-semibold">40–60%</div></div></div>
              </div>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context={`${location.country}`} variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Offshore Engineering Partner in {location.country}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{location.about}</p>
              <div className="mt-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  Cities We Serve in {location.country}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.majorCities.map((city) => {
                    const citySlug = city
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                    return (
                      <Link
                        key={city}
                        href={`/locations/global/${location.slug}/${citySlug}`}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {city}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-subtle rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Why {location.country} Businesses Choose Us
              </h3>
              <div className="space-y-4">
                {location.whyChooseUs.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Offshore IT Services for {location.country} Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                Every service available with senior {location.country}-fluent teams and transparent {location.currency} pricing
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link
                  href={`/services/${service.slug}/global/${location.slug}`}
                  className="block bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all h-full"
                >
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title} for {location.country}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve in {location.country}
              </h2>
              <p className="text-lg text-muted-foreground">Domain expertise across the sectors driving {location.country}'s economy</p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {location.industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 bg-secondary text-foreground rounded-full font-medium">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <KeywordTopicsSection
        title={`Popular IT & Development Searches in ${location.country}`}
        subtitle={`Businesses in ${location.country} search for offshore web development, software, mobile apps, SEO, and dedicated developers — we deliver all of these from India with ${location.currency} pricing.`}
        terms={searchTerms}
      />

      {/* Long-form SEO body */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {([
              ["introduction", `Offshore Web & Software Development Company for ${location.country}`],
              ["whyOffshore", `Why ${location.country} Businesses Outsource Web & Software Development to India`],
              ["ourExpertise", `Offshore IT Company for ${location.country} — Web, Software, Apps & Marketing`],
              ["webDevelopmentDetails", `Web Development Company for ${location.country} Businesses`],
              ["softwareDevelopmentDetails", `Custom Software Development Company for ${location.country}`],
              ["mobileAppDetails", `Mobile App Development Company for ${location.country}`],
              ["digitalMarketingDetails", `Digital Marketing & SEO Agency for ${location.country}`],
              ["itConsultingDetails", `IT Consulting & Cloud Services for ${location.country}`],
              ["pricingAdvantage", `Affordable Offshore Development — ${location.currency} Pricing for ${location.country}`],
              ["workingModel", `How We Work With ${location.country} Clients — Time Zones & Collaboration`],
              ["technologyStack", `Technology Stack for ${location.country} Web & Software Projects`],
              ["processOverview", `Offshore Development Process for ${location.country} Clients`],
              ["commitment", `Our Commitment to ${location.country} Clients`],
            ] as const).map(([key, heading], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mb-10 ${i === 12 ? "bg-gradient-hero rounded-2xl p-8 text-primary-foreground" : ""}`}
              >
                <h3 className={`font-heading text-2xl font-bold mb-4 ${i === 12 ? "text-primary-foreground" : "text-foreground"}`}>
                  {heading}
                </h3>
                <p className={`leading-relaxed whitespace-pre-line ${i === 12 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {location.seoContent[key]}
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                FAQs — Offshore Development for {location.country}
              </h2>
            </motion.div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {location.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-subtle rounded-xl p-6 border border-border"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                We Also Serve Businesses In
              </h2>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {internationalLocations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/global/${l.slug}`}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-2xl">{l.flag}</span>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{l.country}</div>
                    <div className="text-xs text-muted-foreground">{l.region}</div>
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
              Build Your Next Product With a {location.country}-Friendly Offshore Team
            </h2>
            <p className="text-xl text-primary-foreground/85 mb-8">
              Senior engineers. Transparent {location.currency} pricing. {location.timezoneOverlap} of daily overlap. Kick-off in 5–7 days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Book Free Discovery Call</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <a href={`mailto:contact@golaxindia.com?subject=${encodeURIComponent(`Offshore ${location.country} project enquiry`)}`}>
                  <Mail className="mr-2 h-5 w-5" /> Email contact@golaxindia.com
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
