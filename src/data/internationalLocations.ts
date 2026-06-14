// International / offshore locations served by Golax India.
// Tuned for high-intent keywords like:
//   - "offshore web development company in <country>"
//   - "hire developers from India for <country> businesses"
//   - "outsource software development to India from <country>"
//   - "<service> agency for <country> startups / SMEs / enterprises"

import { services as serviceCatalog, ServiceData } from "./serviceLocations";

export interface InternationalLocationData {
  country: string;
  slug: string;
  countryCode: string; // ISO 3166-1 alpha-2
  region: string; // e.g. "North America", "Europe", "Middle East", "APAC"
  flag: string; // emoji
  currency: string; // e.g. "USD"
  currencySymbol: string;
  timezoneOverlap: string; // hours of working overlap with India
  majorCities: string[];
  description: string; // meta description
  heroTagline: string;
  about: string;
  whyChooseUs: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  seoContent: {
    introduction: string;
    whyOffshore: string;
    ourExpertise: string;
    webDevelopmentDetails: string;
    softwareDevelopmentDetails: string;
    mobileAppDetails: string;
    digitalMarketingDetails: string;
    itConsultingDetails: string;
    pricingAdvantage: string;
    workingModel: string;
    technologyStack: string;
    processOverview: string;
    commitment: string;
  };
}

