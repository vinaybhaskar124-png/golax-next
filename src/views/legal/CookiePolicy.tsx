"use client";

import Layout from "@/components/layout/Layout";
import LegalPageHero from "@/components/shared/LegalPageHero";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Target, Shield } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      name: "Essential Cookies",
      description: "Required for the website to function properly",
      examples: ["Session management", "Security features", "Load balancing", "User preferences"],
      duration: "Session to 1 year",
      canDisable: false
    },
    {
      icon: BarChart3,
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Page views tracking", "User journey analysis", "Performance metrics", "Error tracking"],
      duration: "Up to 2 years",
      canDisable: true
    },
    {
      icon: Target,
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      examples: ["Ad targeting", "Campaign measurement", "Retargeting", "Social media integration"],
      duration: "Up to 2 years",
      canDisable: true
    },
    {
      icon: Settings,
      name: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: ["Language preferences", "Region settings", "Personalized content", "Chat support"],
      duration: "Up to 1 year",
      canDisable: true
    }
  ];

  return (
    <Layout>
      <LegalPageHero
        icon={Cookie}
        badge="Cookie Information"
        title="Cookie Policy"
        subtitle="Last Updated: January 21, 2026"
      />

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains how Golax India IT Solutions ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website. By continuing to browse our website, you consent to our use of cookies as described in this policy.
              </p>
            </motion.div>

            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">What Are Cookies?</h2>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-2">First-Party Cookies</h3>
                    <p className="text-sm text-muted-foreground">Set by the website you are visiting (our website)</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                    <p className="text-sm text-muted-foreground">Set by external services we use (analytics, advertising)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Types of Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Types of Cookies We Use</h2>
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <cookie.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{cookie.name}</h3>
                          <span className={`text-xs px-3 py-1 rounded-full ${
                            cookie.canDisable 
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" 
                              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          }`}>
                            {cookie.canDisable ? "Optional" : "Required"}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">{cookie.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">Examples:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {cookie.examples.map((example, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">Duration:</h4>
                            <p className="text-sm text-muted-foreground">{cookie.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specific Cookies Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground border-b border-border">Cookie Name</th>
                      <th className="text-left p-4 font-semibold text-foreground border-b border-border">Provider</th>
                      <th className="text-left p-4 font-semibold text-foreground border-b border-border">Purpose</th>
                      <th className="text-left p-4 font-semibold text-foreground border-b border-border">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-4">_ga</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">Distinguishes unique users</td>
                      <td className="p-4">2 years</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/20">
                      <td className="p-4">_gid</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">Distinguishes unique users</td>
                      <td className="p-4">24 hours</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">_gat</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">Throttles request rate</td>
                      <td className="p-4">1 minute</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/20">
                      <td className="p-4">_fbp</td>
                      <td className="p-4">Facebook</td>
                      <td className="p-4">Tracks visits across websites</td>
                      <td className="p-4">3 months</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">session_id</td>
                      <td className="p-4">Golax India</td>
                      <td className="p-4">Session management</td>
                      <td className="p-4">Session</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/20">
                      <td className="p-4">cookie_consent</td>
                      <td className="p-4">Golax India</td>
                      <td className="p-4">Stores cookie preferences</td>
                      <td className="p-4">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* How to Manage Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">How to Manage Cookies</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie preferences through their settings.
                </p>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Browser Settings</h3>
                  <p className="mb-4">You can set your browser to:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">1</span>
                      </span>
                      <span>Block all cookies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">2</span>
                      </span>
                      <span>Accept only first-party cookies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">3</span>
                      </span>
                      <span>Notify you when a cookie is being set</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">4</span>
                      </span>
                      <span>Delete cookies at the end of each browsing session</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Browser-Specific Instructions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                      { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/cookies" },
                      { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies" },
                      { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/cookies" }
                    ].map((browser, index) => (
                      <a
                        key={index}
                        href={browser.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        → {browser.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">⚠️ Important Note</h3>
                  <p className="text-amber-800 dark:text-amber-200">
                    Disabling certain cookies may affect the functionality of our website. Some features may not work as intended if you block essential cookies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the following third-party services that may place cookies on your device:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Google Analytics", purpose: "Website analytics and performance tracking" },
                    { name: "Google Ads", purpose: "Advertising and remarketing" },
                    { name: "Facebook Pixel", purpose: "Social media advertising" },
                    { name: "LinkedIn Insights", purpose: "B2B marketing analytics" },
                    { name: "Hotjar", purpose: "User behavior analysis" },
                    { name: "Intercom", purpose: "Customer support chat" }
                  ].map((service, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                      <p className="text-sm">{service.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <a href="mailto:privacy@golaxindiapvtltd.in" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                <Cookie className="h-5 w-5" />
                privacy@golaxindiapvtltd.in
              </a>
            </motion.div>

            {/* Related Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
