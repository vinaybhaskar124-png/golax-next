"use client";

import Layout from "@/components/layout/Layout";
import LegalPageHero from "@/components/shared/LegalPageHero";
import { motion } from "framer-motion";
import { AlertTriangle, Info, ExternalLink, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <Layout>
      <LegalPageHero
        icon={AlertTriangle}
        badge="Legal Notice"
        title="Disclaimer"
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
              className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-12"
            >
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-heading font-semibold text-foreground mb-2">Important Notice</h2>
                  <p className="text-muted-foreground">
                    The information contained on this website is for general information purposes only. By using this website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, please do not use our website.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* General Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                General Information Disclaimer
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The information provided by Golax India IT Solutions ("we," "our," or "us") on our website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "The accuracy of the information",
                    "The completeness of the information",
                    "The reliability of the information",
                    "The availability of the information",
                    "The suitability for any purpose",
                    "The non-infringement of third-party rights"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 bg-muted/30 rounded-lg p-3">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Professional Advice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                No Professional Advice
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4 text-muted-foreground">
                <p>
                  The content on this website is not intended to be a substitute for professional advice. The information provided, including but not limited to technical advice, business advice, and pricing information, is for informational purposes only.
                </p>
                <div className="bg-muted/30 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-2">Before making any decisions, you should:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">1</span>
                      </span>
                      Consult with qualified professionals relevant to your specific situation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">2</span>
                      </span>
                      Conduct your own research and due diligence
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">3</span>
                      </span>
                      Seek legal, financial, or technical advice as needed
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* External Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                External Links Disclaimer
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4 bg-muted/30 rounded-xl p-6">
                  <ExternalLink className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-4">
                      Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>
                    <p>
                      The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We have no control over the nature, content, and availability of those sites.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Limitation of Liability
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4 text-muted-foreground">
                <p>
                  In no event shall Golax India IT Solutions, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Loss of profits or revenue",
                    "Loss of data or information",
                    "Loss of business opportunities",
                    "Business interruption",
                    "Personal injury or property damage",
                    "Any other intangible losses"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 bg-muted/30 rounded-lg p-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                </p>
              </div>
            </motion.div>

            {/* Website Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Website Availability
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive to keep our website running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control, including but not limited to:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Server Issues", desc: "Hardware failures or maintenance" },
                    { title: "Network Problems", desc: "Internet connectivity issues" },
                    { title: "Third-Party Services", desc: "External service disruptions" },
                    { title: "Cyber Attacks", desc: "Security threats or breaches" },
                    { title: "Natural Disasters", desc: "Force majeure events" },
                    { title: "Software Updates", desc: "System upgrades or patches" }
                  ].map((item, index) => (
                    <div key={index} className="bg-muted/30 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content Accuracy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                Content Accuracy
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While we make every effort to ensure that the information on this website is accurate and up-to-date, we cannot guarantee that all information is complete, accurate, or current. The content may contain:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 border-l-4 border-primary pl-4 py-2">
                    <span><strong>Typographical errors:</strong> Unintentional mistakes in text</span>
                  </li>
                  <li className="flex items-start gap-3 border-l-4 border-primary pl-4 py-2">
                    <span><strong>Outdated information:</strong> Content that may no longer be current</span>
                  </li>
                  <li className="flex items-start gap-3 border-l-4 border-primary pl-4 py-2">
                    <span><strong>Technical inaccuracies:</strong> Errors in technical descriptions</span>
                  </li>
                  <li className="flex items-start gap-3 border-l-4 border-primary pl-4 py-2">
                    <span><strong>Pricing changes:</strong> Prices and offers subject to change without notice</span>
                  </li>
                </ul>
                <p>
                  We reserve the right to make changes to the content at any time without prior notice.
                </p>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">7</span>
                Testimonials & Case Studies
              </h2>
              
              <div className="bg-muted/30 rounded-xl p-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-4">
                      Testimonials and case studies displayed on our website are personal experiences of our clients. They are individual results and may not be typical. The results described are not guaranteed, as outcomes vary based on individual circumstances, project scope, and other factors.
                    </p>
                    <p>
                      We do not claim that these testimonials are representative of all clients, nor do we guarantee that you will achieve similar results.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">8</span>
                Intellectual Property
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Golax India IT Solutions or its content suppliers and is protected by Indian and international copyright laws.
                </p>
                <p>
                  The compilation of all content on this site is the exclusive property of Golax India IT Solutions. Unauthorized use of this content may violate copyright, trademark, and other laws.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">9</span>
                Governing Law
              </h2>
              
              <div className="bg-card border border-border rounded-xl p-6 text-muted-foreground">
                <p>
                  This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes relating to this disclaimer shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Questions About This Disclaimer?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions or concerns about this Disclaimer, please contact us:
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:legal@golaxindiapvtltd.in" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <AlertTriangle className="h-5 w-5" />
                  legal@golaxindiapvtltd.in
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                  Contact Us
                </Link>
              </div>
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
              <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
