"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { PortfolioStats } from "@/components/portfolio/portfolio-stats";
import { PortfolioCTA } from "@/components/portfolio/portfolio-cta";

export default function PortfolioPage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt");

  return (
    <main className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} currentPage="portfolio" />
      <div className="">
        <PortfolioHero />
        <PortfolioStats />
        <PortfolioGrid />
        <PortfolioCTA />
      </div>
      <Footer currentLang={currentLang} />
    </main>
  );
}
