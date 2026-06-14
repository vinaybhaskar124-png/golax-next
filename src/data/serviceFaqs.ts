import type { FaqItem } from "@/lib/seo/schema";

export const webDevelopmentFaqs: FaqItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic corporate website typically takes 2-4 weeks, while complex web applications or e-commerce stores can take 6-12 weeks. We provide detailed timelines after understanding your specific requirements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance packages that include regular updates, security patches, backups, and content updates.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Every website we build is fully responsive and optimized for all devices. Mobile-first design is our standard practice.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we specialize in website redesigns while preserving your SEO rankings and improving user experience.",
  },
  {
    question: "Do you help with domain and hosting?",
    answer:
      "Yes, we can help you choose and set up the right domain name and hosting solution for optimal performance.",
  },
];

export const softwareDevelopmentFaqs: FaqItem[] = [
  {
    question: "What is the typical timeline for software development?",
    answer:
      "Simple applications take 2-3 months; enterprise software can take 6-12 months. We provide detailed timelines after requirement analysis.",
  },
  {
    question: "How do you ensure software quality?",
    answer:
      "Code reviews, automated testing, manual QA, security audits, and agile methodology throughout development.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Yes — we connect new software with existing ERPs, CRMs, payment gateways, and third-party services via APIs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes — bug fixes, performance optimization, security updates, and 24/7 support for critical systems.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "Encryption, secure authentication, role-based access, and compliance with industry standards.",
  },
];

export const mobileAppDevelopmentFaqs: FaqItem[] = [
  {
    question: "Native or cross-platform app?",
    answer:
      "Native offers best performance for complex apps; React Native/Flutter is cost-effective for MVPs. We recommend based on your needs.",
  },
  {
    question: "How much does app development cost?",
    answer:
      "Simple apps start from ₹3-5 lakhs; complex apps can be ₹20-50 lakhs+. Contact us for a detailed quote.",
  },
  {
    question: "How long does development take?",
    answer:
      "Basic apps: 2-4 months. Complex apps: 6-9+ months with agile progress throughout.",
  },
  {
    question: "Do you help with app store submission?",
    answer:
      "Yes — we handle iOS App Store and Google Play submission including assets and compliance.",
  },
  {
    question: "Can you enhance my existing app?",
    answer:
      "Yes — new features, UI updates, performance fixes, and bug resolution.",
  },
];

export const digitalMarketingFaqs: FaqItem[] = [
  {
    question: "How long to see SEO results?",
    answer:
      "Initial improvements in 3-4 months; significant results in 6-12 months depending on industry and competition.",
  },
  {
    question: "What is your marketing approach?",
    answer:
      "Data-driven strategy combining SEO, PPC, social media, and content based on your specific goals.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Organic traffic, rankings, conversions, ROI, engagement, and leads — with detailed monthly reports.",
  },
  {
    question: "Do you work outside India?",
    answer:
      "Yes — we serve businesses across India and internationally. Digital marketing and remote delivery work for any location.",
  },
  {
    question: "What makes your SEO different?",
    answer:
      "White-hat sustainable practices, latest algorithm knowledge, transparent reporting, and local + national SEO expertise for Indian cities.",
  },
];

export const itConsultingFaqs: FaqItem[] = [
  {
    question: "What is IT consulting and why do I need it?",
    answer:
      "IT consulting helps you make informed technology decisions, optimize investments, and implement solutions that drive growth.",
  },
  {
    question: "How can cloud services benefit my business?",
    answer:
      "Reduced costs, scalability, enhanced security, disaster recovery, and faster deployment of new services.",
  },
  {
    question: "How do you ensure security during cloud migration?",
    answer:
      "Encryption, access controls, compliance audits, monitoring, backup, and disaster recovery.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes — 24/7 monitoring, maintenance, security updates, and flexible support packages.",
  },
  {
    question: "How long does a consulting project take?",
    answer:
      "Assessments: 2-3 weeks. Full cloud migration: 3-6 months. Timelines provided at consultation.",
  },
];

export const serviceFaqsBySlug: Record<string, FaqItem[]> = {
  "web-development": webDevelopmentFaqs,
  "software-development": softwareDevelopmentFaqs,
  "mobile-app-development": mobileAppDevelopmentFaqs,
  "digital-marketing": digitalMarketingFaqs,
  "it-consulting": itConsultingFaqs,
};

export const serviceMetaForSchema: Record<
  string,
  { name: string; description: string; serviceType: string }
> = {
  "web-development": {
    name: "Web Development",
    description:
      "Custom website and web application development for businesses across India and globally — React, Next.js, WordPress, e-commerce.",
    serviceType: "Web Development",
  },
  "software-development": {
    name: "Software Development",
    description:
      "Custom ERP, CRM, SaaS and enterprise software development for Indian and international clients.",
    serviceType: "Software Development",
  },
  "mobile-app-development": {
    name: "Mobile App Development",
    description:
      "Native iOS, Android and cross-platform Flutter/React Native app development for India and global markets.",
    serviceType: "Mobile Application Development",
  },
  "digital-marketing": {
    name: "Digital Marketing & SEO",
    description:
      "SEO, Google Ads, social media and content marketing to grow organic traffic and leads across India.",
    serviceType: "Digital Marketing",
  },
  "it-consulting": {
    name: "IT Consulting & Cloud Services",
    description:
      "Cloud migration, DevOps, cybersecurity and IT strategy consulting for businesses in India and offshore clients.",
    serviceType: "IT Consulting",
  },
};
