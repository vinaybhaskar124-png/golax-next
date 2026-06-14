"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Heart,
  TrendingUp,
  Users,
  Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career paths with regular promotions and skill development opportunities.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with talented, supportive colleagues who love what they do.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, work from home options, and paid time off.",
  },
];

const openings = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Development",
    type: "Full-time",
    location: "Patna, Bihar",
    experience: "3-5 years",
    description: "We're looking for an experienced React developer to join our team and work on exciting projects for clients across Bihar.",
    requirements: [
      "3+ years of experience with React.js",
      "Strong understanding of JavaScript/TypeScript",
      "Experience with state management (Redux, Context API)",
      "Familiarity with RESTful APIs and GraphQL",
      "Experience with testing frameworks",
    ],
  },
  {
    id: 2,
    title: "Mobile App Developer (React Native)",
    department: "Development",
    type: "Full-time",
    location: "Patna, Bihar",
    experience: "2-4 years",
    description: "Join our mobile team to build cross-platform applications for iOS and Android using React Native.",
    requirements: [
      "2+ years of React Native experience",
      "Published apps on App Store/Play Store",
      "Understanding of mobile UI/UX principles",
      "Experience with Firebase and push notifications",
      "Knowledge of native modules integration",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    location: "Patna, Bihar",
    experience: "1-3 years",
    description: "Help our clients grow their online presence through SEO, social media, and paid advertising.",
    requirements: [
      "Experience with SEO and Google Analytics",
      "Knowledge of social media marketing",
      "Experience with Google Ads and Facebook Ads",
      "Content creation and copywriting skills",
      "Understanding of marketing automation tools",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Patna, Bihar (Hybrid)",
    experience: "2-4 years",
    description: "Create beautiful, user-centered designs for web and mobile applications.",
    requirements: [
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing UI/UX projects",
      "Understanding of design systems",
      "Experience with user research and testing",
      "Knowledge of front-end development is a plus",
    ],
  },
];

export default function Careers() {
  const { toast } = useToast();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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
                Join Our Team
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Build Your Career with{" "}
                <span className="text-accent">Golax India</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Join Patna's leading IT company and work on exciting projects that make a difference. 
                We're always looking for talented individuals to join our team.
              </p>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context="Careers — Golax India" variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore current opportunities at Golax India
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-md border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  {expandedJob === job.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
                      Apply Now
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Apply Now
              </h2>
              <p className="text-muted-foreground">
                Don't see a perfect fit? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-card rounded-2xl p-8 shadow-lg border border-border space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 94700 24607"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3 years"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position Applying For *</Label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a position</option>
                  {openings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="Other">Other / General Application</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Cover Letter / Additional Info</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience, and why you'd be a great fit..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
