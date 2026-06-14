"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
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

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  budget: z.string().min(1, "Please select a budget"),
  service: z.string().min(1, "Please select a service"),
  requirement: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1500),
});

interface Props {
  city: string;
  country: string;
  currency: string;
}

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Software / SaaS Development",
  "Digital Marketing",
  "SEO Services",
  "IT Consulting & Cloud",
  "Other",
];

export default function CityLeadForm({ city, country, currency }: Props) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    requirement: "",
  });

  const budgetOptions = [
    `Under 2,000 ${currency}`,
    `2,000 – 5,000 ${currency}`,
    `5,000 – 15,000 ${currency}`,
    `15,000 – 50,000 ${currency}`,
    `50,000+ ${currency}`,
    "Not sure yet",
  ];

  const buildMessage = () =>
    `New Lead from ${city}, ${country}%0A%0A` +
    `Name: ${form.name}%0A` +
    `Email: ${form.email}%0A` +
    (form.company ? `Company: ${form.company}%0A` : "") +
    `Service: ${form.service}%0A` +
    `Budget: ${form.budget}%0A` +
    `Location: ${city}, ${country}%0A%0A` +
    `Requirement:%0A${form.requirement}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const first = result.error.issues[0];
      toast({ title: "Please fix the form", description: first.message, variant: "destructive" });
      return;
    }

    const encoded = buildMessage();
    const waUrl = `https://wa.me/${PHONE_HREF}?text=${encoded}`;
    const subject = encodeURIComponent(`New Lead from ${city}, ${country} — ${form.service}`);
    const body = encoded.replace(/%0A/g, "\n");
    const mailUrl = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;

    // Open WhatsApp (primary), then trigger mail in background
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      window.location.href = mailUrl;
    }, 400);

    setSubmitted(true);
    toast({
      title: "Connecting you now!",
      description: "WhatsApp opened. Your email client will open shortly.",
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-8 text-center"
      >
        <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thanks, {form.name.split(" ")[0]}!</h3>
        <p className="text-muted-foreground mb-6">
          We've opened WhatsApp & Email so you can confirm your {city} project enquiry. Our team will respond within 2 business hours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={`https://wa.me/${PHONE_HREF}?text=${buildMessage()}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> Reopen WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="w-4 h-4 mr-2" /> Email us
            </a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lead-name">Full Name *</Label>
          <Input
            id="lead-name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            maxLength={100}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-email">Work Email *</Label>
          <Input
            id="lead-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            maxLength={255}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-company">Company (optional)</Label>
        <Input
          id="lead-company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder={`Your company in ${city}`}
          maxLength={150}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Service Needed *</Label>
          <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Estimated Budget *</Label>
          <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
            <SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger>
            <SelectContent>
              {budgetOptions.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-req">Tell us about your project *</Label>
        <Textarea
          id="lead-req"
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          placeholder={`Brief about your ${city} project — goals, timeline, must-have features...`}
          rows={5}
          maxLength={1500}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <Send className="w-4 h-4 mr-2" />
        Send Enquiry via WhatsApp & Email
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        On submit we'll open WhatsApp and your email client pre-filled with your enquiry. No spam — your details stay with us.
      </p>
    </motion.form>
  );
}
