"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Globe, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Cloud,
  Building2,
  Users,
  Briefcase,
  FileText,
  Phone,
  BookOpen,
  Home,
  ChevronRight,
  Search,
  FileCode,
  ExternalLink
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { patnaAreas, biharCities } from "@/data/locations";
import { services } from "@/data/serviceLocations";
import { internationalLocations, slugifyCity } from "@/data/internationalLocations";

import { seoBlogPosts } from "@/data/seoBlogPosts";

const blogPosts = [
  ...seoBlogPosts.map(({ slug, title }) => ({ slug, title })),
  { slug: "digital-transformation-patna-businesses", title: "Digital Transformation for Patna Businesses" },
  { slug: "seo-tips-local-businesses-patna", title: "10 SEO Tips for Local Businesses in Patna" },
  { slug: "mobile-app-development-trends-2026", title: "Mobile App Development Trends 2026" },
  { slug: "choosing-right-technology-stack", title: "Choosing the Right Technology Stack" },
  { slug: "ecommerce-website-essentials", title: "E-commerce Website Essentials 2026" },
  { slug: "cloud-migration-guide-smes", title: "Cloud Migration Guide for SMEs" },
  { slug: "social-media-marketing-bihar", title: "Social Media Marketing for Bihar Businesses" },
  { slug: "website-security-best-practices", title: "Website Security Best Practices" },
  { slug: "react-vs-angular-2026", title: "React vs Angular in 2026" },
  { slug: "ai-transforming-business-operations", title: "How AI is Transforming Business Operations" },
  { slug: "building-scalable-web-applications", title: "Building Scalable Web Applications" },
  { slug: "government-schemes-digital-india", title: "Government Schemes for Digital India" },
  { slug: "ux-design-principles-conversion", title: "UX Design Principles That Boost Conversion" },
];

const mainPages = [
  { name: "Home", href: "/", icon: Home, description: "Welcome to Golax India" },
  { name: "About Us", href: "/about", icon: Users, description: "Our story and team" },
  { name: "Services", href: "/services", icon: Briefcase, description: "What we offer" },
  { name: "Industries", href: "/industries", icon: Building2, description: "Sectors we serve" },
  { name: "Locations", href: "/locations", icon: MapPin, description: "Areas we cover" },
  { name: "Portfolio", href: "/portfolio", icon: Globe, description: "Our work" },
  { name: "Careers", href: "/careers", icon: Users, description: "Join our team" },
  { name: "Blog", href: "/blog", icon: BookOpen, description: "Insights & news" },
  { name: "Contact", href: "/contact", icon: Phone, description: "Get in touch" },
];

const servicePages = [
  { name: "Web Development", href: "/services/web-development", icon: Globe },
  { name: "Software Development", href: "/services/software-development", icon: Code },
  { name: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone },
  { name: "Digital Marketing & SEO", href: "/services/digital-marketing", icon: TrendingUp },
  { name: "IT Consulting", href: "/services/it-consulting", icon: Cloud },
];

const legalPages = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Refund Policy", href: "/refund-policy" },
];

export default function Sitemap() {
  const allLocations = [
    ...patnaAreas.map(loc => ({ ...loc, isPatnaArea: true })),
    ...biharCities.map(loc => ({ ...loc, isPatnaArea: false }))
  ];

  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              <Search className="h-4 w-4" />
              Website Navigation
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              Complete <span className="text-accent">Sitemap</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore all pages and services offered by Golax India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Home className="h-5 w-5 text-primary" />
              </div>
              Main Pages
            </h2>
            <p className="text-muted-foreground">Primary navigation pages</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mainPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={page.href}
                  className="group flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <page.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{page.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pages */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              Our Services
            </h2>
            <p className="text-muted-foreground">Detailed service pages</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all"
              >
                <Link href={service.href} className="flex items-center gap-3 mb-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </Link>
                
                {/* Service Location Links */}
                <div className="space-y-2 pl-2 border-l-2 border-border">
                  {allLocations.slice(0, 6).map((loc) => (
                    <Link
                      key={`${service.href}-${loc.slug}`}
                      href={`${service.href}/${loc.slug}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {service.name} in {loc.city}
                    </Link>
                  ))}
                  <span className="block text-xs text-muted-foreground/60 italic pt-1">
                    + {allLocations.length - 6} more locations
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Pages */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-success" />
              </div>
              Location Pages
            </h2>
            <p className="text-muted-foreground">We serve these areas across Bihar</p>
          </motion.div>

          {/* Patna Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Patna Areas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {patnaAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/patna/${area.slug}`}
                  className="px-4 py-3 bg-gradient-subtle rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary hover:shadow-md transition-all text-center"
                >
                  {area.city}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Bihar Cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Bihar Districts & Cities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {biharCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="px-4 py-3 bg-gradient-subtle rounded-lg border border-border text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent hover:shadow-md transition-all text-center"
                >
                  {city.city}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Countries */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-accent" />
              </div>
              International Locations
            </h2>
            <p className="text-muted-foreground">Offshore IT services across {internationalLocations.length} countries & their major cities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalLocations.map((country, idx) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all"
              >
                <Link href={`/locations/global/${country.slug}`} className="flex items-center gap-3 mb-4 group">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {country.country}
                  </h3>
                </Link>
                <div className="flex flex-wrap gap-2 pl-2 border-l-2 border-border">
                  {country.majorCities.map((city) => (
                    <Link
                      key={`${country.slug}-${city}`}
                      href={`/locations/global/${country.slug}/${slugifyCity(city)}`}
                      className="text-xs px-2.5 py-1 rounded-md bg-gradient-subtle border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border space-y-1">
                  {services.map((s) => (
                    <Link
                      key={`${country.slug}-${s.slug}`}
                      href={`/services/${s.slug}/global/${country.slug}`}
                      className="block text-xs text-muted-foreground hover:text-accent transition-colors"
                    >
                      › {s.title} in {country.country}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              Blog Articles
            </h2>
            <p className="text-muted-foreground">{blogPosts.length} in-depth guides & industry insights</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-3 p-4 bg-gradient-subtle rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all h-full"
                >
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Location Combinations */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              Service by Location
            </h2>
            <p className="text-muted-foreground">
              150+ specialized service-location pages for targeted SEO
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, serviceIndex) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: serviceIndex * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2">
                  {allLocations.map((loc) => (
                    <Link
                      key={`${service.slug}-${loc.slug}`}
                      href={`/services/${service.slug}/${loc.slug}`}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors py-1 truncate"
                    >
                      {loc.city}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              Legal & Policies
            </h2>
            <p className="text-muted-foreground">Important legal information</p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="px-6 py-3 bg-gradient-subtle rounded-lg border border-border text-foreground hover:border-primary/30 hover:text-primary transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FileCode className="h-5 w-5 text-accent" />
              </div>
              XML Sitemap
            </h2>
            <p className="text-muted-foreground">For search engine crawlers</p>
          </motion.div>

          <motion.a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <FileCode className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                sitemap.xml
                <ExternalLink className="h-4 w-4 opacity-50" />
              </h3>
              <p className="text-sm text-muted-foreground">175+ URLs for search engines</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { value: "9+", label: "Main Pages" },
              { value: "5", label: "Services" },
              { value: `${allLocations.length}+`, label: "Bihar Locations" },
              { value: `${internationalLocations.length}`, label: "Countries Served" },
              { value: "499+", label: "Total Pages" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
