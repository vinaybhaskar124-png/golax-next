"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, MessageCircle, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PHONE_HREF = "919470024607";
const EMAIL = "contact@golaxindia.com";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  service: z.string().min(1, "Select a service"),
  requirement: z.string().trim().min(5, "Brief required").max(1000),
});

const DEFAULT_SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Software / SaaS Development",
  "Digital Marketing",
  "SEO Services",
  "IT Consulting & Cloud",
  "Other",
];

interface Props {
  /** Page / location context shown in lead message, e.g. "Home", "Patna", "New York, USA" */
  context?: string;
  /** Default selected service (if relevant for service pages) */
  defaultService?: string;
  /** Override service list */
  services?: string[];
  /** Compact heading shown on top of the form */
  title?: string;
  /** Sub-text under the heading */
  subtitle?: string;
  /** Variant for placement on dark hero (default) or on light section */
  variant?: "dark" | "light";
}

export default function HeroLeadForm({
  context = "Website",
  defaultService = "",
  services = DEFAULT_SERVICES,
  title = "Get a Free Quote in 2 Hours",
  subtitle = "Tell us about your project — we'll connect on WhatsApp instantly.",
  variant = "dark",
}: Props) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    requirement: "",
  });

  const buildMsg = () =>
    `New Lead from ${context}%0A%0A` +
    `Name: ${form.name}%0A` +
    `Phone: ${form.phone}%0A` +
    `Email: ${form.email}%0A` +
    `Service: ${form.service}%0A` +
    `Source: ${context}%0A%0A` +
    `Requirement:%0A${form.requirement}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please complete the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    const encoded = buildMsg();
    const waUrl = `https://wa.me/${PHONE_HREF}?text=${encoded}`;
    const subject = encodeURIComponent(`New Lead from ${context} — ${form.service}`);
    const body = encoded.replace(/%0A/g, "\n");
    const mailUrl = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      window.location.href = mailUrl;
    }, 400);

    setSubmitted(true);
    toast({
      title: "Connecting you now!",
      description: "WhatsApp opened. Email client will open shortly.",
    });
  };

  const wrapperClass =
    variant === "dark"
      ? "glass-card ring-1 ring-white/40"
      : "bg-gradient-card border border-border/80 shadow-premium";

  const formInner = "relative overflow-hidden rounded-2xl";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${wrapperClass} ${formInner} p-6 md:p-7 text-center text-card-foreground`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3 mt-1" />
        <h3 className="text-xl font-bold text-foreground mb-2">
          Thanks, {form.name.split(" ")[0]}!
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          WhatsApp & Email opened with your enquiry. We'll reply within 2 business hours.
        </p>
        <Button asChild size="sm" className="w-full">
          <a
            href={`https://wa.me/${PHONE_HREF}?text=${buildMsg()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> Reopen WhatsApp
          </a>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`${wrapperClass} ${formInner} p-4 sm:p-5 md:p-6 space-y-3 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none text-card-foreground`}
      aria-label="Quick lead enquiry form"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="text-center mb-1 pt-1">
        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hlf-name" className="text-xs font-semibold">Full Name *</Label>
        <Input
          id="hlf-name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          maxLength={100}
          required
          className="h-11 sm:h-10 text-foreground"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="hlf-phone" className="text-xs font-semibold">Phone *</Label>
          <Input
            id="hlf-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 …"
            maxLength={20}
            required
            className="h-11 sm:h-10 text-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hlf-email" className="text-xs font-semibold">Email *</Label>
          <Input
            id="hlf-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            maxLength={255}
            required
            className="h-11 sm:h-10 text-foreground"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hlf-service" id="hlf-service-label" className="text-xs font-semibold">Service Needed *</Label>
        <Select
          value={form.service}
          onValueChange={(v) => setForm({ ...form, service: v })}
        >
          <SelectTrigger id="hlf-service" aria-labelledby="hlf-service-label" className="h-11 sm:h-10 text-foreground">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hlf-req" className="text-xs font-semibold">Your Requirement *</Label>
        <Textarea
          id="hlf-req"
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          placeholder="Briefly describe your project, goals, timeline…"
          rows={3}
          maxLength={1000}
          required
          className="text-foreground"
        />
      </div>

      <Button type="submit" size="lg" className="w-full min-h-[48px] text-base">
        <Send className="w-4 h-4 mr-2" />
        Send via WhatsApp
      </Button>
      <p className="text-[10px] text-muted-foreground text-center flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" />
        100% confidential. No spam.
      </p>
    </motion.form>
  );
}
