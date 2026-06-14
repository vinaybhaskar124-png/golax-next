"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  Search,
  TrendingUp,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import Layout from "@/components/layout/Layout";
import { seoBlogPosts } from "@/data/seoBlogPosts";

const featuredPost = {
  slug: "website-development-cost-india-2026",
  title: "Website Development Cost in India (2026): Complete Pricing Guide",
  excerpt:
    "How much does a website cost in India? Honest 2026 pricing for business websites, e-commerce, and custom web apps — with factors that affect your final quote.",
  author: "Vikash Kumar",
  date: "June 10, 2026",
  readTime: "10 min read",
  category: "Web Development",
  image: "from-blue-600 to-cyan-500",
};

const blogPosts = [
  ...seoBlogPosts.map(({ slug, title, excerpt, author, date, readTime, category, color }) => ({
    slug,
    title,
    excerpt,
    author,
    date,
    readTime,
    category,
    color,
  })),
  {
    slug: "seo-tips-local-businesses-patna",
    title: "10 SEO Tips for Local Businesses in Patna to Rank Higher on Google",
    excerpt: "Learn practical SEO strategies that can help your Patna-based business appear in local search results and attract more customers. From Google My Business optimization to local link building.",
    author: "Meera Patel",
    date: "January 28, 2026",
    readTime: "6 min read",
    category: "SEO",
    color: "from-green-500 to-teal-500",
  },
  {
    slug: "mobile-app-development-trends-2026",
    title: "Mobile App Development Trends to Watch in 2026",
    excerpt: "Stay ahead of the curve with these emerging mobile app development trends including AI integration, cross-platform frameworks, and 5G optimization.",
    author: "Rajesh Singh",
    date: "January 25, 2026",
    readTime: "5 min read",
    category: "Mobile Development",
    color: "from-orange-500 to-red-500",
  },
  {
    slug: "choosing-right-technology-stack",
    title: "How to Choose the Right Technology Stack for Your Startup",
    excerpt: "A comprehensive guide to selecting the best technologies for your startup based on your budget, timeline, scalability requirements, and team expertise.",
    author: "Anita Sharma",
    date: "January 22, 2026",
    readTime: "7 min read",
    category: "Technology",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "ecommerce-website-essentials",
    title: "Essential Features Every E-commerce Website Needs in 2026",
    excerpt: "Build a successful online store with these must-have features including AI-powered recommendations, seamless checkout, and mobile-first design principles.",
    author: "Vikash Kumar",
    date: "January 18, 2026",
    readTime: "6 min read",
    category: "E-commerce",
    color: "from-cyan-500 to-blue-500",
  },
  {
    slug: "cloud-migration-guide-smes",
    title: "Cloud Migration Guide for Small and Medium Businesses",
    excerpt: "A step-by-step guide to migrating your business infrastructure to the cloud, including cost considerations, security best practices, and vendor selection.",
    author: "Rajesh Singh",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Cloud Computing",
    color: "from-indigo-500 to-purple-500",
  },
  {
    slug: "social-media-marketing-bihar",
    title: "Social Media Marketing Strategies for Bihar-Based Businesses",
    excerpt: "Effective social media strategies tailored for businesses operating in Bihar and Eastern India's unique market, including platform selection and content localization.",
    author: "Meera Patel",
    date: "January 12, 2026",
    readTime: "5 min read",
    category: "Digital Marketing",
    color: "from-pink-500 to-rose-500",
  },
  {
    slug: "website-security-best-practices",
    title: "Website Security Best Practices for Small Businesses",
    excerpt: "Protect your business website from cyber threats with these essential security measures including SSL, backups, and vulnerability scanning.",
    author: "Anita Sharma",
    date: "January 8, 2026",
    readTime: "7 min read",
    category: "Security",
    color: "from-red-500 to-orange-500",
  },
  {
    slug: "react-vs-angular-2026",
    title: "React vs Angular: Which Framework to Choose in 2026?",
    excerpt: "An in-depth comparison of React and Angular for web development, covering performance, ecosystem, learning curve, and use cases.",
    author: "Rajesh Singh",
    date: "January 5, 2026",
    readTime: "9 min read",
    category: "Technology",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "ai-transforming-business-operations",
    title: "How AI is Transforming Business Operations in India",
    excerpt: "Explore practical AI applications for Indian businesses, from customer service chatbots to predictive analytics and process automation.",
    author: "Vikash Kumar",
    date: "January 2, 2026",
    readTime: "8 min read",
    category: "AI & Technology",
    color: "from-violet-500 to-purple-500",
  },
  {
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications: A Complete Guide",
    excerpt: "Learn architecture patterns and best practices for building web applications that can handle millions of users without performance issues.",
    author: "Anita Sharma",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "Web Development",
    color: "from-emerald-500 to-teal-500",
  },
  {
    slug: "government-schemes-digital-india",
    title: "Government Schemes for Digital India: Opportunities for Bihar Businesses",
    excerpt: "Explore government initiatives and subsidies available for businesses looking to digitize operations, including MSME schemes and Digital India programs.",
    author: "Meera Patel",
    date: "December 24, 2025",
    readTime: "6 min read",
    category: "Business",
    color: "from-amber-500 to-orange-500",
  },
  {
    slug: "ux-design-principles-conversion",
    title: "UX Design Principles That Boost Conversion Rates",
    excerpt: "Master the art of user experience design with practical tips that help convert visitors into customers, from intuitive navigation to persuasive CTAs.",
    author: "Vikash Kumar",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Design",
    color: "from-fuchsia-500 to-pink-500",
  },
];

