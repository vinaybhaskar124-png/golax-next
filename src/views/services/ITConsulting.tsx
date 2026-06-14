"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Lightbulb, Shield, GitBranch, HeadphonesIcon, BarChart3, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/shared/ServiceHero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import TechPills from "@/components/shared/TechPills";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceLocationLinks from "@/components/services/ServiceLocationLinks";
import { itConsultingFaqs } from "@/data/serviceFaqs";

const features = [
  { icon: Cloud, title: "Cloud Migration", description: "Migrate to AWS, Azure, or Google Cloud with minimal downtime." },
  { icon: Server, title: "Infrastructure Assessment", description: "Evaluate IT systems to identify gaps, risks, and opportunities." },
  { icon: Lightbulb, title: "Technology Roadmap", description: "Align technology investments with business goals and growth." },
  { icon: Shield, title: "Cybersecurity", description: "Security audits, policies, and best practice implementation." },
  { icon: GitBranch, title: "DevOps", description: "CI/CD pipelines, automation, and infrastructure as code." },
  { icon: HeadphonesIcon, title: "Managed IT Services", description: "24/7 monitoring, maintenance, and support for your infrastructure." },
];

const cloudPlatforms = [
  { name: "Amazon Web Services (AWS)", services: ["EC2", "S3", "Lambda", "RDS", "CloudFront"], description: "Compute, storage, and deployment at scale" },
  { name: "Microsoft Azure", services: ["Virtual Machines", "Azure Functions", "Cosmos DB", "Active Directory"], description: "Enterprise cloud with Microsoft integration" },
  { name: "Google Cloud Platform", services: ["Compute Engine", "Cloud Run", "BigQuery", "Firebase"], description: "Advanced analytics and ML capabilities" },
];

const benefits = [
  { title: "Cost Reduction", desc: "Optimize IT spending by up to 40%", icon: BarChart3 },
  { title: "Enhanced Security", desc: "Enterprise-grade data protection", icon: Shield },
  { title: "Scalability", desc: "Infrastructure that grows with you", icon: Server },
  { title: "Expert Guidance", desc: "Certified IT professionals", icon: Users },
];

const process = [
  { step: "01", title: "Discovery & Assessment", description: "Analyze infrastructure, processes, and requirements." },
  { step: "02", title: "Strategy Development", description: "Custom IT strategy aligned with your goals." },
  { step: "03", title: "Solution Design", description: "Optimal architecture for your needs." },
  { step: "04", title: "Implementation", description: "Deploy with minimal business disruption." },
  { step: "05", title: "Training & Handover", description: "Team training and documentation." },
  { step: "06", title: "Ongoing Support", description: "Monitoring, maintenance, and optimization." },
];

const faqs = itConsultingFaqs;

const technologies = ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Linux", "Windows Server"];

export default function ITConsulting() {
  return (
    <Layout>
      <ServiceHero
        icon={Cloud}
        badge="IT Consulting & Cloud"
        title={<>IT Consulting & Cloud Services in <span className="text-accent">India</span></>}
        description="Expert cloud migration, DevOps, cybersecurity and managed IT for businesses across India and international clients."
        formContext="IT Consulting — India"
        defaultService="IT Consulting & Cloud"
      />
      <FeatureGrid badge="Services" title="IT Consulting Services" description="Strategic technology guidance for modern businesses" features={features} />
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="Cloud Platforms We Work With" />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {cloudPlatforms.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl p-5 sm:p-6 border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">{p.services.map((s) => (<span key={s} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md">{s}</span>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader title="Why Choose Our IT Consulting" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="text-center p-4 sm:p-5 rounded-xl bg-gradient-subtle border border-border">
                <b.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm sm:text-base mb-1">{b.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TechPills title="Technologies & Tools" items={technologies} />
      <ProcessTimeline title="Our Consulting Process" steps={process} />
      <FAQSection faqs={faqs} />
      <ServiceLocationLinks serviceSlug="it-consulting" serviceTitle="IT Consulting" />
      <CTABanner title="Ready to Modernize Your IT Infrastructure?" description="Get expert guidance on cloud, security, and digital transformation." />
    </Layout>
  );
}
