"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileStickyCTA from "./MobileStickyCTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [ctaVisible, setCtaVisible] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className={`flex-grow pt-[4.25rem] sm:pt-[4.75rem] md:pt-[136px] lg:pt-[156px] lg:pb-0 transition-[padding] duration-300 ${
          ctaVisible ? "pb-[4.5rem]" : "pb-3"
        }`}
      >
        {children}
      </main>
      <Footer ctaVisible={ctaVisible} />
      <MobileStickyCTA onVisibilityChange={setCtaVisible} />
    </div>
  );
}