// Helper to build the long-form SEO body for every international location.
// Each section is intentionally keyword-rich without keyword stuffing,
// and references the actual country + region + currency context.
const buildSEOContent = (params: {
  country: string;
  region: string;
  currency: string;
  currencySymbol: string;
  timezoneOverlap: string;
  majorCities: string[];
  hourlyRateUSD: { min: number; max: number };
  webStartUSD: number;
  appStartUSD: number;
}): InternationalLocationData["seoContent"] => {
  const {
    country,
    region,
    currency,
    currencySymbol,
    timezoneOverlap,
    majorCities,
    hourlyRateUSD,
    webStartUSD,
    appStartUSD,
  } = params;
  const cityList = majorCities.slice(0, 4).join(", ");

  return {
    introduction: `Looking for a reliable offshore web development company for your business in ${country}? Golax India is a trusted IT services partner for startups, SMEs, and enterprises across ${country} — from ${cityList} and beyond. We help ${country} businesses cut development costs by 40–60% without compromising on quality, while accessing one of the world's largest pools of skilled engineers.

As a leading offshore software development company serving ${country}, we deliver custom websites, mobile apps, SaaS products, e-commerce stores, ERP/CRM platforms, AI integrations, and end-to-end digital marketing campaigns. Whether you want to outsource a single project, hire a dedicated remote development team from India, or set up an extended engineering arm, our flexible engagement models are built around how ${country} businesses actually work.

What makes Golax India the preferred web development and software development partner for ${country} companies is the combination of senior talent, transparent communication, ${timezoneOverlap} of daily timezone overlap, and predictable ${currency} pricing. We've delivered projects for clients across ${region}, and we treat every engagement as a long-term partnership rather than a one-off transaction.`,

    whyOffshore: `Outsourcing software development from ${country} to India is no longer just a cost-saving play — it is a strategic move adopted by Fortune 500s, fast-growing startups, and bootstrapped founders alike. Here is why ${country} businesses choose an offshore development partner like Golax India:

First, talent depth. India produces more software engineers each year than any other country, with deep expertise in React, Next.js, Node.js, Python, .NET, Flutter, React Native, AWS, and AI/ML. Hiring locally in ${country} for these stacks is expensive, slow, and often supply-constrained — outsourcing solves all three at once.

Second, cost efficiency. Hiring a senior full-stack developer in ${country} can cost ${currencySymbol}80–${currencySymbol}180 per hour. With Golax India, you get equivalent (often better) talent at ${currencySymbol}${hourlyRateUSD.min}–${currencySymbol}${hourlyRateUSD.max} per hour, billed transparently in ${currency}. The savings can fund marketing, growth, or simply a longer runway.

Third, speed to market. Our pre-vetted teams, established processes, and reusable code accelerators let ${country} clients ship MVPs in 6–10 weeks instead of 6–10 months. For founders racing competitors, that gap is the difference between winning and losing the category.

Fourth, ${timezoneOverlap} of overlap. Despite the geographical distance from ${country}, we structure our day to maintain real-time collaboration with your team — daily stand-ups, Slack/Teams responsiveness, and on-demand calls during your business hours.

Fifth, scalability. Need to scale from one developer to a 15-person product team in 4 weeks? Or trim back during a slow quarter? Offshore engagements offer flexibility that local hiring in ${country} simply cannot match.`,

    ourExpertise: `As a full-service offshore IT company working with clients across ${country}, Golax India brings together specialists across the entire product lifecycle — designers, frontend engineers, backend engineers, mobile developers, DevOps, QA, and growth marketers. Every team that works on a ${country} project is led by a senior engineer with 5+ years of experience and a dedicated project manager who speaks fluent English.

Our web development team builds high-converting marketing sites, headless commerce stores, SaaS dashboards, and complex B2B portals using React, Next.js, TypeScript, Tailwind, and Node.js. Every site we ship for ${country} clients is responsive, accessibility-aware (WCAG AA), SEO-optimized, and built on a modern, maintainable codebase.

Our software engineering team is the choice of ${country} businesses that need custom ERPs, CRMs, HRMS systems, healthcare platforms, fintech products, logistics software, and enterprise integrations. We work with .NET, Java Spring Boot, Python (Django/FastAPI), PostgreSQL, MongoDB, microservices on AWS/Azure/GCP, and event-driven architectures.

Our mobile team ships native iOS (Swift), native Android (Kotlin), and cross-platform Flutter/React Native apps for ${country} startups and enterprises. From food-delivery and ride-hailing apps to telemedicine, fintech wallets, and B2B field-force apps — we have the patterns and playbooks to deliver predictably.

Our digital marketing team helps ${country} businesses rank on Google, run profitable PPC campaigns, scale on Meta/LinkedIn/TikTok ads, and build content engines that compound over time. We've taken brands from zero to leading positions on competitive ${country} keywords in their categories.`,

    webDevelopmentDetails: `Our website development service for ${country} businesses covers the full spectrum — from a clean 5-page marketing site for a bootstrapped founder to a multi-region e-commerce platform handling thousands of orders a day. Projects typically start at ${currencySymbol}${webStartUSD} for a polished marketing site and scale based on functionality.

For ${country} clients we specialize in Next.js + headless architectures (Sanity, Contentful, Strapi), Shopify Plus and BigCommerce builds, WordPress + WooCommerce stores with custom themes, and conversion-optimized landing pages tied to PPC campaigns. Every site is mobile-first, Core Web Vitals friendly, GDPR/CCPA compliant where applicable, and shipped with analytics + tag manager already wired up.

We also handle ongoing care plans — security patches, uptime monitoring, content updates, A/B testing, and CRO sprints — so your ${country} marketing team can focus on growth instead of firefighting.`,

    softwareDevelopmentDetails: `Custom software development is one of the strongest reasons ${country} businesses come to Golax India. Building bespoke software locally in ${country} is expensive and slow; with us, the same product is shipped 50–70% cheaper, with senior engineers leading the architecture from day one.

We've built SaaS platforms, internal admin tools, ERPs, CRMs, scheduling systems, marketplaces, billing engines, document workflows, and AI-augmented productivity tools for ${country} clients. Our engagement options include fixed-scope projects, monthly retainers, and dedicated developer hiring — all billed in ${currency} with clear monthly invoices.

For ${country} startups raising venture funding, we are particularly well known for shipping MVPs that survive due diligence — clean code, automated tests, CI/CD pipelines, infrastructure as code, and documentation good enough to onboard a future in-house CTO.`,

    mobileAppDetails: `Mobile app development is a key growth lever for ${country} businesses, and our mobile team has shipped 80+ apps across the App Store and Google Play. Pricing for ${country} clients starts at ${currencySymbol}${appStartUSD} for a single-platform MVP and scales with complexity.

We work in Flutter and React Native for cost-efficient cross-platform builds, and native Swift / Kotlin where performance, hardware access, or platform-specific UX matters. Common ${country} app categories we serve include fintech, healthcare/telemedicine, on-demand services, social/community, education, and field-force/B2B operations.

Every app project includes UX design, native iOS + Android delivery, backend APIs, push notifications, in-app payments (Stripe, Apple Pay, Google Pay), App Store + Play Store submission support, and a 60-day post-launch warranty.`,

    digitalMarketingDetails: `Building a great product is half the battle — getting ${country} customers to find, trust, and buy from you is the other half. Our digital marketing team helps ${country} businesses grow predictably through SEO, paid ads, content, and lifecycle marketing.

For SEO we target ${country}-specific keyword universes (US English, UK English, AU English, etc. as applicable), build topical authority through editorial content, fix technical issues, and earn high-quality backlinks. Most ${country} clients see meaningful organic traffic lift within 4–6 months.

For paid media we run profitable Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads campaigns optimized for ${country} audiences. We don't just optimize ROAS — we build full-funnel measurement so you know exactly which dollar drove which customer.

We also handle email/lifecycle marketing in Klaviyo, HubSpot, Mailchimp, and ActiveCampaign — recovering abandoned carts, nurturing leads, and increasing LTV from your existing ${country} customer base.`,

    itConsultingDetails: `For ${country} businesses thinking about cloud migration, technical due diligence, security audits, or building an offshore development center, our IT consulting practice provides senior advisory and hands-on execution.

We are experienced with AWS, Microsoft Azure, Google Cloud Platform, Cloudflare, and Vercel. Whether you need to move a legacy on-prem system to the cloud, harden an existing AWS account, or design a multi-region architecture for ${country} + global users, we deliver clear roadmaps and execute them end-to-end.

We also help ${country} founders and CTOs set up extended engineering teams in India — recruiting, onboarding, performance management, and culture-building — so you get the cost advantage of offshore with the ownership feel of an in-house team.`,

    pricingAdvantage: `Transparent ${currency} pricing is a core promise. Common engagement options for ${country} clients:

• Fixed-scope projects — websites from ${currencySymbol}${webStartUSD}, MVP apps from ${currencySymbol}${appStartUSD}, custom software quoted per scope.
• Dedicated developer / pod model — ${currencySymbol}${hourlyRateUSD.min}–${currencySymbol}${hourlyRateUSD.max} per hour, billed monthly, full-time engineers exclusively on your project.
• Time and materials — ideal for evolving scopes, billed weekly with detailed time logs.
• Outcome-based retainers — for marketing, SEO, and growth engagements tied to traffic, leads, or revenue KPIs.

There are no hidden fees, no surprise change-orders, and no minimum lock-ins beyond 30 days. You can scale your team up or down with two weeks of notice.`,

    workingModel: `Working with an offshore partner from ${country} can feel risky the first time. We've removed that risk with a working model designed for transparency:

• Dedicated project manager who works during your business hours.
• ${timezoneOverlap} of daily overlap between your team and ours.
• Daily async updates (Slack, Teams, Email) plus 2–3 live calls per week.
• Shared access to Jira/Linear, GitHub/GitLab, Figma, and staging environments from day one.
• Senior engineering review on every pull request — you get senior-quality output even at junior rates.
• Monthly executive review with metrics, risks, and roadmap for your ${country} stakeholders.

Most of our ${country} clients tell us the experience feels closer to working with an in-house team than a typical offshore vendor.`,

    technologyStack: `We're deliberately opinionated about the stacks we use for ${country} clients, choosing modern, well-supported, and hire-able technologies. Highlights include:

Frontend: React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Vue.js, Astro.
Backend: Node.js (NestJS, Express, Fastify), Python (FastAPI, Django), .NET, Java Spring Boot, Go.
Mobile: Flutter, React Native, native Swift, native Kotlin.
Data: PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Snowflake, BigQuery.
Cloud & DevOps: AWS, Azure, GCP, Vercel, Cloudflare, Docker, Kubernetes, Terraform, GitHub Actions.
AI: OpenAI, Anthropic Claude, Google Gemini, RAG architectures, custom fine-tuning, LangChain.
E-commerce: Shopify Plus, WooCommerce, BigCommerce, Medusa, custom headless.
CMS: Sanity, Contentful, Strapi, WordPress, Webflow.

We pick the right tool for your ${country} business, not the trendiest one.`,

    processOverview: `Our delivery process for ${country} clients is tuned for clarity and minimum overhead:

1. Discovery call (free, 30–45 min) — understand goals, constraints, timelines.
2. Proposal — fixed-scope quote or recommended team composition, ${currency}-denominated.
3. Kickoff — Slack channel, project tools, key stakeholders, communication cadence.
4. Design sprint — wireframes and high-fidelity Figma mockups, approved before development.
5. Agile development — two-week sprints, weekly demos, transparent backlog.
6. QA + UAT — internal QA on every PR, plus your team's acceptance testing in staging.
7. Launch — production deployment with monitoring, alerting, and on-call coverage.
8. Post-launch — 60-day warranty, optional ongoing care plan or feature roadmap.

For most ${country} engagements, the entire journey from kickoff to live launch is 8–16 weeks.`,

    commitment: `Our commitment to every ${country} client is simple: senior engineers, transparent communication, predictable ${currency} pricing, and code we'd be proud to show your future CTO.

We won't accept projects we can't deliver, we won't quietly swap senior engineers for juniors mid-project, and we won't pad timelines to bill more hours. If something goes wrong, we tell you early and fix it on our dime. That posture is why a meaningful share of our ${country} revenue comes from existing clients hiring us for their next product.

If you're a founder, CTO, or marketing leader in ${country} evaluating an offshore partner — let's talk. A 30-minute discovery call is the fastest way to find out if Golax India is the right fit for your next project.`,
  };
};

