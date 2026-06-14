import { patnaAreas, biharCities } from "./locations";
import { indiaCities } from "./indiaCities";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  features: string[];
  technologies: string[];
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    icon: "Globe",
    description: "Custom websites and web applications built with modern technologies",
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions (Shopify, WooCommerce, Custom)",
      "Progressive Web Apps (PWA)",
      "Content Management Systems (WordPress, Custom CMS)",
      "Web Portal Development",
      "API Development & Integration",
      "Responsive Web Design",
      "Landing Page Development"
    ],
    technologies: ["React", "Next.js", "Node.js", "PHP", "WordPress", "Shopify", "Tailwind CSS", "TypeScript"]
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software Development",
    icon: "Code",
    description: "Custom software solutions to automate and optimize business processes",
    features: [
      "Custom Enterprise Software",
      "ERP & CRM Solutions",
      "Business Process Automation",
      "Legacy System Modernization",
      "Database Design & Management",
      "Software Integration Services",
      "Inventory Management Systems",
      "Billing & Accounting Software"
    ],
    technologies: ["Java", "Python", ".NET", "Node.js", "PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: "Smartphone",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "Cross-Platform Apps (React Native, Flutter)",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "App Maintenance & Support",
      "Push Notification Integration",
      "Mobile Payment Integration"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "iOS", "Android"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortTitle: "Digital Marketing",
    icon: "TrendingUp",
    description: "Data-driven marketing strategies to grow your online presence",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google My Business Optimization",
      "Online Reputation Management",
      "Conversion Rate Optimization"
    ],
    technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Google Analytics", "Mailchimp", "Ahrefs", "Canva"]
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    icon: "Search",
    description: "Professional search engine optimization to rank higher on Google",
    features: [
      "Local SEO Optimization",
      "On-Page SEO",
      "Off-Page SEO & Link Building",
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "Content Optimization",
      "Google My Business Management",
      "Monthly SEO Reporting"
    ],
    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "Google Analytics"]
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Cloud Services",
    shortTitle: "IT Consulting",
    icon: "Cloud",
    description: "Expert guidance on technology strategy and cloud infrastructure",
    features: [
      "Cloud Migration (AWS, Azure, GCP)",
      "IT Infrastructure Assessment",
      "Technology Roadmap Planning",
      "Cybersecurity Consulting",
      "DevOps Implementation",
      "Managed IT Services",
      "IT Support & Maintenance",
      "Data Backup & Recovery"
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  }
];

export interface ServiceLocationData {
  service: ServiceData;
  location: {
    city: string;
    slug: string;
    state: string;
    isPatnaArea?: boolean;
  };
  seoContent: {
    introduction: string;
    whyServiceMatters: string;
    ourApproach: string;
    serviceDetails: string;
    industryApplications: string;
    localExpertise: string;
    processOverview: string;
    whyChooseUs: string;
    technologyStack: string;
    pricingOverview: string;
    successStories: string;
    callToAction: string;
  };
  faqs: { question: string; answer: string }[];
}

