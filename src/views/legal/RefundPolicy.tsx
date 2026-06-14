"use client";

import Layout from "@/components/layout/Layout";
import LegalPageHero from "@/components/shared/LegalPageHero";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, XCircle, Clock, FileText, Mail } from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
  const refundEligible = [
    "Project not started after payment and no work has been initiated",
    "Services not delivered as per the agreed specifications in the contract",
    "Significant delays caused by us that breach the agreed timeline by more than 60 days",
    "Technical issues on our end that prevent project delivery",
    "Duplicate payments made in error"
  ];

  const refundNotEligible = [
    "Change of mind after project work has commenced",
    "Delays caused by client's failure to provide materials, feedback, or approvals",
    "Third-party service failures beyond our control",
    "Scope changes requested by client during the project",
    "Completed work that meets the agreed specifications",
    "Monthly retainer fees for services already rendered",
    "Customization requests after project approval"
  ];

  return (
    <Layout>
      <LegalPageHero
        icon={RefreshCw}
        badge="Transparent Policies"
        title="Refund Policy"
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
              <p className="text-muted-foreground">
                At Golax India IT Solutions, we are committed to delivering high-quality IT services that meet your expectations. We understand that circumstances may arise where you might need to request a refund. This Refund Policy outlines our terms and conditions regarding refunds for our services.
              </p>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Our Commitment to You</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: CheckCircle, title: "Quality Assurance", desc: "We deliver work that meets agreed specifications" },
                  { icon: Clock, title: "Timely Delivery", desc: "We respect deadlines and communicate delays" },
                  { icon: RefreshCw, title: "Fair Refunds", desc: "Transparent and reasonable refund process" }
                ].map((item, index) => (
                  <div key={index} className="bg-muted/30 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Refund Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Refund Eligibility</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Eligible */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-foreground">Eligible for Refund</h3>
                  </div>
                  <ul className="space-y-3">
                    {refundEligible.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-5 h-5 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Eligible */}
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-foreground">Not Eligible for Refund</h3>
                  </div>
                  <ul className="space-y-3">
                    {refundNotEligible.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-5 h-5 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <XCircle className="h-3 w-3 text-red-600 dark:text-red-400" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Refund Amounts by Service Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Refund Amounts by Service Type</h2>
              
              <div className="space-y-4">
                {/* Web Development */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Web Development & Software Projects</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 font-semibold">Stage</th>
                          <th className="text-left p-3 font-semibold">Refund Amount</th>
                          <th className="text-left p-3 font-semibold">Conditions</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="p-3">Before project start</td>
                          <td className="p-3 text-green-600 font-semibold">100% of advance</td>
                          <td className="p-3">No work initiated</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">Design phase</td>
                          <td className="p-3 text-amber-600 font-semibold">75% of advance</td>
                          <td className="p-3">Design work not approved</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">Development phase</td>
                          <td className="p-3 text-amber-600 font-semibold">50% of advance</td>
                          <td className="p-3">Prorated based on work completed</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">Testing phase</td>
                          <td className="p-3 text-red-600 font-semibold">25% of advance</td>
                          <td className="p-3">Most work completed</td>
                        </tr>
                        <tr>
                          <td className="p-3">After delivery</td>
                          <td className="p-3 text-red-600 font-semibold">No refund</td>
                          <td className="p-3">Project delivered as per specs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Digital Marketing */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Digital Marketing Services</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Digital marketing services are billed monthly and are generally non-refundable for the period in which work has been performed.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>SEO Services:</strong> Monthly fees are non-refundable. Setup fees refundable within 7 days if no work started.</li>
                      <li><strong>PPC/Advertising:</strong> Management fees non-refundable. Ad spend managed separately.</li>
                      <li><strong>Social Media Marketing:</strong> Non-refundable for the current billing period.</li>
                      <li><strong>Content Marketing:</strong> Refundable only for undelivered content pieces.</li>
                    </ul>
                  </div>
                </div>

                {/* Maintenance & Support */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Maintenance & Support Contracts</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Annual Maintenance Contracts (AMC) and support plans:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Before activation:</strong> 100% refund</li>
                      <li><strong>Within first month:</strong> Prorated refund minus setup costs</li>
                      <li><strong>After first month:</strong> Prorated refund for unused months with 30-day notice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Refund Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Refund Request Process</h2>
              
              <div className="space-y-6">
                <div className="relative">
                  {[
                    { step: 1, title: "Submit Request", desc: "Email your refund request to refunds@golaxindia.com with your project details and reason for refund." },
                    { step: 2, title: "Review", desc: "Our team will review your request within 5 business days and assess eligibility." },
                    { step: 3, title: "Response", desc: "We will respond with our decision and, if approved, the refund amount." },
                    { step: 4, title: "Processing", desc: "Approved refunds are processed within 10-15 business days to the original payment method." },
                    { step: 5, title: "Confirmation", desc: "You will receive an email confirmation once the refund has been processed." }
                  ].map((item, index, arr) => (
                    <div key={index} className="flex gap-4 mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        {index < arr.length - 1 && (
                          <div className="w-0.5 h-full bg-primary/20 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Required Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Information Required for Refund Request</h2>
              
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground mb-4">Please include the following in your refund request email:</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Full name and company name",
                        "Project name/reference number",
                        "Invoice number(s)",
                        "Payment date and amount",
                        "Payment method used",
                        "Detailed reason for refund request",
                        "Supporting documentation (if any)",
                        "Preferred refund method"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Refund Payment Methods</h2>
              
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Original Payment Method</h3>
                  <p className="text-sm">Refunds are typically processed to the original payment method used. This includes bank transfers, UPI, credit/debit cards, and other digital payment methods.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Alternative Methods</h3>
                  <p className="text-sm">If the original method is unavailable, we may process refunds via bank transfer (NEFT/RTGS/IMPS) to your registered bank account.</p>
                </div>
              </div>
            </motion.div>

            {/* Special Circumstances */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Special Circumstances</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Partial Refunds</h3>
                  <p>In cases where partial work has been completed, we may offer a partial refund based on the percentage of work delivered and accepted.</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Service Credits</h3>
                  <p>Instead of a monetary refund, we may offer service credits that can be applied to future projects or services.</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Dispute Resolution</h3>
                  <p>If you disagree with our refund decision, you may escalate the matter to our management team for further review. All decisions by the management team are final.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Need to Request a Refund?</h2>
              <p className="text-muted-foreground mb-6">
                Please contact our refunds team with your request and all relevant details:
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:refunds@golaxindiapvtltd.in" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail className="h-5 w-5" />
                  refunds@golaxindiapvtltd.in
                </a>
                <a href="tel:+919470024607" className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                  Call: +91 94700 24607
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Our support team is available Monday to Saturday, 10:00 AM to 6:00 PM IST.
              </p>
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
              <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