export const internationalLocations: InternationalLocationData[] = [
  {
    country: "United States",
    slug: "united-states",
    countryCode: "US",
    region: "North America",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    timezoneOverlap: "4–5 hours",
    majorCities: ["New York", "San Francisco", "Los Angeles", "Chicago", "Austin", "Seattle", "Boston", "Miami"],
    description: "Offshore web development & software company for US businesses. Hire dedicated developers from India — React, Next.js, mobile apps, AI, SaaS — at 40–60% lower cost.",
    heroTagline: "Offshore Web & Software Development Partner for US Businesses",
    about: "Golax India is an offshore IT services partner for startups, SMEs, and enterprises across the United States. From Silicon Valley founders shipping their first MVP to East Coast enterprises modernizing legacy systems, we help US companies build high-quality software at a fraction of US engineering costs — without the offshore quality risk.",
    whyChooseUs: [
      "Senior US-fluent engineers, not bait-and-switch juniors",
      "4–5 hours of daily PST/EST overlap for real-time collaboration",
      "Transparent USD pricing, monthly invoices, no hidden fees",
      "100+ shipped projects for US founders & enterprises",
      "MSA, NDA, IP-assignment templates ready for US legal review",
    ],
    industries: ["SaaS", "Fintech", "Healthtech", "E-commerce", "EdTech", "Real Estate", "Logistics", "AI Startups"],
    faqs: [
      { question: "Why should a US business outsource web development to Golax India?", answer: "US companies pay $80–$180/hour for senior engineering talent locally. With Golax India you get equivalent senior talent at $25–$45/hour, billed transparently in USD. Combined with 4–5 hours of daily timezone overlap and an English-fluent senior PM, the experience feels close to working with an in-house team — at 40–60% lower cost." },
      { question: "How do you handle communication across time zones with US clients?", answer: "We structure our day to maintain 4–5 hours of overlap with US PST/EST clients. Most US clients get daily async updates, 2–3 live calls per week, and on-demand Slack/Teams responsiveness during their business hours." },
      { question: "Do you sign NDAs and IP-assignment agreements with US clients?", answer: "Yes. We sign mutual NDAs, MSAs, and IP-assignment agreements before any code is written. All work product is assigned to your US entity on payment. We're happy to work with your preferred US legal templates." },
      { question: "How much does a website or MVP cost for a US startup?", answer: "Marketing websites start at around $3,500. SaaS MVPs typically range from $15,000–$60,000. Dedicated full-time developers are billed at $25–$45/hour depending on seniority. We provide fixed quotes after a 30-minute discovery call." },
      { question: "How fast can you start on a US project?", answer: "For most engagements we can kick off within 5–7 business days of contract signing — including a dedicated project manager, senior lead engineer, and shared tooling access." },
    ],
    seoContent: buildSEOContent({
      country: "the United States",
      region: "North America",
      currency: "USD",
      currencySymbol: "$",
      timezoneOverlap: "4–5 hours",
      majorCities: ["New York", "San Francisco", "Los Angeles", "Chicago"],
      hourlyRateUSD: { min: 25, max: 45 },
      webStartUSD: 3500,
      appStartUSD: 15000,
    }),
  },
  {
    country: "United Kingdom",
    slug: "united-kingdom",
    countryCode: "GB",
    region: "Europe",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£",
    timezoneOverlap: "5–6 hours",
    majorCities: ["London", "Manchester", "Birmingham", "Edinburgh", "Bristol", "Leeds", "Glasgow", "Liverpool"],
    description: "Offshore web development & software company for UK businesses. Hire React, Node.js, Flutter & SaaS developers from India — GDPR-ready, GBP billing, 5–6 hours overlap.",
    heroTagline: "Offshore Web & Software Development Partner for UK Businesses",
    about: "Golax India serves UK startups, scale-ups, and enterprises with offshore web development, mobile apps, custom software, and digital marketing. From London fintech founders to Manchester e-commerce brands, we help UK businesses ship faster and cheaper without compromising on engineering quality or GDPR compliance.",
    whyChooseUs: [
      "GDPR-aware engineering and data handling by default",
      "5–6 hours of daily GMT overlap for live collaboration",
      "Transparent GBP pricing, UK-style monthly invoicing",
      "Senior engineers fluent in UK business English",
      "Experience across UK fintech, healthtech, and e-commerce",
    ],
    industries: ["Fintech", "Healthtech & NHS", "E-commerce", "PropTech", "EdTech", "Media", "Logistics", "Hospitality"],
    faqs: [
      { question: "Is Golax India GDPR compliant for UK clients?", answer: "Yes. We build GDPR-aware architectures by default — data minimization, EU/UK data residency on request, encryption at rest and in transit, DPA (Data Processing Agreement) signing, and audit-friendly logging. We're experienced supporting UK clients in regulated industries." },
      { question: "Do you bill UK clients in GBP?", answer: "Yes, we bill in GBP on monthly cycles, with VAT handling clearly noted on each invoice. Bank transfers, Wise, and card payment are all accepted." },
      { question: "What's the typical cost of an MVP for a UK startup?", answer: "Marketing websites start at around £2,800. SaaS MVPs typically range from £12,000–£50,000. Dedicated full-time engineers are billed at £20–£35/hour depending on seniority." },
      { question: "How do you collaborate with UK clients across time zones?", answer: "Our engineers maintain 5–6 hours of daily overlap with UK GMT/BST hours. Daily async updates, 2–3 live calls per week, and a dedicated PM during UK business hours are standard." },
      { question: "Have you worked with UK enterprises before?", answer: "Yes — we've delivered projects for UK SMEs and enterprise teams across fintech, healthtech, retail, and SaaS. References available on request after a discovery call." },
    ],
    seoContent: buildSEOContent({
      country: "the United Kingdom",
      region: "Europe",
      currency: "GBP",
      currencySymbol: "£",
      timezoneOverlap: "5–6 hours",
      majorCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
      hourlyRateUSD: { min: 20, max: 35 },
      webStartUSD: 2800,
      appStartUSD: 12000,
    }),
  },
  {
    country: "Canada",
    slug: "canada",
    countryCode: "CA",
    region: "North America",
    flag: "🇨🇦",
    currency: "CAD",
    currencySymbol: "C$",
    timezoneOverlap: "4–5 hours",
    majorCities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Mississauga", "Winnipeg"],
    description: "Offshore web & software development company for Canadian businesses. Hire React, Next.js, Flutter & SaaS developers from India — PIPEDA-aware, CAD billing.",
    heroTagline: "Offshore Web & Software Development Partner for Canadian Businesses",
    about: "Golax India is an offshore IT partner for Canadian startups, SMEs, and enterprises from Toronto to Vancouver. We help Canadian businesses build modern websites, SaaS products, and mobile apps while cutting engineering costs by 40–60% compared to local Canadian hiring.",
    whyChooseUs: [
      "PIPEDA-aware data handling and privacy practices",
      "4–5 hours of overlap with EST/PST Canadian business hours",
      "Transparent CAD billing, monthly invoicing",
      "Bilingual-friendly project management (English / French on request)",
      "Senior engineers experienced with Canadian SaaS and e-commerce",
    ],
    industries: ["SaaS", "Fintech", "CleanTech", "Healthcare", "E-commerce", "EdTech", "Real Estate", "Logistics"],
    faqs: [
      { question: "Do you work with Canadian startups and SMEs?", answer: "Yes — most of our Canadian engagements are with seed/Series-A startups and growing SMEs across Toronto, Vancouver, Montreal, and Calgary. We support both English and French-speaking teams." },
      { question: "How do you handle Canadian privacy laws like PIPEDA?", answer: "We build privacy-aware architectures by default, sign DPAs, and can host on Canadian AWS/GCP regions for clients with data residency requirements. We're familiar with PIPEDA and provincial privacy obligations." },
      { question: "What is the cost of hiring an offshore developer for a Canadian business?", answer: "Senior full-stack engineers are billed at C$30–C$55/hour through Golax India, versus C$120–C$200/hour for equivalent talent in Canada. Fixed-scope projects start around C$4,000 for marketing websites." },
      { question: "Do you bill Canadian clients in CAD?", answer: "Yes, we bill in CAD on monthly cycles, with clear breakdowns. Payment via bank transfer, Wise, or credit card." },
      { question: "How long does it take to ship an MVP for a Canadian startup?", answer: "Most MVPs ship in 8–14 weeks from kickoff, depending on scope and integrations." },
    ],
    seoContent: buildSEOContent({
      country: "Canada",
      region: "North America",
      currency: "CAD",
      currencySymbol: "C$",
      timezoneOverlap: "4–5 hours",
      majorCities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
      hourlyRateUSD: { min: 30, max: 55 },
      webStartUSD: 4000,
      appStartUSD: 18000,
    }),
  },
  {
    country: "Australia",
    slug: "australia",
    countryCode: "AU",
    region: "APAC",
    flag: "🇦🇺",
    currency: "AUD",
    currencySymbol: "A$",
    timezoneOverlap: "5–6 hours",
    majorCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Hobart"],
    description: "Offshore web & software development company for Australian businesses. React, Flutter, SaaS & e-commerce engineers from India with AEST overlap and AUD billing.",
    heroTagline: "Offshore Web & Software Development Partner for Australian Businesses",
    about: "Golax India helps Australian startups, agencies, and enterprises ship modern web, mobile, and SaaS products at offshore costs without offshore risk. We've delivered for clients across Sydney, Melbourne, Brisbane, and Perth, with strong working overlap during AEST business hours.",
    whyChooseUs: [
      "5–6 hours of daily AEST overlap — real-time collaboration",
      "Transparent AUD billing and monthly invoicing",
      "Senior engineers who write idiomatic, well-tested code",
      "Australian e-commerce and SaaS delivery experience",
      "Comfortable working with Aussie design and brand standards",
    ],
    industries: ["E-commerce", "Mining & Resources", "Fintech", "Healthtech", "EdTech", "Tourism", "Agritech", "Logistics"],
    faqs: [
      { question: "How do timezones work with Australian clients?", answer: "We maintain 5–6 hours of daily overlap with AEST. Most Australian clients get morning stand-ups and afternoon hand-offs aligned to their working day." },
      { question: "Do you bill Australian clients in AUD?", answer: "Yes — AUD invoicing on monthly cycles, with GST handling discussed up front depending on your registration." },
      { question: "What's the cost of an offshore developer for an Australian business?", answer: "Senior full-stack engineers are billed at A$35–A$60/hour through Golax India, compared with A$130–A$220/hour for equivalent talent in Australia. Marketing websites start at A$4,500, MVPs from A$18,000." },
      { question: "Do you work with Australian e-commerce brands?", answer: "Yes — Shopify Plus, BigCommerce, and headless commerce builds are a significant part of our Australian client base." },
      { question: "Can you support Australian businesses with ongoing maintenance?", answer: "Yes. We offer monthly care plans for websites and SaaS products, covering hosting, monitoring, security patches, content updates, and CRO sprints." },
    ],
    seoContent: buildSEOContent({
      country: "Australia",
      region: "APAC",
      currency: "AUD",
      currencySymbol: "A$",
      timezoneOverlap: "5–6 hours",
      majorCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
      hourlyRateUSD: { min: 35, max: 60 },
      webStartUSD: 4500,
      appStartUSD: 18000,
    }),
  },
  {
    country: "United Arab Emirates",
    slug: "united-arab-emirates",
    countryCode: "AE",
    region: "Middle East",
    flag: "🇦🇪",
    currency: "AED",
    currencySymbol: "AED",
    timezoneOverlap: "8+ hours",
    majorCities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Al Ain", "Umm Al Quwain"],
    description: "Web development & software company for UAE businesses — Dubai, Abu Dhabi, Sharjah. React, Flutter, e-commerce, SaaS and digital marketing with AED billing.",
    heroTagline: "Web & Software Development Partner for UAE Businesses",
    about: "Golax India is a trusted IT services partner for businesses across the UAE — Dubai, Abu Dhabi, Sharjah, and beyond. We help UAE startups, SMEs, family businesses, and government-linked entities build modern websites, mobile apps, SaaS platforms, and digital marketing engines that perform at international standards.",
    whyChooseUs: [
      "8+ hours of daily overlap with UAE business hours",
      "Bilingual project management (English + Arabic on request)",
      "Experience with UAE e-commerce, real estate, and fintech",
      "AED-friendly billing with transparent monthly invoices",
      "Senior engineers familiar with VAT, ZATCA, and local compliance",
    ],
    industries: ["E-commerce", "Real Estate", "Fintech", "Hospitality & Tourism", "Healthcare", "Logistics", "Government", "Education"],
    faqs: [
      { question: "Do you build websites and apps for businesses in Dubai and Abu Dhabi?", answer: "Yes — we serve businesses across all seven emirates with web development, mobile apps, software, and digital marketing services. Dubai and Abu Dhabi are our largest UAE markets." },
      { question: "Can you build bilingual Arabic + English websites and apps?", answer: "Yes. We build fully RTL-supported, bilingual Arabic + English websites and apps with proper typography, layout mirroring, and translation workflows." },
      { question: "Do you support UAE VAT and e-invoicing requirements?", answer: "Yes — our custom ERP, accounting, and e-commerce builds support UAE VAT (5%) configuration and e-invoicing where applicable." },
      { question: "What is the cost of a website or app in the UAE?", answer: "Marketing websites start at around AED 13,000. E-commerce stores from AED 35,000. Mobile apps from AED 60,000. Dedicated developers from AED 12,000/month per engineer." },
      { question: "Do you provide ongoing support and maintenance for UAE businesses?", answer: "Yes — monthly care plans for websites, apps, and SaaS products are available, billed in AED." },
    ],
    seoContent: buildSEOContent({
      country: "the UAE",
      region: "the Middle East",
      currency: "AED",
      currencySymbol: "AED ",
      timezoneOverlap: "8+ hours",
      majorCities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
      hourlyRateUSD: { min: 90, max: 165 },
      webStartUSD: 13000,
      appStartUSD: 60000,
    }),
  },
  {
    country: "Saudi Arabia",
    slug: "saudi-arabia",
    countryCode: "SA",
    region: "Middle East",
    flag: "🇸🇦",
    currency: "SAR",
    currencySymbol: "SAR",
    timezoneOverlap: "9+ hours",
    majorCities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Tabuk", "Abha"],
    description: "Web & software development company for Saudi Arabia businesses — Riyadh, Jeddah, Dammam. Vision 2030 ready, ZATCA-aware, bilingual Arabic + English builds.",
    heroTagline: "Web & Software Development Partner for Saudi Arabia Businesses",
    about: "Golax India supports Saudi Arabian businesses with offshore web development, mobile apps, custom software, and digital marketing aligned to Vision 2030 digital transformation goals. We've shipped bilingual Arabic + English platforms for Saudi e-commerce, fintech, hospitality, and government-linked entities.",
    whyChooseUs: [
      "Vision 2030 aligned digital transformation expertise",
      "ZATCA e-invoicing and Saudi VAT compliance built in",
      "Bilingual Arabic + English / RTL design proficiency",
      "9+ hours of daily AST overlap with Saudi teams",
      "Experience with Saudi government and enterprise procurement",
    ],
    industries: ["E-commerce", "Fintech", "Government", "Hospitality", "Healthcare", "Education", "Logistics", "Real Estate"],
    faqs: [
      { question: "Do you build ZATCA-compliant e-invoicing solutions?", answer: "Yes. Our ERP, POS, and accounting builds for Saudi clients are ZATCA Phase 2 compliant, supporting QR codes, cryptographic stamps, and FATOORA portal integration." },
      { question: "Can you build fully Arabic, RTL-supported websites and apps?", answer: "Yes. We build true RTL-first Arabic interfaces with native typography, bidirectional layouts, and proper UX patterns for Saudi users." },
      { question: "Do you work with Saudi government and semi-government entities?", answer: "Yes — we have experience with Saudi government and semi-government technology projects, including procurement, RFP, and security review processes." },
      { question: "How do timezones work with Saudi clients?", answer: "We maintain 9+ hours of daily overlap with AST. Most Saudi clients get full working-day collaboration through Slack, Teams, and live calls." },
      { question: "What is the cost of web and app development for Saudi businesses?", answer: "Marketing websites from SAR 13,000. E-commerce from SAR 35,000. Mobile apps from SAR 60,000. Dedicated developers from SAR 13,000/month per engineer." },
    ],
    seoContent: buildSEOContent({
      country: "Saudi Arabia",
      region: "the Middle East",
      currency: "SAR",
      currencySymbol: "SAR ",
      timezoneOverlap: "9+ hours",
      majorCities: ["Riyadh", "Jeddah", "Dammam", "Mecca"],
      hourlyRateUSD: { min: 90, max: 165 },
      webStartUSD: 13000,
      appStartUSD: 60000,
    }),
  },
  {
    country: "Singapore",
    slug: "singapore",
    countryCode: "SG",
    region: "APAC",
    flag: "🇸🇬",
    currency: "SGD",
    currencySymbol: "S$",
    timezoneOverlap: "Full-day overlap",
    majorCities: ["Singapore"],
    description: "Offshore web & software development company for Singapore businesses. React, Flutter, SaaS, fintech engineers from India with full SGT overlap and SGD billing.",
    heroTagline: "Offshore Web & Software Development Partner for Singapore Businesses",
    about: "Golax India serves Singapore startups, scale-ups, and MNCs as an offshore engineering partner with full SGT timezone overlap. We help Singapore fintech, SaaS, e-commerce, and logistics companies ship faster while keeping engineering costs predictable and SGD-denominated.",
    whyChooseUs: [
      "Full-day overlap with SGT business hours",
      "MAS-aware practices for Singapore fintech clients",
      "Senior engineers comfortable with Singapore enterprise standards",
      "SGD billing, monthly invoicing, clean GST handling",
      "Proven delivery for Singapore SaaS and e-commerce scale-ups",
    ],
    industries: ["Fintech", "SaaS", "Logistics", "E-commerce", "PropTech", "Healthtech", "Maritime", "Hospitality"],
    faqs: [
      { question: "Do you work with Singapore fintech and MAS-regulated companies?", answer: "Yes. We're familiar with MAS guidelines (TRM, Cyber Hygiene Notice) and build accordingly — strong identity, encryption, audit logging, segregated environments, and DPA signing." },
      { question: "How do timezones work with Singapore clients?", answer: "We have effectively full-day overlap with SGT. Our team works during your business hours, with daily stand-ups and live calls on demand." },
      { question: "Do you bill Singapore clients in SGD?", answer: "Yes, SGD invoicing on monthly cycles with clean GST handling and digital invoicing." },
      { question: "What is the cost of an offshore developer for Singapore businesses?", answer: "Senior full-stack engineers are billed at S$32–S$55/hour through Golax India, versus S$120–S$200/hour locally. MVPs from S$18,000, marketing websites from S$4,500." },
      { question: "Do you work with Singapore enterprises and MNCs?", answer: "Yes — we serve SMEs, scale-ups, and divisions of MNCs based in Singapore." },
    ],
    seoContent: buildSEOContent({
      country: "Singapore",
      region: "APAC",
      currency: "SGD",
      currencySymbol: "S$",
      timezoneOverlap: "full-day",
      majorCities: ["Singapore"],
      hourlyRateUSD: { min: 32, max: 55 },
      webStartUSD: 4500,
      appStartUSD: 18000,
    }),
  },
  {
    country: "Germany",
    slug: "germany",
    countryCode: "DE",
    region: "Europe",
    flag: "🇩🇪",
    currency: "EUR",
    currencySymbol: "€",
    timezoneOverlap: "5–6 hours",
    majorCities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf", "Leipzig"],
    description: "Offshore software & web development company for German businesses. GDPR-first React, Next.js, SaaS & B2B portal development from India, EUR billing.",
    heroTagline: "Offshore Web & Software Development Partner for German Businesses",
    about: "Golax India is an offshore engineering partner for German Mittelstand, startups, and SaaS companies. From Berlin scale-ups to Munich industrial firms, we build GDPR-first websites, B2B portals, mobile apps, and custom software with the quality and rigor German clients expect.",
    whyChooseUs: [
      "GDPR-first engineering by default, DPAs ready to sign",
      "5–6 hours of CET overlap for live collaboration",
      "Senior engineers used to German B2B quality standards",
      "EUR billing, monthly invoicing, clean documentation",
      "Experience with German SaaS, industrial, and fintech clients",
    ],
    industries: ["SaaS", "Industrial / Mittelstand", "Fintech", "Automotive", "E-commerce", "Healthcare", "Logistics", "EdTech"],
    faqs: [
      { question: "Are you GDPR compliant for German clients?", answer: "Yes. We build GDPR-first systems — data minimization, EU data residency, encryption at rest/in transit, DPA signing, and audit-friendly logging. We're familiar with the expectations of German compliance teams." },
      { question: "Do you bill German clients in EUR?", answer: "Yes — EUR invoicing on monthly cycles, with VAT handling per your registration. Bank transfer and SEPA accepted." },
      { question: "How do you handle the documentation quality German clients expect?", answer: "Every project ships with architecture docs, API docs, deployment runbooks, and onboarding guides. We're used to working with German clients who prioritize maintainability and handover quality." },
      { question: "What is the cost of an offshore developer for German businesses?", answer: "Senior full-stack engineers are billed at €22–€40/hour through Golax India, versus €90–€150/hour for equivalent talent in Germany. Marketing websites from €3,200, MVPs from €13,000." },
      { question: "Do you work with German Mittelstand companies?", answer: "Yes — Mittelstand and family-owned industrial businesses are a strong part of our German client base for digitization projects." },
    ],
    seoContent: buildSEOContent({
      country: "Germany",
      region: "Europe",
      currency: "EUR",
      currencySymbol: "€",
      timezoneOverlap: "5–6 hours",
      majorCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
      hourlyRateUSD: { min: 22, max: 40 },
      webStartUSD: 3200,
      appStartUSD: 13000,
    }),
  },
  {
    country: "New Zealand",
    slug: "new-zealand",
    countryCode: "NZ",
    region: "APAC",
    flag: "🇳🇿",
    currency: "NZD",
    currencySymbol: "NZ$",
    timezoneOverlap: "4–5 hours",
    majorCities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Dunedin", "Palmerston North", "Queenstown"],
    description: "Offshore web & software development company for New Zealand businesses. React, Flutter, SaaS & e-commerce engineers from India with NZST overlap and NZD billing.",
    heroTagline: "Offshore Web & Software Development Partner for New Zealand Businesses",
    about: "Golax India is a trusted offshore IT partner for New Zealand startups, agencies, and SMEs. We help Kiwi businesses build modern websites, mobile apps, and SaaS products at offshore costs without compromising on engineering quality or communication.",
    whyChooseUs: [
      "4–5 hours of overlap with NZST business hours",
      "NZD invoicing on clean monthly cycles",
      "Senior engineers comfortable with Kiwi communication style",
      "Experience with NZ e-commerce, tourism, and SaaS",
      "Aussie/Kiwi-friendly working culture and reporting",
    ],
    industries: ["E-commerce", "Tourism", "SaaS", "Agritech", "Logistics", "Healthtech", "EdTech", "Real Estate"],
    faqs: [
      { question: "Do you work with NZ small businesses and agencies?", answer: "Yes — small businesses, agencies, and SaaS startups make up the majority of our NZ engagements. We white-label for agencies too." },
      { question: "What is the cost of offshore development for NZ businesses?", answer: "Senior engineers at NZ$38–NZ$65/hour, versus NZ$130–NZ$220 locally. Marketing websites from NZ$5,000, MVPs from NZ$20,000." },
      { question: "How does the timezone work with New Zealand?", answer: "We maintain 4–5 hours of overlap with NZST. Daily stand-ups and live calls fit comfortably into NZ business hours." },
      { question: "Do you bill in NZD?", answer: "Yes — NZD invoicing with clear GST handling per your registration." },
      { question: "Do you offer white-label services for NZ web agencies?", answer: "Yes — many of our NZ clients are web/digital agencies who white-label our engineering capacity." },
    ],
    seoContent: buildSEOContent({
      country: "New Zealand",
      region: "APAC",
      currency: "NZD",
      currencySymbol: "NZ$",
      timezoneOverlap: "4–5 hours",
      majorCities: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
      hourlyRateUSD: { min: 38, max: 65 },
      webStartUSD: 5000,
      appStartUSD: 20000,
    }),
  },
  {
    country: "Qatar",
    slug: "qatar",
    countryCode: "QA",
    region: "Middle East",
    flag: "🇶🇦",
    currency: "QAR",
    currencySymbol: "QAR",
    timezoneOverlap: "8+ hours",
    majorCities: ["Doha", "Al Wakrah", "Al Khor", "Al Rayyan", "Umm Salal", "Lusail", "Mesaieed", "Dukhan"],
    description: "Web & software development company for Qatar businesses — Doha, Lusail. Bilingual Arabic + English builds, mobile apps, e-commerce, with QAR billing.",
    heroTagline: "Web & Software Development Partner for Qatar Businesses",
    about: "Golax India supports Qatari businesses with offshore web development, mobile apps, custom software, and digital marketing. From Doha-based startups to enterprise clients in Lusail and beyond, we deliver bilingual Arabic + English platforms aligned with Qatar National Vision 2030.",
    whyChooseUs: [
      "Qatar National Vision 2030 aligned delivery",
      "Bilingual Arabic + English / RTL-first builds",
      "8+ hours of overlap with Qatar business hours",
      "QAR invoicing with transparent monthly cycles",
      "Experience with Qatari government and enterprise",
    ],
    industries: ["Government", "Oil & Gas", "Hospitality", "Real Estate", "Healthcare", "E-commerce", "Education", "Sports & Events"],
    faqs: [
      { question: "Do you build bilingual Arabic + English websites for Qatar?", answer: "Yes — true RTL Arabic interfaces with native typography and bidirectional layouts, alongside English. Used by Qatari government and enterprise clients." },
      { question: "Do you work with Qatari government and semi-government entities?", answer: "Yes — we have experience with Qatari government and enterprise procurement, RFPs, and security review processes." },
      { question: "What is the cost of web and app development in Qatar?", answer: "Marketing websites from QAR 13,000. E-commerce from QAR 35,000. Mobile apps from QAR 60,000. Dedicated developers from QAR 13,000/month per engineer." },
      { question: "Do you bill Qatari clients in QAR?", answer: "Yes — QAR invoicing on monthly cycles." },
      { question: "How do timezones work with Qatari clients?", answer: "We maintain 8+ hours of daily overlap with AST. Most of the Qatari workday is fully collaborative." },
    ],
    seoContent: buildSEOContent({
      country: "Qatar",
      region: "the Middle East",
      currency: "QAR",
      currencySymbol: "QAR ",
      timezoneOverlap: "8+ hours",
      majorCities: ["Doha", "Lusail", "Al Wakrah", "Al Rayyan"],
      hourlyRateUSD: { min: 90, max: 165 },
      webStartUSD: 13000,
      appStartUSD: 60000,
    }),
  },
];

