"use client";

import Layout from "@/components/layout/Layout";
import LegalPageHero from "@/components/shared/LegalPageHero";
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <Layout>
      <LegalPageHero
        icon={FileText}
        badge="Legal Agreement"
        title="Terms of Service"
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
              className="bg-card border border-border rounded-2xl p-6 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-heading font-semibold text-foreground mb-2">Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using the services of Golax India IT Solutions ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Services Description
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>Golax India IT Solutions provides the following IT services:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Web Development & Design",
                    "Custom Software Development",
                    "Mobile Application Development",
                    "Digital Marketing & SEO",
                    "IT Consulting Services",
                    "Cloud Solutions & Hosting",
                    "E-commerce Development",
                    "UI/UX Design Services"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-muted/30 rounded-lg p-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  The specific scope, deliverables, and terms for each project will be outlined in a separate Service Agreement or Statement of Work (SOW) agreed upon by both parties.
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Client Responsibilities
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>As a client, you agree to:</p>
                <ul className="space-y-3">
                  {[
                    "Provide accurate and complete information necessary for the delivery of services",
                    "Respond to queries and provide feedback within reasonable timeframes",
                    "Ensure timely payment as per the agreed payment terms",
                    "Provide necessary access, credentials, and materials required for the project",
                    "Review and approve deliverables within the specified review periods",
                    "Obtain any necessary licenses, permissions, or consents for materials you provide",
                    "Designate a single point of contact for project communication"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-muted/30 rounded-lg p-4">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Payment Terms
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Project-Based Payments</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>An advance payment (typically 40-50%) is required before project commencement</li>
                    <li>Milestone payments as specified in the Service Agreement</li>
                    <li>Final payment upon project completion and before final delivery</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Retainer/Monthly Services</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Monthly payments are due on the 1st of each month</li>
                    <li>Payment must be received before work commences for that month</li>
                    <li>Unused hours do not roll over to the next month unless otherwise agreed</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Late Payments</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Invoices are due within 15 days of issue unless otherwise specified</li>
                    <li>Late payments may incur interest at 1.5% per month</li>
                    <li>Work may be suspended for overdue accounts exceeding 30 days</li>
                  </ul>
                </div>

                <p className="text-sm bg-card border border-border rounded-lg p-4">
                  All prices are in Indian Rupees (INR) unless otherwise specified. GST (18%) will be charged as applicable under Indian tax laws.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Intellectual Property Rights
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Client Materials</h3>
                  <p>You retain all rights to materials, content, and intellectual property you provide to us for use in your project.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Deliverables</h3>
                  <p>Upon full payment, you will own the rights to the custom work created specifically for your project (excluding pre-existing tools, frameworks, and third-party components).</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Company Tools & Frameworks</h3>
                  <p>We retain ownership of proprietary tools, methodologies, frameworks, and reusable code components developed prior to or during your project.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground mb-2">Portfolio Rights</h3>
                  <p>We reserve the right to showcase completed projects in our portfolio and marketing materials unless explicitly agreed otherwise in writing.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Project Timeline & Delivery
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Project timelines are estimates based on the agreed scope. We will make reasonable efforts to meet deadlines but are not liable for delays caused by:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Delayed client feedback or approvals",
                    "Changes in project scope or requirements",
                    "Technical issues with third-party services",
                    "Force majeure events",
                    "Delayed provision of content/materials",
                    "Issues beyond our reasonable control"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 bg-muted/30 rounded-lg p-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                Warranty & Support
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Bug-Fix Warranty</h3>
                  <p className="mb-4">We provide a 30-day bug-fix warranty from the date of project delivery, covering:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Defects in code that prevent functionality as per agreed specifications</li>
                    <li>Issues arising from our development (not third-party services or client modifications)</li>
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Ongoing Support</h3>
                  <p>Extended support and maintenance services are available under separate Annual Maintenance Contracts (AMC) or support agreements.</p>
                </div>
                
                <p className="text-sm bg-muted/50 rounded-lg p-4">
                  <strong>Exclusions:</strong> Warranty does not cover issues arising from client modifications, third-party integrations, hosting environment changes, or requests for new features/enhancements.
                </p>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">7</span>
                Limitation of Liability
              </h2>
              
              <div className="space-y-4 text-muted-foreground bg-muted/30 rounded-xl p-6">
                <p>
                  To the maximum extent permitted by law, Golax India IT Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Loss of data or data corruption</li>
                  <li>Business interruption</li>
                  <li>Reputational damage</li>
                </ul>
                <p className="mt-4 font-semibold text-foreground">
                  Our total liability shall not exceed the total fees paid by you for the specific service giving rise to the claim.
                </p>
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">8</span>
                Confidentiality
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Business strategies and plans</li>
                  <li>Technical specifications and source code</li>
                  <li>Client data and user information</li>
                  <li>Financial information</li>
                  <li>Trade secrets and proprietary methodologies</li>
                </ul>
                <p>
                  Confidentiality obligations survive the termination of services for a period of 3 years.
                </p>
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">9</span>
                Termination
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">By Client</h3>
                    <p className="text-sm">You may terminate services with 30 days written notice. Payment is due for all work completed up to the termination date.</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">By Company</h3>
                    <p className="text-sm">We may terminate for breach of terms, non-payment exceeding 45 days, or other material violations with 14 days notice.</p>
                  </div>
                </div>
                <p>
                  Upon termination, you will receive all completed work (for which payment has been received), and we will return any client materials provided.
                </p>
              </div>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">10</span>
                Governing Law & Dispute Resolution
              </h2>
              
              <div className="space-y-4 text-muted-foreground bg-muted/30 rounded-xl p-6">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.
                </p>
                <p>
                  Before initiating legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation and, if necessary, mediation.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:legal@golaxindiapvtltd.in" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <FileText className="h-5 w-5" />
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
              <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>
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
