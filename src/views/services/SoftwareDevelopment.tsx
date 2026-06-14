"use client";

import { motion } from "framer-motion";
import { Code, CheckCircle, Building2, Cog, Workflow, RefreshCw, Database, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceLocationLinks from "@/components/services/ServiceLocationLinks";
import { softwareDevelopmentFaqs } from "@/data/serviceFaqs";

const features = [
  { icon: Building2, title: "Enterprise Software", description: "Robust, scalable enterprise applications that streamline operations across your organization." },
  { icon: Cog, title: "ERP & CRM Systems", description: "Custom ERP and CRM solutions tailored to your business processes." },
  { icon: Workflow, title: "Process Automation", description: "Automate repetitive tasks to reduce errors and improve efficiency." },
  { icon: RefreshCw, title: "Legacy Modernization", description: "Transform outdated systems into modern applications while preserving business logic." },
  { icon: Database, title: "Database Design", description: "Expertly designed architectures for data integrity, security, and performance." },
  { icon: Zap, title: "API Integration", description: "Connect your software with third-party services and existing systems." },
];

const softwareTypes = [
  { title: "ERP Systems", description: "Integrate all aspects of your business operations.", features: ["Financial Management", "Inventory Control", "HR Management", "Supply Chain"] },
  { title: "CRM Systems", description: "Manage customer interactions and drive sales growth.", features: ["Lead Management", "Sales Pipeline", "Customer Support", "Analytics"] },
  { title: "Business Intelligence", description: "Data analytics platforms for better decision-making.", features: ["Data Visualization", "Custom Reports", "Predictive Analytics", "Dashboards"] },
  { title: "Workflow Management", description: "Automate and optimize business workflows.", features: ["Task Automation", "Approval Workflows", "Document Management", "Collaboration"] },
];

const process = [
  { step: "01", title: "Discovery", description: "Understand your business processes, pain points, and goals." },
  { step: "02", title: "Architecture", description: "Design scalable system architecture and technology stack." },
  { step: "03", title: "Development", description: "Agile sprints with regular demos and feedback." },
  { step: "04", title: "Testing", description: "Rigorous QA, security audits, and performance testing." },
  { step: "05", title: "Deployment & Support", description: "Smooth rollout with training and ongoing maintenance." },
];

const faqs = softwareDevelopmentFaqs;

const technologies = ["Java", "Python", ".NET Core", "Node.js", "Spring Boot", "Django", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Docker", "Kubernetes"];

export default function SoftwareDevelopment() {
  return (
    <Layout>
      <ServiceHero
        icon={Code}
        badge="Software Development Services"
        title={<>Custom Software Development in <span className="text-accent">India</span></>}
        description="Tailored ERP, CRM, SaaS and enterprise software for businesses across India and international offshore clients."
        formContext="Software Development — India"
        defaultService="Software / SaaS Development"
      />
      <FeatureGrid badge="Capabilities" title="Software Solutions We Build" description="From ERP to custom business apps" features={features} />
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="Types of Software We Develop" description="Solutions for every business need" />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {softwareTypes.map((type, i) => (
              <motion.div key={type.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl p-5 sm:p-8 border border-border">
                <h3 className="font-heading text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-2">{type.features.map((f) => (<div key={f} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success shrink-0" /><span className="text-sm">{f}</span></div>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TechPills title="Technologies We Use" items={technologies} />
      <ProcessTimeline title="Our Development Process" steps={process} />
      <FAQSection faqs={faqs} />
      <ServiceLocationLinks serviceSlug="software-development" serviceTitle="Software Development" />
      <CTABanner title="Ready to Automate Your Business?" description="Let's build custom software that saves time, cuts costs, and drives growth." />
    </Layout>
  );
}