export const getInternationalLocation = (slug: string): InternationalLocationData | undefined =>
  internationalLocations.find((loc) => loc.slug === slug);

// ---------- City helpers (per-country city landing pages) ----------

export const slugifyCity = (city: string): string =>
  city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics (Düsseldorf → dusseldorf)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export interface InternationalCityData {
  city: string;
  citySlug: string;
  country: InternationalLocationData;
}

export const getInternationalCity = (
  countrySlug: string,
  citySlug: string,
): InternationalCityData | null => {
  const country = getInternationalLocation(countrySlug);
  if (!country) return null;
  const city = country.majorCities.find((c) => slugifyCity(c) === citySlug);
  if (!city) return null;
  return { city, citySlug, country };
};

export const getAllInternationalCities = (): Array<{
  countrySlug: string;
  citySlug: string;
  city: string;
}> => {
  const out: Array<{ countrySlug: string; citySlug: string; city: string }> = [];
  for (const c of internationalLocations) {
    for (const city of c.majorCities) {
      out.push({ countrySlug: c.slug, citySlug: slugifyCity(city), city });
    }
  }
  return out;
};


// ---------- Service × Country page support ----------

export interface ServiceInternationalData {
  service: ServiceData;
  location: InternationalLocationData;
  seoContent: {
    introduction: string;
    whyServiceMatters: string;
    ourApproach: string;
    serviceDetails: string;
    industryApplications: string;
    pricingOverview: string;
    workingModel: string;
    technologyStack: string;
    processOverview: string;
    whyChooseUs: string;
    successStories: string;
    callToAction: string;
  };
  faqs: { question: string; answer: string }[];
}

