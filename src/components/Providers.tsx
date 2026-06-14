"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ScrollToTop />
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}
