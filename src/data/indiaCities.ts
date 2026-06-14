import type { LocationData } from "./locations";
import { generateSEOContent } from "./locations";

interface IndiaCitySeed {
  city: string;
  slug: string;
  state: string;
  industries: string[];
  specializations?: string[];
}

const seeds: IndiaCitySeed[] = [
  { city: "Delhi", slug: "delhi", state: "Delhi", industries: ["Government", "E-commerce", "Startups", "Healthcare", "Education", "Real Estate"], specializations: ["startups", "enterprise", "government"] },
  { city: "Mumbai", slug: "mumbai", state: "Maharashtra", industries: ["Finance", "Media", "E-commerce", "Real Estate", "Healthcare", "Logistics"], specializations: ["fintech", "media", "enterprise"] },
  { city: "Bangalore", slug: "bangalore", state: "Karnataka", industries: ["SaaS", "Startups", "IT Services", "E-commerce", "Healthtech", "EdTech"], specializations: ["saas", "startups", "product"] },
  { city: "Hyderabad", slug: "hyderabad", state: "Telangana", industries: ["Pharma", "IT Services", "Real Estate", "Education", "E-commerce", "Healthcare"], specializations: ["enterprise", "pharma", "it-services"] },
  { city: "Chennai", slug: "chennai", state: "Tamil Nadu", industries: ["Automotive", "Manufacturing", "IT Services", "Healthcare", "Education", "Export"], specializations: ["manufacturing", "automotive", "export"] },
  { city: "Kolkata", slug: "kolkata", state: "West Bengal", industries: ["Retail", "Education", "Healthcare", "Manufacturing", "E-commerce", "Media"], specializations: ["retail", "education", "media"] },
  { city: "Pune", slug: "pune", state: "Maharashtra", industries: ["Automotive", "IT Services", "Manufacturing", "Education", "Startups", "Healthcare"], specializations: ["automotive", "it-services", "startups"] },
  { city: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", industries: ["Textiles", "Manufacturing", "Pharma", "E-commerce", "Real Estate", "Finance"], specializations: ["manufacturing", "textiles", "pharma"] },
  { city: "Jaipur", slug: "jaipur", state: "Rajasthan", industries: ["Tourism", "Handicrafts", "Education", "Retail", "Healthcare", "Real Estate"], specializations: ["tourism", "retail", "handicrafts"] },
  { city: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", industries: ["Government", "Education", "Healthcare", "Retail", "Real Estate", "E-commerce"], specializations: ["government", "education", "retail"] },
  { city: "Chandigarh", slug: "chandigarh", state: "Chandigarh", industries: ["Government", "Education", "Healthcare", "IT Services", "Retail", "Real Estate"], specializations: ["government", "it-services", "education"] },
  { city: "Noida", slug: "noida", state: "Uttar Pradesh", industries: ["IT Services", "E-commerce", "Media", "Startups", "Real Estate", "Education"], specializations: ["it-services", "startups", "media"] },
  { city: "Gurugram", slug: "gurugram", state: "Haryana", industries: ["Corporate", "Fintech", "E-commerce", "Real Estate", "Logistics", "Healthcare"], specializations: ["corporate", "fintech", "enterprise"] },
  { city: "Indore", slug: "indore", state: "Madhya Pradesh", industries: ["Retail", "Manufacturing", "Education", "Healthcare", "E-commerce", "Agriculture"], specializations: ["retail", "manufacturing", "education"] },
  { city: "Bhopal", slug: "bhopal", state: "Madhya Pradesh", industries: ["Government", "Education", "Healthcare", "Retail", "Manufacturing", "Tourism"], specializations: ["government", "education", "healthcare"] },
  { city: "Nagpur", slug: "nagpur", state: "Maharashtra", industries: ["Logistics", "Manufacturing", "Education", "Healthcare", "Retail", "IT Services"], specializations: ["logistics", "manufacturing", "education"] },
  { city: "Kochi", slug: "kochi", state: "Kerala", industries: ["Tourism", "Shipping", "IT Services", "Healthcare", "Education", "Export"], specializations: ["tourism", "shipping", "it-services"] },
  { city: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu", industries: ["Textiles", "Manufacturing", "Engineering", "Healthcare", "Education", "Export"], specializations: ["textiles", "manufacturing", "engineering"] },
  { city: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh", industries: ["Shipping", "Manufacturing", "Tourism", "Healthcare", "Education", "Retail"], specializations: ["shipping", "manufacturing", "port"] },
  { city: "Surat", slug: "surat", state: "Gujarat", industries: ["Diamonds", "Textiles", "Manufacturing", "E-commerce", "Retail", "Logistics"], specializations: ["textiles", "diamonds", "manufacturing"] },
  { city: "Vadodara", slug: "vadodara", state: "Gujarat", industries: ["Manufacturing", "Chemicals", "Education", "Healthcare", "Retail", "IT Services"], specializations: ["manufacturing", "chemicals", "education"] },
  { city: "Thiruvananthapuram", slug: "thiruvananthapuram", state: "Kerala", industries: ["Government", "IT Services", "Tourism", "Healthcare", "Education", "Space Tech"], specializations: ["government", "it-services", "tourism"] },
  { city: "Ranchi", slug: "ranchi", state: "Jharkhand", industries: ["Mining", "Education", "Healthcare", "Retail", "Government", "Manufacturing"], specializations: ["mining", "education", "government"] },
  { city: "Guwahati", slug: "guwahati", state: "Assam", industries: ["Tourism", "Tea Export", "Education", "Healthcare", "Retail", "Logistics"], specializations: ["tourism", "export", "northeast"] },
  { city: "Patna", slug: "patna", state: "Bihar", industries: ["Government", "Education", "Healthcare", "Retail", "Startups", "Real Estate"], specializations: ["government", "education", "startups"] },
];

function buildCity(seed: IndiaCitySeed): LocationData {
  const { city, slug, state, industries, specializations = [] } = seed;
  return {
    city,
    slug,
    state,
    description: `Top IT company in ${city}, ${state} — web development, software development, mobile apps, digital marketing & IT consulting. Trusted partner for businesses across ${state} and India.`,
    about: `${city} is a major business hub in ${state}, with growing demand for professional IT services across ${industries.slice(0, 3).join(", ").toLowerCase()}, and more. Golax India — headquartered in Patna with teams serving clients nationwide — helps ${city} businesses build websites, apps, software, and digital marketing campaigns that drive measurable growth. We combine India-wide delivery capability with deep understanding of ${state}'s market dynamics.`,
    whyChooseUs: [
      `Dedicated teams serving ${city} and ${state}`,
      "10+ years experience · 150+ projects delivered",
      "Remote-first with on-site visits when needed",
      "Competitive India-wide pricing in ₹",
      "English & Hindi support · 2-hour WhatsApp response",
      "Full-stack: web, apps, software, SEO & cloud",
    ],
    industries,
    faqs: [
      {
        question: `Which is the best IT company in ${city}, ${state}?`,
        answer: `Golax India is a trusted IT company serving ${city} with web development, software development, mobile apps, SEO, and digital marketing. We have delivered 150+ projects for clients across India and internationally.`,
      },
      {
        question: `Do you have an office in ${city}?`,
        answer: `Our headquarters is in Patna, Bihar. We serve ${city} clients remotely with video calls, project management tools, and scheduled on-site visits for key milestones. Most ${city} projects run entirely online with excellent results.`,
      },
      {
        question: `How much does website development cost in ${city}?`,
        answer: `Basic business websites start from ₹15,000. Custom web apps and e-commerce stores range from ₹40,000 to ₹3,00,000+ depending on features. We offer transparent quotes for ${city} businesses with no hidden fees.`,
      },
      {
        question: `Can you build mobile apps for ${city} businesses?`,
        answer: `Yes. We develop iOS, Android, and cross-platform apps for businesses in ${city} — e-commerce, healthcare, education, logistics, and more using Flutter and React Native.`,
      },
      {
        question: `Do you provide SEO services in ${city}?`,
        answer: `Absolutely. Our digital marketing team provides local SEO, Google Ads, and social media marketing for ${city} businesses to rank on Google and generate qualified leads.`,
      },
    ],
    seoContent: generateSEOContent(city, state, false, specializations),
  };
}

export const indiaCities: LocationData[] = seeds.map(buildCity);

export const featuredIndiaCities = indiaCities.filter((c) => c.slug !== "patna");
