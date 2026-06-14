"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Code, Smartphone, TrendingUp, Cloud, CheckCircle, ArrowRight, Users, Award, Briefcase, Star, Phone, Play, ShoppingCart, Search, Palette, Database, Shield, Zap, Layers, Server, MessageSquare, BarChart3, MapPin, Building2, GraduationCap, Heart, Factory, Plane, Lightbulb, Target, Rocket, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { getServiceKeywords } from "@/data/serviceKeywords";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import TrustBar from "@/components/shared/TrustBar";
import PortfolioPreview from "@/components/shared/PortfolioPreview";
import FAQSection from "@/components/shared/FAQSection";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import GeoReachSection from "@/components/shared/GeoReachSection";
import { homeFaqs } from "@/data/siteFaqs";
import heroBanner from "@/assets/hero-banner.jpg";
import techPattern from "@/assets/tech-pattern.jpg";
const services = [{
  icon: Globe,
  title: "Web Development",
  description: "Custom websites and web apps built with React, Next.js, and modern stacks for businesses across India.",
  href: "/services/web-development"
}, {
  icon: Code,
  title: "Software Development",
  description: "Tailored ERP, CRM and SaaS software to automate your business processes and boost productivity.",
  href: "/services/software-development"
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  description: "Native iOS, Android and cross-platform Flutter / React Native apps to reach customers anywhere.",
  href: "/services/mobile-app-development"
}, {
  icon: TrendingUp,
  title: "Digital Marketing & SEO",
  description: "Data-driven SEO, Google Ads, and social media strategies to grow your online presence in India and globally.",
  href: "/services/digital-marketing"
}, {
  icon: Cloud,
  title: "IT Consulting & Cloud",
  description: "Expert IT consulting, AWS / Azure cloud migration and DevOps for modern business infrastructure.",
  href: "/services/it-consulting"
}, {
  icon: ShoppingCart,
  title: "E-commerce Development",
  description: "Shopify, WooCommerce and custom e-commerce platforms with payment gateway integration for Indian businesses.",
  href: "/services/web-development"
}, {
  icon: Search,
  title: "Local SEO & GMB",
  description: "Local SEO and Google Business Profile optimization to rank for 'near me' searches in your city.",
  href: "/services/digital-marketing"
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "Beautiful, conversion-focused user interfaces and design systems crafted by our in-house design team.",
  href: "/services/web-development"
}, {
  icon: Database,
  title: "CRM & ERP Solutions",
  description: "Custom CRM, ERP and HRMS systems tailored to streamline operations for SMEs and enterprises.",
  href: "/services/software-development"
}];
const portfolioPreview = [
  { title: "Bihar Educational Portal", category: "Web Development", icon: Globe, description: "Online learning platform serving 10,000+ students across India.", highlight: "10,000+ active users", color: "from-blue-500 to-cyan-500" },
  { title: "HealthFirst Patient App", category: "Mobile App", icon: Smartphone, description: "Healthcare app with appointments and telemedicine.", highlight: "15,000+ downloads", color: "from-green-500 to-emerald-500" },
  { title: "RetailMax ERP System", category: "Software", icon: Code, description: "Custom ERP for retail chain across Bihar.", highlight: "60% faster operations", color: "from-purple-500 to-pink-500" },
];

