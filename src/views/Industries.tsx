"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Heart, 
  Rocket, 
  Store,
  Building,
  Landmark,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import Layout from "@/components/layout/Layout";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Transforming education in Bihar with technology. From learning management systems to student portals, we help educational institutions deliver better learning experiences.",
    solutions: [
      "Learning Management Systems (LMS)",
      "Student Information Systems",
      "Online Examination Platforms",
      "Virtual Classroom Solutions",
      "Educational Mobile Apps",
    ],
    clients: ["Schools", "Colleges", "Coaching Centers", "EdTech Startups"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Empowering healthcare providers in Patna with digital solutions. We build systems that improve patient care and streamline hospital operations.",
    solutions: [
      "Hospital Management Systems",
      "Patient Portal Development",
      "Telemedicine Platforms",
      "Appointment Booking Systems",
      "Healthcare Mobile Apps",
    ],
    clients: ["Hospitals", "Clinics", "Diagnostic Centers", "Pharmacies"],
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Partner with Bihar's most promising startups to build their digital products. We help turn ideas into scalable, market-ready solutions.",
    solutions: [
      "MVP Development",
      "Product Scaling",
      "Tech Consulting",
      "Full-Stack Development",
      "Growth Hacking",
    ],
    clients: ["Tech Startups", "D2C Brands", "FinTech", "AgriTech"],
  },
  {
    icon: Store,
    title: "Local Businesses",
    description: "Helping Patna's local businesses go digital. From restaurants to retail stores, we create solutions that drive growth and customer engagement.",
    solutions: [
      "E-commerce Websites",
      "POS Systems",
      "Inventory Management",
      "Customer Apps",
      "Digital Marketing",
    ],
    clients: ["Retail Stores", "Restaurants", "Service Providers", "Wholesalers"],
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Digital solutions for the real estate sector in Bihar. We help builders and agents manage properties and reach more customers.",
    solutions: [
      "Property Listing Portals",
      "CRM for Real Estate",
      "Virtual Tour Solutions",
      "Lead Management Systems",
      "Agent Mobile Apps",
    ],
    clients: ["Builders", "Real Estate Agents", "Property Managers"],
  },
  {
    icon: Landmark,
    title: "Government & PSUs",
    description: "Supporting digital governance initiatives in Bihar. We develop secure, scalable solutions for government departments and public sector units.",
    solutions: [
      "E-Governance Portals",
      "Citizen Service Apps",
      "Document Management Systems",
      "Public Grievance Systems",
      "Data Analytics Dashboards",
    ],
    clients: ["Government Departments", "Municipal Bodies", "PSUs"],
  },
];

export default function Industries() {
  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start">
              <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                Industries We Serve
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                IT Solutions for{" "}
                <span className="text-accent">Every Industry</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                From education to healthcare, startups to government, we deliver tailored 
                technology solutions that address unique industry challenges in Bihar.
              </p>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context="Industries We Serve" variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {industry.title}
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Solutions We Offer:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {industry.clients.map((client, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                We work with businesses across all sectors. Let's discuss how we can help 
                your industry with custom IT solutions.
              </p>
              <Button asChild variant="accent" size="xl">
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