// Generate comprehensive SEO content for service-location pages (1500-1800 words)
export const generateServiceLocationContent = (
  service: ServiceData,
  city: string,
  state: string,
  isPatnaArea: boolean = false
): ServiceLocationData['seoContent'] => {
  const locationString = isPatnaArea ? `${city}, Patna` : `${city}, ${state}`;
  const fullLocation = isPatnaArea ? `${city}, Patna, Bihar` : `${city}, ${state}, India`;
  const isHomeRegion = isPatnaArea || state === "Bihar";
  
  const serviceKeyword = service.title.toLowerCase();
  const serviceName = service.title;
  
  return {
    introduction: `In the rapidly evolving digital landscape of ${state}, businesses in ${city} are increasingly recognizing the need for professional ${serviceKeyword} services. As the leading provider of ${serviceName} in ${locationString}, Golax India has been instrumental in helping local businesses establish a powerful digital presence and achieve their technology goals.

Our ${serviceKeyword} services in ${city} are designed to meet the unique needs of businesses in this region. Whether you're a startup looking to launch your first digital product, an established SME seeking to modernize your technology infrastructure, or an enterprise requiring complex solutions, our team of experienced professionals delivers results that exceed expectations.

What makes our ${serviceName} services in ${fullLocation} stand out is our deep understanding of both cutting-edge technology and local business dynamics. We don't just implement solutions; we become strategic partners invested in your long-term success. Our portfolio includes successful projects across various industries in ${city}, demonstrating our versatility and expertise in delivering impactful ${serviceKeyword} solutions.`,

    whyServiceMatters: `The importance of professional ${serviceKeyword} for businesses in ${city} cannot be overstated. In today's hyper-connected world, your digital presence often forms the first impression potential customers have of your business. Here's why investing in quality ${serviceName} services in ${locationString} is crucial for your business success:

First, consider the competitive advantage. Businesses in ${city} that invest in professional ${serviceKeyword} services consistently outperform their competitors. Whether it's through improved online visibility, streamlined operations, or enhanced customer experiences, technology gives you the edge needed to succeed in today's market.

Second, think about customer expectations. Modern consumers in ${state} and across India expect seamless digital experiences. From mobile-friendly interfaces to fast-loading applications, professional ${serviceName} ensures you meet and exceed these expectations, building trust and loyalty among your customer base.

Third, operational efficiency is transformed through proper ${serviceKeyword} implementation. The right technology solutions can automate repetitive tasks, reduce errors, improve communication, and free your team to focus on high-value activities that drive growth.

Fourth, data-driven decision making becomes possible with professional ${serviceName} services. Our solutions in ${city} include analytics and reporting capabilities that provide actionable insights, helping you make informed business decisions based on real data rather than guesswork.

Finally, scalability ensures your technology grows with your business. Our ${serviceKeyword} solutions in ${locationString} are built with future growth in mind, ensuring you don't outgrow your systems as your business expands.`,

    ourApproach: `At Golax India, our approach to ${serviceName} in ${city} is built on a foundation of understanding, innovation, and partnership. We believe that successful technology projects start with a deep understanding of your business goals, challenges, and vision.

Our discovery process begins with comprehensive consultations where we learn about your business, industry, target audience, and specific requirements. For clients in ${locationString}, we often conduct in-person discovery sessions, allowing us to gain nuanced insights that remote consultations might miss.

Following discovery, our strategy and planning phase develops a detailed roadmap for your ${serviceKeyword} project. This includes defining objectives, setting milestones, allocating resources, and establishing clear communication channels. Our ${city} clients appreciate the transparency and clarity this phase brings to their projects.

Our development methodology follows agile principles, ensuring flexibility, continuous improvement, and regular client involvement. We deliver work in iterative cycles, allowing you to see progress, provide feedback, and make adjustments throughout the project rather than waiting until the end.

Quality assurance is embedded throughout our ${serviceName} process. Every deliverable undergoes rigorous testing and review before presentation to clients. Our QA team in ${fullLocation} ensures that solutions meet the highest standards of functionality, performance, security, and user experience.

Deployment and launch are handled with meticulous attention to detail. We manage the transition carefully to minimize disruption to your business operations. Post-launch, we provide comprehensive training and documentation to ensure your team can effectively use and manage the delivered solutions.`,

    serviceDetails: `Our ${serviceName} services in ${city} encompass a comprehensive range of offerings designed to meet diverse business needs. Here's a detailed look at what we deliver:

${service.features.slice(0, 4).map(feature => `${feature}: We provide expert ${feature.toLowerCase()} services tailored for businesses in ${locationString}. Our experienced team ensures every aspect is optimized for performance, user experience, and business objectives.`).join('\n\n')}

Beyond these core offerings, we also provide specialized ${serviceKeyword} services that address unique requirements of businesses in ${city}. Our team stays updated with the latest trends and technologies to ensure you receive cutting-edge solutions.

Our ${serviceName} portfolio across ${state} and India includes projects at various scales and complexities. From quick turnaround projects for startups to comprehensive enterprise solutions, we have the capability and experience to deliver excellence regardless of project size.

What sets our ${serviceKeyword} services apart is our commitment to excellence in every detail. We don't just meet specifications; we look for opportunities to add value, improve user experience, and enhance business outcomes through thoughtful implementation.`,

    industryApplications: `Our ${serviceName} expertise in ${city} extends across multiple industries, each with its unique requirements and challenges. Here's how we serve key sectors in ${locationString}:

Healthcare & Medical: We develop ${serviceKeyword} solutions for hospitals, clinics, and healthcare providers in ${city} that improve patient care, streamline operations, and ensure compliance with healthcare regulations. Our solutions include patient portals, appointment systems, and health information management.

Education & Training: Educational institutions in ${locationString} benefit from our ${serviceName} services through learning management systems, student portals, online examination platforms, and educational apps that enhance the learning experience.

Retail & E-commerce: Retail businesses in ${city} leverage our ${serviceKeyword} expertise to create engaging online shopping experiences, manage inventory efficiently, and reach customers across ${state} and India through powerful e-commerce solutions.

Manufacturing & Industrial: Industrial businesses in ${fullLocation} use our ${serviceName} solutions for production management, quality control, supply chain optimization, and industrial IoT implementations that improve operational efficiency.

Agriculture & Agribusiness: We provide specialized ${serviceKeyword} solutions for farming, agricultural trading, supply chain management, and farmer engagement platforms tailored for businesses in ${city} and ${state}.

Financial Services: Banks, NBFCs, and financial service providers in ${locationString} trust our ${serviceName} expertise for secure, compliant solutions including mobile banking, lending platforms, and financial management systems.`,

    localExpertise: isHomeRegion
      ? `Choosing a ${serviceName} partner with deep ${locationString} knowledge offers distinct advantages. Our roots in Bihar translate into tangible benefits for clients in ${city}:

Understanding of local market dynamics is fundamental to our approach. We know the business landscape in ${city}, understand local consumer behavior, and are familiar with the specific challenges and opportunities in ${state}. This knowledge informs every solution we create.

Face-to-face collaboration is invaluable for complex ${serviceKeyword} projects. We meet with ${city} clients in person for detailed discussions, presentations, training sessions, and ongoing support when needed.

Quick response times differentiate us from distant competitors. When you have an urgent requirement, our team can respond rapidly through remote support or on-site visits in ${state}.

Cultural and linguistic alignment facilitates smoother communication. Our team understands Hindi and English, making it easier to communicate complex ${serviceKeyword} concepts without barriers.

When you choose Golax India for ${serviceName} in ${city}, you're working with an India-based team invested in your long-term success across ${state} and beyond.`
      : `Golax India delivers professional ${serviceName} to businesses in ${city}, ${state} — as an India-based team with nationwide and international delivery capability:

We understand ${state}'s business landscape, key industries, and how companies in ${city} compete online and offline. Every ${serviceKeyword} project is scoped with your market context in mind.

Remote-first delivery means faster kickoff and lower overhead. ${city} clients get dedicated project managers, video standups, shared dashboards, and scheduled on-site visits for major milestones when required.

Our ${serviceName} team serves ${city} with the same senior engineers who deliver projects for clients in Delhi, Mumbai, Bangalore, and offshore markets — consistent quality without metro-agency pricing.

Timezone-friendly communication, Hindi and English support, and transparent ₹ pricing make Golax India a practical ${serviceKeyword} partner for ${locationString} businesses ready to scale digitally.`,

    processOverview: `Our ${serviceName} delivery process in ${city} is designed for transparency, efficiency, and successful outcomes. Here's what you can expect when working with us:

Initial Consultation: We begin with a comprehensive discussion of your ${serviceKeyword} requirements, business goals, and vision. For ${city} clients, we often conduct this in person to ensure thorough understanding.

Requirement Analysis: Our team documents detailed requirements, creates project specifications, and develops a clear understanding of scope, timeline, and deliverables.

Proposal & Agreement: We provide a detailed proposal including approach, timeline, deliverables, and pricing. Our ${locationString} clients appreciate our transparent, no-hidden-cost quotations.

Design & Planning: Before development begins, we create designs, wireframes, or prototypes depending on the project type. This ensures visual and functional alignment before significant development investment.

Development & Implementation: Our ${city}-based development team builds your solution using agile methodology with regular progress updates, demos, and feedback opportunities.

Testing & Quality Assurance: Comprehensive testing ensures everything works perfectly before delivery. We test functionality, performance, security, and user experience thoroughly.

Deployment & Launch: We handle deployment professionally, ensuring smooth transition and minimal business disruption. Our team is available to address any immediate post-launch requirements.

Training & Documentation: Your team receives comprehensive training on using and managing the delivered ${serviceName} solution. We provide documentation for ongoing reference.

Ongoing Support: Our relationship continues after launch with various support options to keep your solution updated, secure, and performing optimally.`,

    whyChooseUs: `When it comes to ${serviceName} in ${city}, Golax India stands apart for several compelling reasons that make us the preferred choice for businesses across ${state}:

Proven Track Record: Our portfolio of successful ${serviceKeyword} projects in ${locationString} demonstrates our capability and reliability. We've helped businesses of all sizes achieve their technology goals.

Expert Team: Our ${serviceName} professionals combine technical expertise with business acumen. They don't just code; they understand business requirements and deliver solutions that drive real results.

Client-Centric Approach: Every engagement starts with understanding your unique needs. We customize our ${serviceKeyword} solutions to fit your specific requirements rather than forcing generic templates.

Quality Commitment: We never compromise on quality. Every ${serviceName} project receives the same attention to detail and commitment to excellence, regardless of budget or size.

Transparent Communication: You'll always know what's happening with your project. Regular updates, clear documentation, and accessible team members ensure you're never in the dark.

Competitive Pricing: We offer professional-grade ${serviceKeyword} services at prices that make sense for businesses in ${city}. Our operational efficiencies allow us to provide excellent value without sacrificing quality.

Long-term Partnership: We aim to be your ongoing technology partner, not just a one-time vendor. Our support continues well beyond project completion.`,

    technologyStack: `Our ${serviceName} team in ${city} works with industry-leading technologies to deliver robust, scalable, and modern solutions. Our technology choices are guided by project requirements, ensuring the best fit for each unique situation.

${service.technologies.map(tech => `${tech}: We leverage ${tech} for ${serviceKeyword} projects where its capabilities provide optimal results. Our team's proficiency ensures efficient implementation and best practices.`).join('\n\n')}

Beyond individual technologies, we follow modern architectural patterns and best practices that ensure our ${serviceName} solutions are maintainable, scalable, and future-ready. Our ${city} clients benefit from solutions built on solid technical foundations.

We continuously invest in learning and adopting new technologies that can benefit our clients. Our team participates in training, conferences, and certification programs to stay at the forefront of ${serviceKeyword} developments.`,

    pricingOverview: `Our ${serviceName} pricing in ${city} is designed to be competitive, transparent, and accessible to businesses of all sizes. We believe professional ${serviceKeyword} services should be available to every business in ${locationString}, not just those with enterprise budgets.

We offer multiple engagement models to suit different needs and preferences. Project-based pricing provides a fixed cost for defined scope, ideal for businesses that want budget certainty. Retainer arrangements offer ongoing ${serviceName} support at predictable monthly costs. Hourly engagements provide flexibility for evolving requirements.

Factors affecting ${serviceKeyword} pricing include project complexity, scope of features, timeline requirements, and ongoing support needs. We provide detailed quotations that break down costs transparently, so you know exactly what you're paying for.

Our initial consultation and quotation are completely free. We'll discuss your requirements, understand your budget constraints, and propose solutions that deliver maximum value within your means. Many of our ${city} clients are surprised by how affordable professional ${serviceName} can be.`,

    successStories: `Our ${serviceName} work in ${city} has delivered measurable results for businesses across various industries. While maintaining client confidentiality, here are examples of the impact we've created:

A retail business in ${locationString} saw 150% increase in online sales after we implemented our ${serviceKeyword} solution, transforming their digital presence and customer experience.

An educational institution in ${city} streamlined operations and improved student engagement through our ${serviceName} implementation, reducing administrative burden by 60%.

A healthcare provider in ${state} enhanced patient care and operational efficiency with our ${serviceKeyword} solution, cutting appointment scheduling time by 70%.

A manufacturing company in ${fullLocation} improved production tracking and quality control through our ${serviceName} expertise, reducing defects by 40%.

These success stories represent the tangible business impact we deliver through professional ${serviceKeyword} services. Our goal is always to create solutions that drive real results, not just check technical boxes.`,

    callToAction: `Ready to transform your business with professional ${serviceName} in ${city}? Golax India is here to help you navigate the digital landscape and achieve your technology goals.

Contact us today for a free consultation where we'll discuss your ${serviceKeyword} requirements, understand your challenges, and propose solutions tailored to your needs. Our ${locationString} team is ready to become your trusted technology partner.

Whether you're starting from scratch or looking to enhance existing systems, our ${serviceName} expertise in ${fullLocation} can help you succeed. Don't let technology limitations hold your business back when professional solutions are within reach.

Call us now or fill out our contact form to schedule your free consultation. Let's discuss how ${serviceKeyword} can drive growth, efficiency, and success for your business in ${city}. Your digital transformation journey starts with a single conversation – reach out today!`
  };
};

