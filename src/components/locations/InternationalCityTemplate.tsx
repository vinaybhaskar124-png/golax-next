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
  Zap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { InternationalCityData } from "@/data/internationalLocations";
import { getCountryGeo } from "@/data/countryGeo";
import JsonLd from "@/components/seo/JsonLd";
import KeywordTopicsSection from "@/components/seo/KeywordTopicsSection";
import { buildCitySeoSections, getCitySearchTerms } from "@/lib/seo/internationalKeywords";
import CityLeadForm from "./CityLeadForm";

const PHONE_DISPLAY = "+91 94700 24607";
const PHONE_HREF = "+919470024607";
const SITE = "https://golaxindiapvtltd.in";

const services = [
  { icon: Globe, title: "Web Development", slug: "web-development", desc: "High-converting websites & landing pages" },
  { icon: Code, title: "Software Development", slug: "software-development", desc: "Custom SaaS, ERP, CRM & B2B platforms" },
  { icon: Smartphone, title: "Mobile App Development", slug: "mobile-app-development", desc: "iOS, Android & cross-platform apps" },
  { icon: TrendingUp, title: "Digital Marketing", slug: "digital-marketing", desc: "Performance marketing & content engines" },
  { icon: Search, title: "SEO Services", slug: "seo-services", desc: "Rank for high-intent local & global keywords" },
  { icon: Cloud, title: "IT Consulting & Cloud", slug: "it-consulting", desc: "AWS / Azure / GCP & dedicated offshore teams" },
];

interface Props {
  data: InternationalCityData;
}