const buildServiceCountryContent = (
  service: ServiceData,
  loc: InternationalLocationData,
): ServiceInternationalData["seoContent"] => {
  const { country, region, currency, currencySymbol, timezoneOverlap, majorCities, industries } = loc;
  const serviceName = service.title;
  const serviceKw = service.title.toLowerCase();
  const cityList = majorCities.slice(0, 4).join(", ");

  return {
    introduction: `Golax India is a trusted offshore ${serviceName} company for businesses in ${country}. From ${cityList} to every corner of ${country}, we help startups, SMEs, and enterprises ship high-quality ${serviceKw} projects at 40–60% lower cost than hiring locally — with senior engineers, transparent ${currency} pricing, and ${timezoneOverlap} of daily timezone overlap.

We're not a body-shop. Every ${serviceName} engagement for a ${country} client is led by a senior practitioner, supported by a dedicated project manager, and shipped against a clearly defined scope and quality bar. The outcome: faster delivery, predictable invoices, and code or campaigns that actually move your ${country} business forward.`,

    whyServiceMatters: `${serviceName} is one of the highest-leverage investments a ${country} business can make right now. Customers in ${country} expect fast, polished digital experiences — and competitors are investing accordingly. Falling behind on ${serviceKw} means losing leads, sales, and category share to companies that ship better digital products.

Outsourcing ${serviceKw} to India through Golax India gives ${country} businesses access to a deep, specialized talent pool that simply isn't available — or affordable — locally. You get senior engineers and growth specialists who have shipped similar projects dozens of times before, without the recruitment, payroll, and overhead burden of building the same team in ${country}.`,

    ourApproach: `Our approach to ${serviceName} for ${country} clients is built on three principles: senior ownership, transparent communication, and disciplined delivery. Every engagement starts with a discovery call to understand your ${country} business context — goals, customers, constraints, and success metrics.

From there, we propose a clearly scoped engagement (fixed-scope project, monthly retainer, or dedicated team), agree on milestones, and kick off within 5–7 business days. You get shared access to all tooling from day one — Jira/Linear, GitHub/GitLab, Figma, staging environments — plus a dedicated PM who works during your ${country} business hours.

Throughout delivery we run weekly demos, daily async updates, and senior code review on every pull request. There are no surprises and no quiet quality drops.`,

    serviceDetails: `Our ${serviceName} engagements for ${country} clients typically cover:

${service.features.map((f) => `• ${f}`).join("\n")}

Whether you need a single deliverable or an ongoing capability, we structure the work around your ${country} business outcomes — not just hours billed.`,

    industryApplications: `Across ${country} we've delivered ${serviceName} for clients in ${industries.slice(0, 5).join(", ")}, and more. A few examples of how ${serviceKw} typically shows up in each of these sectors:

${industries
  .slice(0, 6)
  .map((ind) => `• ${ind}: tailored ${serviceKw} solutions designed around ${ind.toLowerCase()} workflows, compliance needs, and customer expectations specific to ${country}.`)
  .join("\n")}

If your industry isn't listed, that's fine — we adapt quickly. A 30-minute discovery call is usually enough for us to confirm fit and propose an approach.`,

    pricingOverview: `Transparent ${currency} pricing for ${country} clients. Common engagement options for ${serviceName}:

• Fixed-scope projects — clear deliverables, fixed price, ideal for first engagements.
• Dedicated specialist / pod — monthly retainer for an exclusive senior practitioner.
• Time and materials — flexible billing with detailed weekly time logs.
• Outcome-based retainers — particularly common for marketing, SEO, and growth.

You'll get a written proposal in ${currency} within 48 hours of the discovery call, with no hidden fees and no minimum lock-ins beyond 30 days.`,

    workingModel: `Working across time zones with an offshore ${serviceName} partner can feel risky the first time. We've removed that risk by structuring engagements for transparency:

• Dedicated PM during your ${country} business hours.
• ${timezoneOverlap} of daily overlap with our team.
• Daily async updates via Slack/Teams plus 2–3 live calls per week.
• Shared access to all project tooling and environments.
• Senior review on every deliverable.
• Monthly executive summary for ${country} stakeholders.

Most of our ${country} clients say the experience feels more like an extended in-house team than a typical offshore vendor.`,

    technologyStack: `For ${serviceName} engagements in ${country} we work with proven, modern technologies:

${service.technologies.map((t) => `• ${t}`).join("\n")}

We pick the right stack for your ${country} business — long-term maintainability and hire-ability matter as much as short-term speed.`,

    processOverview: `Our ${serviceName} delivery process for ${country} clients:

1. Discovery call (free, 30–45 min).
2. Written proposal in ${currency} within 48 hours.
3. Contracting — MSA, NDA, IP assignment, DPA where relevant.
4. Kickoff within 5–7 business days.
5. Iterative delivery with weekly demos and async updates.
6. QA, UAT, and senior review before each release.
7. Production launch with monitoring and on-call coverage.
8. 60-day post-launch warranty and optional ongoing care plan.`,

    whyChooseUs: `${country} businesses choose Golax India for ${serviceName} because we combine senior talent, transparent ${currency} pricing, and a working model designed for offshore engagements that don't feel offshore. We've shipped for ${country} startups racing competitors, agencies white-labelling our capacity, and enterprises modernizing decades-old systems — and the common feedback is the same: predictable delivery, honest communication, and code or campaigns that actually perform.`,

    successStories: `Recent ${serviceName} outcomes for ${country} clients include:

• A ${country} ${industries[0].toLowerCase()} startup shipped their MVP in 9 weeks for ${currencySymbol}${(currency === "INR" ? 800000 : 22000).toLocaleString()}, vs a ${currencySymbol}${(currency === "INR" ? 4000000 : 110000).toLocaleString()} local quote.
• A ${country} ${industries[1].toLowerCase()} business grew organic traffic 280% in 6 months through our SEO and content engine.
• A ${region}-headquartered enterprise consolidated 3 legacy systems into one modern platform with our dedicated 8-person engineering pod.

We're happy to share more detailed references after a discovery call.`,

    callToAction: `Ready to scope your ${serviceName} project for ${country}? Book a free 30-minute discovery call and you'll get a written proposal in ${currency} within 48 hours — no obligation, no pressure. Whether you're hiring an offshore partner for the first time or already work with vendors and want a better experience, we'd love to be in your shortlist.`,
  };
};

