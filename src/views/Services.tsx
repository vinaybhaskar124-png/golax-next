"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Code, Smartphone, TrendingUp, Cloud, ArrowRight, CheckCircle, Layers, Database, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";

const services = [{
  icon: Globe,
  title: "Web Development",
  slug: "web-development",
  description: "We create stunning, responsive websites and powerful web applications for businesses across India and globally — from corporate sites to e-commerce platforms.",
  features: ["Custom Website Design & Development", "E-commerce Solutions (Shopify, WooCommerce, Custom)", "Progressive Web Apps (PWA)", "Content Management Systems (WordPress, Custom CMS)", "Web Portal Development", "API Development & Integration"],
  technologies: ["React", "Next.js", "Node.js", "PHP", "WordPress", "Shopify"]
}, {
  icon: Code,
  title: "Software Development",
  slug: "software-development",
  description: "Transform your operations with custom software tailored to your needs — ERP, CRM, SaaS and enterprise solutions for clients across India and internationally.",
  features: ["Custom Enterprise Software", "ERP & CRM Solutions", "Business Process Automation", "Legacy System Modernization", "Database Design & Management", "Software Integration Services"],
  technologies: ["Java", "Python", ".NET", "Node.js", "PostgreSQL", "MongoDB"]
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  slug: "mobile-app-development",
  description: "Reach customers on the go with high-performance iOS, Android and cross-platform apps built for businesses in India and global markets.",
  features: ["iOS App Development (Swift)", "Android App Development (Kotlin)", "Cross-Platform Apps (React Native, Flutter)", "Mobile UI/UX Design", "App Store Optimization", "App Maintenance & Support"],
  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
}, {
  icon: TrendingUp,
  title: "Digital Marketing & SEO",
  slug: "digital-marketing",
  description: "Boost online visibility with SEO, Google Ads and social media — helping businesses in Delhi, Mumbai, Bangalore, Patna and across India rank and convert.",
  features: ["Search Engine Optimization (SEO)", "Pay-Per-Click Advertising (PPC)", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
  technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Google Analytics", "Mailchimp"]
}, {
  icon: Cloud,
  title: "IT Consulting & Cloud Services",
  slug: "it-consulting",
  description: "Navigate cloud migration, DevOps and cybersecurity with expert IT consulting for businesses across India and offshore clients worldwide.",
  features: ["Cloud Migration (AWS, Azure, GCP)", "IT Infrastructure Assessment", "Technology Roadmap Planning", "Cybersecurity Consulting", "DevOps Implementation", "Managed IT Services"],
  technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"]
}];

const process = [{
  step: "01",
  title: "Discovery",
  description: "We understand your business goals, challenges, and requirements through detailed discussions."
}, {
  step: "02",
  title: "Planning",
  description: "Our team creates a comprehensive project plan with timelines, milestones, and deliverables."
}, {
  step: "03",
  title: "Development",
  description: "We build your solution using agile methodology with regular updates and feedback loops."
}, {
  step: "04",
  title: "Delivery",
  description: "After rigorous testing, we deploy your solution and provide ongoing support."
}];

export default function Services() {
  return (
    <Layout>
      <PageHero
        badge="Our Services"
        badgeIcon={Sparkles}
        title={<>IT Services for Businesses Across <span className="text-accent">India & Globally</span></>}
        description="Web development, software, mobile apps, SEO and cloud — delivered remotely to any city in India or offshore for international clients."
        formContext="Services Overview"
      />

      <section className="section-padding relative bg-card overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="space-y-20 sm:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" size="lg">
                    <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>
                      Explore {service.title}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} premium-card p-8`}>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="Our Development Process"
        description="A proven methodology that ensures successful project delivery every time"
        steps={process}
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Why Golax India"
                title="Why Choose Golax India for IT Services?"
                description="We combine technical expertise with deep understanding of business needs across India and globally to deliver solutions that truly make a difference."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4">
                {[{
                  icon: Layers,
                  title: "Full-Stack Expertise",
                  desc: "End-to-end development capabilities across all technologies"
                }, {
                  icon: Database,
                  title: "Scalable Solutions",
                  desc: "Built to grow with your business needs"
                }, {
                  icon: Shield,
                  title: "Security First",
                  desc: "Enterprise-grade security in every project"
                }].map((item, index) => (
                  <div key={index} className="premium-card flex gap-4 p-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card bg-gradient-hero p-8 sm:p-10 text-primary-foreground border-0"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Let's discuss your project requirements. Get a free consultation and quote from our expert team.
              </p>
              <div className="space-y-4">
                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link href="/contact">Request Free Quote</Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg" className="w-full">
                  <a href="tel:+919470024607">Call: +91 94700 24607</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Transform Your Business with Expert IT Services"
        description="From web and mobile to cloud and marketing — get a dedicated India-based team with transparent pricing and global delivery standards."
      />
    </Layout>
  );
}