export default function InternationalCityTemplate({ data }: Props) {
  const { city, citySlug, country } = data;
  const pagePath = `/locations/global/${country.slug}/${citySlug}`;
  const ogImage = `${SITE}/og-locations/global-${country.slug}.jpg`;
  const geo = getCountryGeo(country.slug);

  const title = `Web & Software Development Company for ${city}, ${country.country} | Golax India`;
  const description = `Offshore web development, mobile app, SaaS, and digital marketing partner for ${city} businesses in ${country.country}. ${country.timezoneOverlap} overlap, transparent ${country.currency} pricing, senior India-based engineers. Hire developers from India for your ${city} project.`;
  const searchTerms = getCitySearchTerms(city, country);
  const seoSections = buildCitySeoSections(city, country);

  const hreflangAlternates = geo
    ? [
        { hreflang: geo.hreflang, href: pagePath },
        { hreflang: "x-default", href: pagePath },
      ]
    : undefined;

  const whatsappText = encodeURIComponent(
    `Hi Golax India, I'm based in ${city}, ${country.country}. I'd like to discuss an IT / web / app project for my business.`,
  );

  return (
    <Layout>
      

      <JsonLd data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${SITE}${pagePath}`,
                name: `Golax India — IT & Web Development Services for ${city}, ${country.country}`,
                url: `${SITE}${pagePath}`,
                image: ogImage,
                description,
                priceRange: "$$",
                telephone: "+91-94700-24607",
                email: "contact@golaxindia.com",
                areaServed: [
                  { "@type": "City", name: city, containedInPlace: { "@type": "Country", name: country.country } },
                  { "@type": "Country", name: country.country },
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Near Jaganpura More, Nalanda Colony, Kankarbagh",
                  addressLocality: "Patna",
                  addressRegion: "Bihar",
                  postalCode: "800020",
                  addressCountry: "IN",
                },
                serviceType: [
                  "Web Development",
                  "Software Development",
                  "Mobile App Development",
                  "Digital Marketing",
                  "SEO Services",
                  "IT Consulting",
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE}/locations` },
                  { "@type": "ListItem", position: 3, name: country.country, item: `${SITE}/locations/global/${country.slug}` },
                  { "@type": "ListItem", position: 4, name: city, item: `${SITE}${pagePath}` },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: `Does Golax India work with businesses in ${city}, ${country.country}?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `Yes. ${city} is one of our active ${country.country} markets. We deliver web development, mobile apps, custom software, and digital marketing for startups, SMEs, and enterprises across ${city}, with ${country.timezoneOverlap} of daily timezone overlap and transparent ${country.currency} pricing.`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: `How much does a website or app cost for a ${city} business?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `Marketing websites for ${city} clients start in the lower 4-figure ${country.currency} range. SaaS MVPs and complex apps scale based on scope. We share a fixed quote after a free 30-minute discovery call — no hidden fees, billed in ${country.currency}.`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: `Can ${city} clients meet your team in person?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `Our delivery team is based in India, but we serve ${city} clients remotely with daily Slack/Teams collaboration, 2–3 live calls per week, and a dedicated English-fluent project manager available during your business hours.`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: `Do you sign NDAs and contracts with ${city} businesses?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `Yes — mutual NDA, MSA, and IP-assignment agreements are signed before any code is written. All work product is assigned to your ${country.country} entity on payment.`,
                    },
                  },
                ],
              },
            ],
          }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <span className="text-xl">{country.flag}</span>
              <MapPin className="w-4 h-4" />
              <span>Serving {city}, {country.country}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Web & Software Development Company for <span className="text-yellow-300">{city}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Golax India is the offshore IT partner for {city} startups, SMEs, and enterprises. We design, build, and grow websites, mobile apps, SaaS products, and marketing engines for {city}-based businesses — at {country.currency} pricing that local {country.country} agencies simply can't match.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href={`https://wa.me/${PHONE_HREF}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer">
                  Get a Free {city} Project Quote <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href={`tel:${PHONE_HREF}`}><Phone className="mr-2 w-4 h-4" /> {PHONE_DISPLAY}</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {country.timezoneOverlap} overlap</div>
              <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> {country.currency} billing</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> NDA + IP assignment</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Senior engineers only</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted IT & Digital Partner for {city} Businesses</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Looking for a reliable web development company in {city}? Or planning to outsource your next mobile app, SaaS platform, or digital marketing campaign from {city} to India? Golax India works with {city}-based founders, agencies, and enterprises to deliver world-class engineering and growth, on time and on budget.
            </p>
            <p>
              From {city}'s startup ecosystem to its established enterprise community, we've helped clients ship websites in weeks (not months), launch mobile apps that scale, and run paid + organic growth that compounds. Every {city} engagement is led by a senior India-based engineer and an English-fluent project manager, with {country.timezoneOverlap} of daily overlap with {city} business hours.
            </p>
            <p>
              Whether you need a polished marketing site, a SaaS MVP, a customer-facing mobile app, an internal ERP, or a full-funnel digital marketing partner — we deliver it in {country.currency}, with transparent monthly invoicing, NDA + IP-assignment, and a 60-day post-launch warranty on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Deliver to {city} Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The full digital stack {city} startups and enterprises actually need — from first website to global scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title} in {city}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <Link href={`/services/${s.slug}/global/${country.slug}`} className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <KeywordTopicsSection
        title={`What ${city} Businesses Search For`}
        subtitle={`From "web development company in ${city}" to "hire offshore developers" — Golax India covers every high-intent IT search term for ${city} and ${country.country}.`}
        terms={searchTerms}
      />

      {/* Long-form SEO — city-specific keyword content */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          {seoSections.map((section, i) => (
            <div key={section.heading} className={`mb-10 ${i === seoSections.length - 1 ? "pb-4" : ""}`}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                {section.heading}
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {section.body.split("\n\n").map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Why {city} Businesses Choose Golax India</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {country.whyChooseUs.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-card border border-border rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
            <div className="flex items-start gap-3 p-5 bg-card border border-border rounded-xl">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground">Local {city} market understanding — buyer behavior, competitive landscape, ad costs.</p>
            </div>
            <div className="flex items-start gap-3 p-5 bg-card border border-border rounded-xl">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground">References from comparable {country.country} clients — available on request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Industries We Serve in {city}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {country.industries.map((ind) => (
              <span key={ind} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sister cities */}
      {country.majorCities.length > 1 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Also Serving Across {country.country}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {country.majorCities
                .filter((c) => c !== city)
                .map((c) => {
                  const slug = c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return (
                    <Link key={c} href={`/locations/global/${country.slug}/${slug}`} className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition">
                      {c}
                    </Link>
                  );
                })}
            </div>
            <div className="text-center mt-8">
              <Link href={`/locations/global/${country.slug}`} className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                View full {country.country} services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Lead Capture Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get Your Free {city} Project Quote
            </h2>
            <p className="text-muted-foreground">
              Share a few details and we'll connect with you on WhatsApp & Email within 2 business hours — billed in {country.currency}, no obligation.
            </p>
          </div>
          <CityLeadForm city={city} country={country.country} currency={country.currency} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Zap className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something in {city}?</h2>
          <p className="text-lg text-white/90 mb-8">
            Free 30-minute discovery call. Fixed-price quote in {country.currency}. Kick-off within a week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <a href={`https://wa.me/${PHONE_HREF}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer">
                WhatsApp Us <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a href="mailto:contact@golaxindia.com"><Mail className="mr-2 w-4 h-4" /> contact@golaxindia.com</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
