"use client";

import { useState, lazy, Suspense } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

// Lazy load components that are not immediately visible
const ConceptSection = lazy(() => import("@/components/concept-section"));
const ServicesSection = lazy(() => import("@/components/services-section").then(module => ({ default: module.ServicesSection })));
const CasesSection = lazy(() => import("@/components/cases-section").then(module => ({ default: module.CasesSection })));
const PartnersSection = lazy(() => import("@/components/partners-section").then(module => ({ default: module.PartnersSection })));
const CTASection = lazy(() => import("@/components/cta-section").then(module => ({ default: module.CTASection })));
const Footer = lazy(() => import("@/components/footer").then(module => ({ default: module.Footer })));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="w-full h-32 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] animate-pulse rounded-lg" />
);

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt");

  const handleLanguageChange = (lang: "pt" | "en") => {
    setCurrentLang(lang);
  };

  return (
    <main className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <HeroSection currentLang={currentLang} />
      
      <Suspense fallback={<SectionLoader />}>
        <ConceptSection currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CasesSection currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PartnersSection currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CTASection currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer currentLang={currentLang} />
      </Suspense>
    </main>
  );
}
