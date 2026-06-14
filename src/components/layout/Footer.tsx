import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Globe2,
  Shield,
} from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "Digital Marketing & SEO", href: "/services/digital-marketing" },
  { name: "IT Consulting", href: "/services/it-consulting" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "All Locations", href: "/locations" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const topLocations = [
  { name: "Delhi", href: "/locations/delhi" },
  { name: "Mumbai", href: "/locations/mumbai" },
  { name: "Bangalore", href: "/locations/bangalore" },
  { name: "Hyderabad", href: "/locations/hyderabad" },
  { name: "United States", href: "/locations/global/united-states" },
  { name: "United Kingdom", href: "/locations/global/united-kingdom" },
];

const popularServices = [
  { name: "Web Development in Delhi", href: "/services/web-development/delhi" },
  { name: "Mobile Apps in Mumbai", href: "/services/mobile-app-development/mumbai" },
  { name: "SEO in Bangalore", href: "/services/digital-marketing/bangalore" },
  { name: "Offshore Dev for USA", href: "/services/web-development/global/united-states" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-of-service" },
  { name: "Cookie Policy", href: "/legal/cookie-policy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
  { name: "Refund Policy", href: "/legal/refund-policy" },
  { name: "Sitemap", href: "/sitemap" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 sm:mb-6">
      <h3 className="font-heading font-semibold text-base sm:text-lg text-primary-foreground tracking-tight">
        {children}
      </h3>
      <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-primary-foreground/75 hover:text-accent transition-colors duration-200"
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
    </Link>
  );
}

export default function Footer({ ctaVisible = true }: { ctaVisible?: boolean }) {
  return (
    <footer
      className={`relative overflow-hidden text-primary-foreground lg:pb-0 transition-[padding] duration-300 ${
        ctaVisible ? "pb-[4.5rem]" : "pb-6"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,91%,14%)] via-primary to-[hsl(217,91%,20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(199_89%_48%_/_0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(217_91%_40%_/_0.2),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative z-10">
        {/* Trust strip */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-primary-foreground/70">
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5 text-accent" />
                India-Based · 12+ Countries
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-accent" />
                ISO Certified Processes
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>150+ Projects · 50+ Clients</span>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-4 space-y-6">
              <Link
                href="/"
                className="inline-flex items-center bg-white rounded-2xl px-5 py-3.5 shadow-xl shadow-black/20 ring-1 ring-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                aria-label="Golax India Pvt Ltd – Home"
              >
                <Image src={logo} alt="Golax India Pvt Ltd logo" width={240} height={64} className="h-11 md:h-14 w-auto" />
              </Link>
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
                India-based IT company — web development, software, mobile apps & digital marketing for businesses across{" "}
                <strong className="text-primary-foreground font-medium">25+ Indian cities</strong> and{" "}
                <strong className="text-primary-foreground font-medium">12+ countries</strong>. HQ: Patna, Bihar.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Follow Golax India on ${label}`}
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-2">
              <FooterHeading>Our Services</FooterHeading>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <FooterLink href={service.href}>{service.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <FooterHeading>Top Locations</FooterHeading>
              <ul className="space-y-3">
                {topLocations.map((loc) => (
                  <li key={loc.name}>
                    <FooterLink href={loc.href}>IT Company in {loc.name}</FooterLink>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h4 className="font-heading font-medium text-sm text-primary-foreground/90 mb-3">Popular Services</h4>
                <ul className="space-y-2.5">
                  {popularServices.map((svc) => (
                    <li key={svc.name}>
                      <Link
                        href={svc.href}
                        className="text-xs text-primary-foreground/60 hover:text-accent transition-colors leading-snug block"
                      >
                        {svc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <address className="text-primary-foreground/80 text-sm leading-relaxed not-italic">
                      1st Floor, Flat No-102, Sneh Highway Views,
                      <br />
                      Bypass Rd, Kankarbagh, Patna,
                      <br />
                      Bihar 800020, India
                    </address>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+919470024607"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground/90 group-hover:text-accent transition-colors">
                      +91 94700 24607
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@golaxindia.com"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm text-primary-foreground/90 group-hover:text-accent transition-colors break-all">
                      contact@golaxindia.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 bg-black/15">
          <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-xs sm:text-sm text-primary-foreground/60 text-center md:text-left">
                © 2026 Golax India Pvt Ltd. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-1 gap-y-2 justify-center md:justify-end">
                {legalLinks.map((link, i) => (
                  <span key={link.href} className="inline-flex items-center">
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent px-2 py-1 rounded-md hover:bg-white/5 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                    {i < legalLinks.length - 1 && (
                      <span className="text-white/15 hidden sm:inline" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
