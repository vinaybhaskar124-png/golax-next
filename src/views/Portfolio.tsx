"use client";

import { motion } from "framer-motion";
import { 
  Globe,
  Smartphone,
  Code,
  TrendingUp
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import CTABanner from "@/components/shared/CTABanner";
import { Briefcase, Star, Users, Award, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Bihar Educational Portal",
    category: "Web Development",
    icon: Globe,
    description: "A comprehensive online learning platform for a major educational institute in Patna, serving 10,000+ students.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    results: ["50% increase in student engagement", "10,000+ active users", "99.9% uptime"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "HealthFirst Patient App",
    category: "Mobile Development",
    icon: Smartphone,
    description: "A mobile application for a healthcare chain enabling online appointments, prescription management, and telemedicine.",
    technologies: ["React Native", "Firebase", "Node.js", "Razorpay"],
    results: ["40% reduction in no-shows", "15,000+ downloads", "4.5★ rating"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "RetailMax ERP System",
    category: "Software Development",
    icon: Code,
    description: "Custom ERP solution for a retail chain in Bihar managing inventory, sales, and multi-store operations.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    results: ["60% faster inventory management", "20% cost reduction", "5 stores integrated"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Patna Travels Online",
    category: "E-commerce",
    icon: Globe,
    description: "Complete travel booking platform for a local travel agency with hotel bookings, tour packages, and payments.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
    results: ["200% increase in online bookings", "₹50L+ transactions", "1000+ happy customers"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AgriConnect Bihar",
    category: "Mobile Development",
    icon: Smartphone,
    description: "Mobile app connecting farmers in Bihar with buyers, providing market prices, and agricultural advice.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Node.js"],
    results: ["5,000+ farmers onboarded", "30% better price realization", "Featured in local news"],
    color: "from-green-600 to-lime-500",
  },
  {
    title: "FinanceFirst SEO Campaign",
    category: "Digital Marketing",
    icon: TrendingUp,
    description: "Comprehensive SEO and digital marketing campaign for a financial services company in Patna.",
    technologies: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
    results: ["300% organic traffic increase", "Top 3 rankings for 20+ keywords", "150% lead growth"],
    color: "from-indigo-500 to-blue-500",
  },
];

const categories = ["All", "Web Development", "Mobile Development", "Software Development", "E-commerce", "Digital Marketing"];

export default function Portfolio() {
  return (
    <Layout>
      
      <PageHero
        badge="Our Portfolio"
        badgeIcon={Sparkles}
        title={<>Projects That <span className="text-accent">Speak for Themselves</span></>}
        description="Explore our successful projects across web, mobile, software and digital marketing — real results for businesses in India and beyond."
        formContext="Portfolio"
      />

      {/* Portfolio Grid */}
      <section className="section-padding relative bg-card overflow-hidden" aria-labelledby="portfolio-projects-heading">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4">
          <h2 id="portfolio-projects-heading" className="sr-only">Our Projects</h2>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${category === "All" ? "filter-pill-active" : "filter-pill-inactive"}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group premium-card overflow-hidden p-0"
              >
                {/* Header with gradient */}
                <div className={`h-40 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/80 text-sm">{project.category}</div>
                      <h3 className="text-white font-heading font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill text-xs px-2.5 py-1">{tech}</span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-success" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar
        stats={[
          { icon: Briefcase, value: "150+", label: "Projects Completed" },
          { icon: Users, value: "50+", label: "Happy Clients" },
          { icon: Star, value: "98%", label: "Client Satisfaction" },
          { icon: Award, value: "10+", label: "Industries Served" },
        ]}
      />

      <CTABanner
        title="Ready to Be Our Next Success Story?"
        description="Let's discuss your project and create something amazing together."
        primaryLabel="Start Your Project"
      />
    </Layout>
  );
}