const categories = [
  "All",
  "Web Development",
  "Business",
  "Offshore Development",
  "Mobile Development",
  "SEO",
  "Digital Transformation",
  "Technology",
  "E-commerce",
  "Cloud Computing",
  "Digital Marketing",
  "Security",
  "AI & Technology",
  "Design",
];

const trendingTopics = [
  "React.js Development",
  "SEO Optimization",
  "Mobile Apps",
  "Cloud Computing",
  "Digital Marketing",
  "AI Integration",
  "E-commerce",
  "Website Security",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden lg:overflow-visible">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 items-start">
              <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Our Blog
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Insights & Ideas from{" "}
                <span className="text-accent">Golax India</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Stay ahead with the latest technology trends, expert tips, and actionable insights from our team of IT professionals in Patna.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </motion.div>
          </div>
              <div className="w-full">
                <HeroLeadForm context="Blog" variant="light" />
              </div>
            </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="flex items-center gap-2 text-sm font-medium text-foreground whitespace-nowrap">
              <TrendingUp className="h-4 w-4 text-accent" />
              Trending:
            </span>
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSearchQuery(topic)}
                className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Featured Article</h2>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="premium-card overflow-hidden group border-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`h-64 lg:min-h-[380px] bg-gradient-to-br ${featuredPost.image} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2),transparent_55%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <BookOpen className="h-16 w-16 text-white/20 relative z-10" />
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-semibold border border-white/25">
                        Featured · {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-card">
                    <h2 className="font-heading text-2xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-muted-foreground mb-8">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center text-primary font-semibold text-lg">
                      Read Full Article <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Category Filter */}
          <div className="mb-10">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    category === selectedCategory
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-foreground hover:bg-primary/5 border border-border/80 hover:border-primary/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="premium-card overflow-hidden group h-full flex flex-col border-0">
                    <div className={`h-44 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.2),transparent_50%)]" />
                      <BookOpen className="absolute bottom-4 right-4 h-10 w-10 text-white/20" />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <span className="inline-block w-fit px-2.5 py-1 bg-primary/10 text-primary rounded-md text-[11px] font-semibold uppercase tracking-wide mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/60">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {post.author.split(" ")[0]}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Stay Updated
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Get the latest tech insights, industry news, and expert tips delivered to your inbox every week. Join 5,000+ subscribers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-14 px-5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="hero" size="lg" className="h-14 px-8">
                  Subscribe
                </Button>
              </form>
              <p className="text-primary-foreground/60 text-sm mt-4">
                No spam, unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Articles Summary */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Published Articles</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-heading font-bold text-accent mb-2">12</div>
              <p className="text-muted-foreground">Categories Covered</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-heading font-bold text-success mb-2">5K+</div>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
