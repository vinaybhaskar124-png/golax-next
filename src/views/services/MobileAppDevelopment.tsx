"use client";

import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Layers, Palette, Gauge, Cloud, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceLocationLinks from "@/components/services/ServiceLocationLinks";
import { mobileAppDevelopmentFaqs } from "@/data/serviceFaqs";

const features = [
  { icon: Smartphone, title: "iOS Development", description: "Native iOS apps built with Swift for optimal iPhone and iPad performance." },
  { icon: Layers, title: "Android Development", description: "Native Android apps using Kotlin across the Android ecosystem." },
  { icon: Gauge, title: "Cross-Platform Apps", description: "Cost-effective React Native and Flutter apps for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", description: "Intuitive mobile interfaces that delight users and boost retention." },
  { icon: Cloud, title: "Backend Integration", description: "APIs, databases, and cloud services to power your app." },
  { icon: Shield, title: "App Maintenance", description: "Ongoing support, updates, and feature enhancements." },
];

const appTypes = [
  { title: "E-Commerce Apps", description: "Shopping apps with catalogs, cart, and secure checkout.", examples: ["Fashion", "Grocery", "Electronics", "Marketplace"] },
  { title: "On-Demand Services", description: "Real-time apps connecting providers with customers.", examples: ["Food Delivery", "Taxi", "Home Services", "Healthcare"] },
  { title: "Social & Communication", description: "Engaging platforms with rich media sharing.", examples: ["Social Networks", "Community", "Chat Apps"] },
  { title: "Enterprise Apps", description: "B2B apps that enhance productivity.", examples: ["CRM Mobile", "Field Service", "Inventory", "Collaboration"] },
];

const process = [
  { step: "01", title: "Discovery & Strategy", description: "Define vision, audience, and app roadmap." },
  { step: "02", title: "UI/UX Design", description: "Wireframes, prototypes, and visual designs." },
  { step: "03", title: "Development", description: "Agile sprints with regular demos and feedback." },
  { step: "04", title: "Testing & QA", description: "Testing across devices for bug-free performance." },
  { step: "05", title: "Launch & ASO", description: "App store submission with optimized listings." },
  { step: "06", title: "Support & Growth", description: "Maintenance, analytics, and feature updates." },
];

const faqs = mobileAppDevelopmentFaqs;

const technologies = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "AWS Amplify", "GraphQL", "Redux", "SQLite"];

export default function MobileAppDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Smartphone}
        badge="Mobile App Development"
        title={<>Mobile App Development in <span className="text-accent">India</span></>}
        description="Native iOS, Android and cross-platform apps for businesses across India and globally — built by our experienced mobile team."
        formContext="Mobile App Development — India"
        defaultService="Mobile App Development"
      />
      <FeatureGrid badge="Our Expertise" title="Mobile Development Services" description="From idea to App Store launch" features={features} />
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="Types of Apps We Build" />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {appTypes.map((type, i) => (
              <motion.div key={type.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl p-5 sm:p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">{type.examples.map((e) => (<span key={e} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">{e}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TechPills title="Technologies We Use" items={technologies} />
      <ProcessTimeline title="Our App Development Process" steps={process} />
      <FAQSection faqs={faqs} />
      <ServiceLocationLinks serviceSlug="mobile-app-development" serviceTitle="Mobile App Development" />
      <CTABanner title="Ready to Launch Your Mobile App?" description="From concept to App Store — we build apps that users love." />
    </Layout>
  );
}
