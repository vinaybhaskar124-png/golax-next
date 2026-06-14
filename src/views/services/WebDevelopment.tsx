"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowRight, CheckCircle, Palette, ShoppingCart, Laptop, Gauge, Lock, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceLocationLinks from "@/components/services/ServiceLocationLinks";
import { webDevelopmentFaqs } from "@/data/serviceFaqs";

const features = [
  { icon: Palette, title: "Custom Website Design", description: "Unique, brand-focused designs that capture your identity and engage visitors from the first click." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", description: "Powerful online stores with secure payments, inventory management, and seamless checkout experiences." },
  { icon: Laptop, title: "Responsive Development", description: "Websites that look and function flawlessly on desktops, tablets, and mobile devices." },
  { icon: Gauge, title: "Performance Optimization", description: "Lightning-fast loading speeds that improve user experience and boost search rankings." },
  { icon: Lock, title: "Security & SSL", description: "Enterprise-grade security with SSL certificates, regular backups, and vulnerability protection." },
  { icon: Search, title: "SEO-Ready Structure", description: "Built-in SEO best practices to help your website rank higher on Google and other search engines." },
];

const webTypes = [
  { title: "Corporate Websites", description: "Professional websites that establish credibility and showcase your business.", features: ["About & Team Pages", "Service Showcases", "Contact Forms", "Blog Integration"] },
  { title: "E-Commerce Stores", description: "Full-featured online stores with product management, payments, and order tracking.", features: ["Product Catalogs", "Payment Gateways", "Inventory Management", "Order Tracking"] },
  { title: "Web Applications", description: "Complex, interactive applications with user authentication and real-time functionality.", features: ["User Dashboards", "Real-time Updates", "API Integrations", "Data Analytics"] },
  { title: "Landing Pages", description: "High-converting pages designed to capture leads and drive specific actions.", features: ["A/B Testing Ready", "Lead Capture Forms", "Analytics Integration", "Fast Loading"] },
];

const process = [
  { step: "01", title: "Requirement Analysis", description: "We dive deep into understanding your business goals, target audience, and specific requirements." },
  { step: "02", title: "UI/UX Design", description: "Our designers create wireframes and mockups that align with your brand and user expectations." },
  { step: "03", title: "Development", description: "Our developers bring the designs to life using cutting-edge technologies and best practices." },
  { step: "04", title: "Testing & QA", description: "Rigorous testing across devices and browsers ensures a bug-free, smooth experience." },
  { step: "05", title: "Launch & Support", description: "We handle deployment and provide ongoing maintenance and support for your website." },
];

const faqs = webDevelopmentFaqs;

const technologies = ["React.js", "Next.js", "Vue.js", "Node.js", "PHP/Laravel", "WordPress", "Shopify", "WooCommerce", "Tailwind CSS", "PostgreSQL", "MongoDB"];

export default function WebDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Globe}
        badge="Web Development Services"
        title={
          <>
            Professional Web Development in{" "}
            <span className="text-accent">India</span>
          </>
        }
        description="Stunning, high-performance websites for businesses across India and globally — from Delhi and Mumbai to US, UK and UAE offshore clients."
        formContext="Web Development Services — India"
        defaultService="Web Development"
      />

      <FeatureGrid
        badge="What We Offer"
        title="End-to-End Web Development"
        description="Comprehensive web development services tailored to your business needs"
        features={features}
      />

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Types of Websites We Build"
            description="From simple landing pages to complex web applications"
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {webTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-2xl p-5 sm:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">{type.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{type.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {type.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechPills
        title="Technologies We Use"
        description="Latest technologies for fast, secure, and scalable websites"
        items={technologies}
      />

      <ProcessTimeline
        title="Our Web Development Process"
        description="A proven approach that ensures successful project delivery"
        steps={process}
      />

      <FAQSection faqs={faqs} />

      <ServiceLocationLinks serviceSlug="web-development" serviceTitle="Web Development" />

      <CTABanner
        title="Ready to Build Your Dream Website?"
        description="Let's discuss your project and create a website that drives results for your business."
      />
    </Layout>
  );
}
