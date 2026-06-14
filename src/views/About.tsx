"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABanner from "@/components/shared/CTABanner";
import aboutTeam from "@/assets/about-team.jpg";
const values = [{
  icon: Target,
  title: "Innovation",
  description: "We embrace cutting-edge technologies and creative solutions to deliver the best outcomes for our clients."
}, {
  icon: Heart,
  title: "Client Focus",
  description: "Our clients' success is our success. We build lasting partnerships based on trust and transparency."
}, {
  icon: Award,
  title: "Excellence",
  description: "We maintain the highest standards of quality in every project, big or small."
}, {
  icon: Users,
  title: "Teamwork",
  description: "Our diverse team collaborates seamlessly to deliver exceptional results."
}];
const team = [{
  name: "Vikash Kumar",
  role: "Founder & CEO",
  bio: "15+ years in IT industry, ex-TCS, IIT Delhi alumnus"
}, {
  name: "Anita Sharma",
  role: "CTO",
  bio: "Full-stack expert with 12 years of experience in enterprise solutions"
}, {
  name: "Rajesh Singh",
  role: "Head of Development",
  bio: "Leads our development team with expertise in modern web technologies"
}, {
  name: "Meera Patel",
  role: "Digital Marketing Head",
  bio: "SEO specialist with proven track record of growing organic traffic"
}];
const milestones = [{
  year: "2014",
  event: "Golax India founded in Patna — vision to deliver world-class IT across India"
}, {
  year: "2018",
  event: "Expanded to serve clients across multiple Indian states"
}, {
  year: "2020",
  event: "Launched offshore delivery for US, UK and Middle East clients"
}, {
  year: "2022",
  event: "Achieved ISO 9001:2015 certification"
}, {
  year: "2024",
  event: "150+ projects delivered across India and 12+ countries"
}, {
  year: "2026",
  event: "25+ Indian city pages and global offshore presence launched"
}];
export default function About() {
  return <Layout>
      
      <PageHero
        badge="About Golax India"
        badgeIcon={Award}
        title={<>India-Based IT Company, <span className="text-accent">Trusted Globally</span></>}
        description="Since 2014, Golax India has helped businesses across India and 12+ countries transform through web, software, apps and digital marketing — headquartered in Patna, Bihar."
        formContext="About — Golax India"
      />

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Golax India was founded in 2014 in Patna with a vision to bring world-class IT services to businesses across India and beyond.</p>
                <p>
                  Starting from Patliputra Colony, Patna, we have grown into a trusted partner for startups, SMEs and enterprises in 25+ Indian cities and internationally. Our journey is fueled by excellence, innovation, and client success.
                </p>
                <p>
                  Today we serve clients across healthcare, education, retail, manufacturing and more — delivering web, software, mobile and marketing solutions that drive measurable growth.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 p-5 premium-card">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Headquartered in Patna, Bihar</div>
                  <div className="text-sm text-muted-foreground">Serving 25+ Indian cities & 12+ countries</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <Image src={aboutTeam} alt="Golax India team — web and software development company in India" className="rounded-2xl shadow-2xl w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="premium-card p-8 sm:p-10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses across India and globally with innovative technology solutions 
                that drive growth, efficiency, and competitive advantage — while nurturing talent from our home base in Bihar.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="premium-card p-8 sm:p-10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted India-based IT company for domestic and international clients — recognized for technical excellence, ethical practices, and measurable business impact from Patna to global markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding relative bg-card overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" aria-hidden />
        <div className="container relative mx-auto px-4">
          <SectionHeader
            badge="Our Values"
            title="Our Core Values"
            description="The principles that guide everything we do at Golax India"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="premium-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">Key milestones in Golax India's growth story</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => <motion.div key={milestone.year} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="bg-card rounded-lg p-6 premium-card flex-1 mt-2">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground">Meet the experienced professionals driving Golax India's success</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <motion.div key={member.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="premium-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 ring-1 ring-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-accent font-medium text-sm mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Build Something Great Together"
        description="Ready to partner with India's trusted IT company? Let's discuss your project today."
      />
    </Layout>;
}