// Generate FAQs for service-location pages
export const generateServiceLocationFAQs = (
  service: ServiceData,
  city: string,
  state: string,
  isPatnaArea: boolean = false
): { question: string; answer: string }[] => {
  const locationString = isPatnaArea ? `${city}, Patna` : `${city}, ${state}`;
  const serviceName = service.title;
  const serviceSlug = service.slug.replace(/-/g, ' ');

  return [
    {
      question: `What is the cost of ${serviceName} in ${locationString}?`,
      answer: `${serviceName} costs in ${locationString} vary based on project scope and complexity. Basic projects start from ₹25,000, while comprehensive solutions can range from ₹1,00,000 to ₹5,00,000+. Contact us for a free, detailed quote tailored to your specific requirements.`
    },
    {
      question: `Which is the best ${serviceSlug} company in ${locationString}?`,
      answer: `Golax India is recognized as a leading ${serviceName} provider in ${locationString}, with a proven track record of successful projects across various industries. Our combination of technical expertise, local market knowledge, and client-focused approach makes us the preferred choice for businesses in ${city}.`
    },
    {
      question: `How long does ${serviceName} take in ${city}?`,
      answer: `Timeline for ${serviceName} projects in ${city} depends on complexity. Simple projects may take 2-4 weeks, medium-complexity projects 4-8 weeks, and comprehensive solutions 2-4 months. We provide detailed timelines during our initial consultation based on your specific requirements.`
    },
    {
      question: `Do you provide ongoing support after ${serviceName} project completion?`,
      answer: `Yes! We offer comprehensive post-project support for all ${serviceName} clients in ${locationString}. This includes maintenance, updates, technical support, and enhancements. We offer various support packages to suit different needs and budgets.`
    },
    {
      question: `Can you provide ${serviceName} for my specific industry in ${city}?`,
      answer: `Absolutely! Our ${serviceName} expertise in ${city} spans multiple industries including healthcare, education, retail, manufacturing, agriculture, and financial services. We understand industry-specific requirements and deliver tailored solutions that address your unique challenges.`
    },
    {
      question: `What technologies do you use for ${serviceName} in ${locationString}?`,
      answer: `We use industry-leading technologies including ${service.technologies.slice(0, 4).join(', ')} and more. Our technology choice is based on your specific requirements to ensure optimal results and long-term value for your ${serviceName} investment.`
    },
    {
      question: `Do you offer free consultation for ${serviceName} projects?`,
      answer: `Yes! We provide free initial consultations for all potential ${serviceName} clients in ${locationString}. During this session, we understand your requirements, discuss solutions, and provide preliminary estimates with no obligation.`
    },
    {
      question: `Why choose Golax India for ${serviceName} in ${locationString}?`,
      answer: `Golax India combines India-based senior talent with transparent pricing and proven delivery across ${state} and internationally. You get dedicated project management, clear timelines, and post-launch support — whether you're in ${city} or hiring us remotely from anywhere in India.`
    }
  ];
};

