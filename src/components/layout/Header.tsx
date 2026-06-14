"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown, MapPin, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { featuredIndiaCities } from "@/data/indiaCities";
import { internationalLocations } from "@/data/internationalLocations";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const PHONE_DISPLAY = "+91 94700 24607";
const PHONE_HREF = "+919470024607";

const indiaLinks = featuredIndiaCities.slice(0, 8);
const globalLinks = internationalLocations.slice(0, 6);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      root.style.overflowX = "clip";
    } else {
      document.body.style.overflow = "";
      root.style.overflowX = "";
    }
    return () => {
      document.body.style.overflow = "";
      root.style.overflowX = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLocationsActive = pathname.startsWith("/locations");

  const navClass = (active: boolean) =>
    `relative px-2.5 xl:px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
      active
        ? "text-primary nav-link-active bg-primary/5"
        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="bg-gradient-to-r from-primary via-[hsl(217,91%,26%)] to-primary text-primary-foreground py-2 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE_HREF}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a href="mailto:contact@golaxindia.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              contact@golaxindia.com
            </a>
          </div>
          <div className="text-primary-foreground/80">India-Based IT Company · Serving 12+ Countries · HQ Patna</div>
        </div>
      </div>

      <nav className="bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-[4.25rem] sm:h-[4.75rem] md:h-24 items-center justify-between gap-2">
            <Link href="/" className="flex items-center shrink-0 min-w-0" aria-label="Golax India Pvt Ltd – Home">
              <Image
                src={logo}
                alt="Golax India Pvt Ltd logo"
                width={320}
                height={96}
                priority
                className="h-12 sm:h-14 md:h-20 lg:h-[5.25rem] w-auto max-w-[240px] sm:max-w-[280px] md:max-w-none"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              <Link href="/" className={navClass(pathname === "/")}>
                Home
              </Link>
              {navigation.slice(1, 4).map((item) => (
                <Link key={item.name} href={item.href} className={navClass(pathname === item.href)}>
                  {item.name}
                </Link>
              ))}

              {/* Locations dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLocationsOpen((o) => !o)}
                  className={`flex items-center gap-1 ${navClass(isLocationsActive)}`}
                  aria-expanded={locationsOpen}
                  aria-haspopup="true"
                >
                  Locations
                  <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {locationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-2 w-[min(90vw,520px)] glass-card rounded-2xl p-5 z-50"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1">
                            <span aria-hidden="true">🇮🇳</span> India
                          </p>
                          <ul className="space-y-1">
                            {indiaLinks.map((c) => (
                              <li key={c.slug}>
                                <Link href={`/locations/${c.slug}`} className="block px-2 py-1.5 text-sm rounded-md hover:bg-muted" onClick={() => setLocationsOpen(false)}>
                                  {c.city}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link href="/locations#india" className="text-xs text-primary font-medium mt-2 inline-block hover:underline" onClick={() => setLocationsOpen(false)}>
                            All India cities →
                          </Link>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1">
                            <Globe2 className="h-3.5 w-3.5" /> Global
                          </p>
                          <ul className="space-y-1">
                            {globalLinks.map((c) => (
                              <li key={c.slug}>
                                <Link href={`/locations/global/${c.slug}`} className="block px-2 py-1.5 text-sm rounded-md hover:bg-muted" onClick={() => setLocationsOpen(false)}>
                                  {c.flag} {c.country}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link href="/locations#global" className="text-xs text-primary font-medium mt-2 inline-block hover:underline" onClick={() => setLocationsOpen(false)}>
                            All countries →
                          </Link>
                          <Link href="/locations#patna" className="text-xs text-muted-foreground mt-3 flex items-center gap-1 hover:text-primary" onClick={() => setLocationsOpen(false)}>
                            <MapPin className="h-3 w-3" /> Patna & Bihar
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation.slice(4).map((item) => (
                <Link key={item.name} href={item.href} className={navClass(pathname === item.href)}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button asChild variant="hero" size="default">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>

            <div className="flex items-center gap-1 lg:hidden shrink-0">
              <a href={`tel:${PHONE_HREF}`} className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary active:bg-primary/20 transition-colors" aria-label="Call Golax India">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919470024607" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366]/15 text-[#128C7E] active:bg-[#25D366]/25 transition-colors" aria-label="WhatsApp Golax India">
                <MessageCircle className="h-5 w-5" />
              </a>
              <button type="button" className="flex items-center justify-center w-11 h-11 rounded-full bg-muted text-foreground active:bg-muted/80 transition-colors" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu" aria-expanded={mobileMenuOpen}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-[60] lg:hidden" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 320 }} className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] z-[70] bg-card shadow-2xl flex flex-col lg:hidden pt-[env(safe-area-inset-top)]" role="dialog" aria-modal="true" aria-label="Navigation menu">
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <span className="font-heading font-semibold text-foreground">Menu</span>
                <button type="button" onClick={() => setMobileMenuOpen(false)} className="w-11 h-11 flex items-center justify-center rounded-full bg-muted" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-3">
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className={`flex items-center min-h-[48px] px-4 rounded-xl text-base font-medium transition-colors ${pathname === item.href ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"}`}>
                      {item.name}
                    </Link>
                  ))}
                  <button type="button" onClick={() => setMobileLocationsOpen((o) => !o)} className="flex items-center justify-between w-full min-h-[48px] px-4 rounded-xl text-base font-medium text-foreground hover:bg-muted">
                    Locations
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileLocationsOpen && (
                    <div className="pl-4 pb-2 space-y-1">
                      <p className="text-xs font-semibold text-muted-foreground px-4 pt-2">🇮🇳 India</p>
                      {indiaLinks.map((c) => (
                        <Link key={c.slug} href={`/locations/${c.slug}`} className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg">{c.city}</Link>
                      ))}
                      <Link href="/locations#india" className="block px-4 py-2 text-sm text-primary font-medium">All India →</Link>
                      <p className="text-xs font-semibold text-muted-foreground px-4 pt-2">🌍 Global</p>
                      {globalLinks.map((c) => (
                        <Link key={c.slug} href={`/locations/global/${c.slug}`} className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg">{c.flag} {c.country}</Link>
                      ))}
                      <Link href="/locations#patna" className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Patna & Bihar</Link>
                    </div>
                  )}
                </nav>
              </div>

              <div className="p-4 border-t border-border space-y-3 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                <Button asChild variant="hero" size="lg" className="w-full min-h-[48px] text-base">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <a href={`tel:${PHONE_HREF}`} className="flex items-center justify-center gap-2 min-h-[44px] rounded-lg border border-border text-sm font-medium"><Phone className="h-4 w-4" /> Call</a>
                  <a href="mailto:contact@golaxindia.com" className="flex items-center justify-center gap-2 min-h-[44px] rounded-lg border border-border text-sm font-medium"><Mail className="h-4 w-4" /> Email</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