const buildServiceCountryFAQs = (
  service: ServiceData,
  loc: InternationalLocationData,
): { question: string; answer: string }[] => {
  const { country, currency, currencySymbol, timezoneOverlap } = loc;
  const serviceName = service.title;
  return [
    {
      question: `Why outsource ${serviceName.toLowerCase()} from ${country} to Golax India?`,
      answer: `${country} businesses outsource ${serviceName.toLowerCase()} to Golax India for three reasons: 40–60% cost savings vs hiring locally in ${country}, access to senior engineering talent that's hard to hire locally, and ${timezoneOverlap} of daily overlap for real-time collaboration. All billed transparently in ${currency}.`,
    },
    {
      question: `How much does ${serviceName.toLowerCase()} cost for ${country} businesses?`,
      answer: `Pricing depends on scope, but typical ${country} engagements start from ${currencySymbol}3,000 for small fixed-scope projects and scale to retainer pods of ${currencySymbol}8,000–${currencySymbol}30,000 per month for a multi-person team. We provide a fixed written proposal within 48 hours of a discovery call.`,
    },
    {
      question: `How do you collaborate across time zones with ${country} clients?`,
      answer: `We maintain ${timezoneOverlap} of daily overlap with ${country} business hours. A dedicated PM works during your hours, with daily async updates and 2–3 live calls per week. Most ${country} clients say the working rhythm feels close to an in-house team.`,
    },
    {
      question: `Do you sign NDAs, MSAs, and IP-assignment agreements with ${country} clients?`,
      answer: `Yes — mutual NDA, MSA, IP assignment, and DPA (where applicable) are signed before any work starts. We're happy to work with your preferred ${country} legal templates.`,
    },
    {
      question: `How quickly can you start on a ${country} ${serviceName.toLowerCase()} project?`,
      answer: `For most ${country} engagements we kick off within 5–7 business days of contract signing — including a dedicated PM, senior lead, and shared tooling access.`,
    },
    {
      question: `Do you provide ongoing support after the ${serviceName.toLowerCase()} project launches?`,
      answer: `Yes — every project ships with a 60-day post-launch warranty, plus optional monthly care plans for ongoing maintenance, monitoring, and continuous improvement. Billed monthly in ${currency}.`,
    },
    {
      question: `Have you worked with ${country} businesses before?`,
      answer: `Yes — ${country} is one of our active markets. We've delivered ${serviceName.toLowerCase()} for ${country} startups, agencies (white-labelled), and enterprises. References available after a discovery call.`,
    },
  ];
};

export const getServiceInternationalData = (
  serviceSlug: string,
  countrySlug: string,
): ServiceInternationalData | null => {
  const service = serviceCatalog.find((s) => s.slug === serviceSlug);
  const location = getInternationalLocation(countrySlug);
  if (!service || !location) return null;
  return {
    service,
    location,
    seoContent: buildServiceCountryContent(service, location),
    faqs: buildServiceCountryFAQs(service, location),
  };
};