const trustStats = [
  { icon: Briefcase, value: "150+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "12+", label: "Countries Served" },
  { icon: MapPin, value: "25+", label: "Indian Cities" },
];
const clients = ["Bihar State Electronics Development Corporation", "Patna Medical College", "Local Startups", "Educational Institutions", "Healthcare Providers"];
const testimonials = [{
  name: "Rajesh Kumar",
  role: "CEO, Bihar Tech Solutions",
  content: "Golax India delivered an exceptional e-commerce platform for our business. Their team understood our requirements perfectly and delivered on time.",
  rating: 5
}, {
  name: "Priya Singh",
  role: "Director, Educational Institute, India",
  content: "The learning management system they built for us transformed how we deliver education. Highly professional and responsive team.",
  rating: 5
}, {
  name: "Amit Sharma",
  role: "Founder, HealthFirst Clinic",
  content: "Their healthcare app has streamlined our patient management. Professional team, on-time delivery — highly recommended!",
  rating: 5
}];
const industries = [
  { icon: ShoppingCart, name: "E-commerce & Retail" },
  { icon: GraduationCap, name: "Education & EdTech" },
  { icon: Heart, name: "Healthcare & Pharma" },
  { icon: Building2, name: "Real Estate" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Travel & Hospitality" },
  { icon: Briefcase, name: "Finance & Banking" },
  { icon: Server, name: "Logistics & Supply Chain" }
];
const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Python", "Flutter", "React Native", "AWS", "Azure", "MongoDB", "PostgreSQL", "Tailwind", "Laravel", "WordPress", "Shopify", "Firebase"];
const process = [
  { icon: MessageSquare, step: "01", title: "Discovery & Consultation", desc: "We start with a free consultation to understand your business goals, target audience and project requirements." },
  { icon: Lightbulb, step: "02", title: "Strategy & Planning", desc: "Our team crafts a detailed roadmap with timelines, deliverables and tech stack tailored to your needs." },
  { icon: Palette, step: "03", title: "Design & Prototype", desc: "We design wireframes, UI mockups and interactive prototypes for your approval before development begins." },
  { icon: Code, step: "04", title: "Development & Testing", desc: "Agile sprints, daily standups and rigorous QA testing ensure a bug-free, scalable product on time." },
  { icon: Rocket, step: "05", title: "Launch & Deployment", desc: "We handle deployment, server setup, domain configuration and a smooth handover with full documentation." },
  { icon: Shield, step: "06", title: "Support & Growth", desc: "Post-launch support, maintenance, performance monitoring and continuous improvements to scale with you." }
];
const faqs = homeFaqs.map((f) => ({ q: f.question, a: f.answer }));
export default function Index() {
  return <Layout>
      
      {/* Hero Section — mobile-first: form on top, compact height */}
      <section className="relative min-h-0 py-8 sm:py-12 md:min-h-[90vh] md:flex md:items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroBanner}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/88 to-primary/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-primary/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_hsl(199_89%_48%_/_0.25),transparent_50%)]" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            {/* Lead form first on mobile for conversions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full order-2 lg:order-2"
            >
              <HeroLeadForm
                context="Home — India & Global"
                title="Get a Free IT Consultation"
                subtitle="India-based team — reply in 2 hours on WhatsApp."
              />
            </motion.div>

            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-dark text-primary-foreground rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                India-Based · 12+ Countries
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-display text-[1.65rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] text-primary-foreground mb-4 sm:mb-6"
              >
                Web, Apps & Software —{" "}
                <span className="text-accent">Built in India, Delivered Worldwide</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              >
                Custom websites, mobile apps & digital marketing for businesses across India and globally. Free consultation — WhatsApp reply within 2 hours.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10"
              >
                <Button asChild variant="hero" size="xl" className="group shadow-lg shadow-accent/25 w-full sm:w-auto">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl" className="group w-full sm:w-auto">
                  <a href="tel:+919470024607">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-primary-foreground/20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent/80 border-2 border-primary flex items-center justify-center text-xs font-bold text-white">
                        {i === 1 ? 'A' : i === 2 ? 'R' : i === 3 ? 'S' : 'P'}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    <span className="font-semibold text-primary-foreground">50+</span> Happy Clients
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-primary-foreground/80 ml-1">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <TrustBar stats={trustStats} variant="light" />

      {/* Services Section */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            badge="Our Services"
            title="IT Services for Businesses Across India"
            description="Web development, software, mobile apps, SEO and cloud — delivered remotely to any city in India and internationally."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Link href={service.href}>
                  <div className="premium-card p-5 sm:p-8 group h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-sm">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-primary font-medium" aria-label={`Learn more about ${service.title}`}>
                      Explore {service.title} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      <PortfolioPreview projects={portfolioPreview} />

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Golax India as Your IT Partner?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                India-based team with global standards — serving startups, SMEs and enterprises across India and 12+ countries from our HQ in Patna, Bihar.
              </p>
              <ul className="space-y-4">
                {["10+ years · 150+ projects across India & globally", "Dedicated team of 25+ skilled developers", "Remote delivery with on-site visits when needed", "Post-deployment support and maintenance", "Competitive pricing in ₹ and $ for offshore clients", "ISO certified development processes"].map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>)}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              <Image src={techPattern} alt="Technology innovation at Golax India" className="rounded-2xl shadow-2xl w-full h-auto" loading="lazy" />
              <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto glass-card rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                    <Award className="h-6 w-6 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-gradient">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Client Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-premium mb-4">Industries We Serve</span>
              <div className="accent-line mx-auto mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Trusted by Businesses Across Industries
              </h2>
              <p className="text-lg text-muted-foreground">
                From startups to enterprises, we deliver custom IT solutions for diverse industries across India and globally.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="premium-card p-4 sm:p-6 text-center group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-sm">
                  <industry.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base leading-snug">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/industries">Explore All Industries <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-premium mb-4 bg-accent/10 text-accent border-accent/20">Our Process</span>
              <div className="accent-line mx-auto mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                How We Deliver Successful Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven 6-step agile methodology refined over 10+ years of building digital products for clients across India and worldwide.
              </p>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {process.map((p, index) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative premium-card p-5 sm:p-8 bg-gradient-subtle hover:border-primary/30"
              >
                <div className="absolute -top-4 -right-4 text-7xl font-heading font-bold text-primary/10 select-none">{p.step}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="badge-premium mb-4">Technologies We Use</span>
              <div className="accent-line mx-auto mb-5" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Modern Tech Stack & Tools
              </h2>
              <p className="text-lg text-muted-foreground">
                We build with industry-leading technologies to ensure scalable, secure and future-proof products.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-5 py-2.5 bg-card border border-border/80 rounded-full text-foreground font-medium shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(199_89%_48%_/_0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white/10 text-primary-foreground border border-white/20 mb-4">Client Reviews</span>
              <div className="accent-line mx-auto mb-5 bg-gradient-to-r from-accent to-primary-foreground/50" />
              <h2 className="heading-display text-3xl md:text-4xl text-primary-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Here&apos;s what businesses across India and internationally have to say about working with Golax India.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="glass-card rounded-2xl p-7 sm:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-[15px]">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      <GeoReachSection />

      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our IT services in India and internationally"
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <CTABanner
        title="Ready to Start Your Digital Journey?"
        description="Get a free consultation — we'll reply within 2 hours on WhatsApp."
        primaryLabel="Get Free Quote"
      />
    </Layout>;
}