// Get all locations for service-location pages
export const getAllLocations = () => {
  const patnaLocations = patnaAreas.map(area => ({
    city: area.city,
    slug: area.slug,
    state: area.state,
    isPatnaArea: true
  }));
  
  const biharLocations = biharCities.map(city => ({
    city: city.city,
    slug: city.slug,
    state: city.state,
    isPatnaArea: false
  }));
  
  const indiaLocations = indiaCities.map((city) => ({
    city: city.city,
    slug: city.slug,
    state: city.state,
    isPatnaArea: false,
  }));

  const biharSlugs = new Set(biharCities.map((c) => c.slug));
  const indiaOnly = indiaLocations.filter((l) => !biharSlugs.has(l.slug));

  return [...indiaOnly, ...patnaLocations, ...biharLocations];
};

// Generate all service-location combinations
export const getServiceLocationData = (
  serviceSlug: string,
  locationSlug: string
): ServiceLocationData | null => {
  const service = services.find(s => s.slug === serviceSlug);
  if (!service) return null;
  
  const allLocations = getAllLocations();
  const location = allLocations.find(l => l.slug === locationSlug);
  if (!location) return null;
  
  return {
    service,
    location,
    seoContent: generateServiceLocationContent(service, location.city, location.state, location.isPatnaArea),
    faqs: generateServiceLocationFAQs(service, location.city, location.state, location.isPatnaArea)
  };
};
