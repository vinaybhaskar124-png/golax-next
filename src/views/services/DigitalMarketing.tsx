"use client";

import { motion } from "framer-motion";
import { TrendingUp, Search, Target, Share2, PenTool, Mail, BarChart3, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceLocationLinks from "@/components/services/ServiceLocationLinks";
import { digitalMarketingFaqs } from "@/data/serviceFaqs";

const features = [
  { icon: Search, title: "SEO", description: "Comprehensive SEO strategies that drive organic traffic and improve Google rankings." },
  { icon: Target, title: "PPC Advertising", description: "Targeted Google Ads and Facebook Ads campaigns for maximum ROI." },
  { icon: Share2, title: "Social Media Marketing", description: "Build brand presence across Facebook, Instagram, LinkedIn, and Twitter." },
  { icon: PenTool, title: "Content Marketing", description: "Blog posts, articles, and video content that attracts and engages audiences." },
  { icon: Mail, title: "Email Marketing", description: "Personalized email campaigns and marketing automation." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Data-driven insights and detailed performance reporting." },
];

const seoServices = [
  "Technical SEO Audit", "On-Page Optimization", "Off-Page SEO", "Local SEO", "Keyword Research", "Content Strategy",
];

const results = [
  { metric: "500%", label: "Avg. ROI on PPC" },
  { metric: "200%", label: "Organic Traffic Growth" },
  { metric: "150+", label: "Page 1 Keywords" },
  { metric: "10M+", label: "Social Reach" },
];

const packages = [
  { name: "Starter", price: "₹15,000", period: "/month", description: "For small businesses starting digital marketing", features: ["Basic SEO (5 keywords)", "Social Media (2 platforms)", "Monthly Reporting", "GMB Setup", "Basic Content"] },
  { name: "Growth", price: "₹35,000", period: "/month", popular: true, description: "For growing businesses scaling online", features: ["Advanced SEO (15 keywords)", "Social (4 platforms)", "PPC Management", "Content Marketing", "Email Marketing", "Weekly Reports"] },
  { name: "Enterprise", price: "Custom", period: "pricing", description: "For large businesses with complex needs", features: ["Full SEO Strategy", "Multi-Platform PPC", "Influencer Marketing", "Marketing Automation", "Dedicated Manager", "Priority Support"] },
];

const faqs = digitalMarketingFaqs;

const platforms = ["Google Ads", "Facebook Ads", "Instagram", "LinkedIn", "YouTube", "Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot"];

export default function DigitalMarketing() {
  return (
    <Layout>
      <ServiceHero
        icon={TrendingUp}
        badge="Digital Marketing & SEO"
        title={<>Digital Marketing & SEO in <span className="text-accent">India</span></>}
        description="Data-driven SEO, Google Ads, and social media for businesses in Delhi, Mumbai, Bangalore, Patna and across India — plus global campaigns."
        formContext="Digital Marketing — India"
        defaultService="Digital Marketing"
      />

      <section className="py-8 sm:py-10 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="text-center">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{r.metric}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid badge="Services" title="Digital Marketing Services" description="Full-funnel marketing to grow your business online" features={features} />

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="SEO Services Included" description="Everything needed to rank higher on Google" />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {seoServices.map((s) => (<span key={s} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">{s}</span>))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="Marketing Packages" description="Flexible plans for every business size" />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`rounded-2xl p-5 sm:p-8 border ${pkg.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border"} bg-gradient-subtle relative`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</span>}
                <h3 className="font-heading text-xl font-bold mb-1">{pkg.name}</h3>
                <div className="mb-3"><span className="text-2xl sm:text-3xl font-bold text-primary">{pkg.price}</span><span className="text-muted-foreground text-sm"> {pkg.period}</span></div>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <ul className="space-y-2">{pkg.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm"><CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />{f}</li>))}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechPills title="Platforms & Tools" items={platforms} />
      <FAQSection faqs={faqs} />
      <ServiceLocationLinks serviceSlug="digital-marketing" serviceTitle="Digital Marketing" />
      <CTABanner title="Ready to Grow Your Online Presence?" description="Let's create a digital marketing strategy that delivers measurable results." />
    </Layout>
  );
}
