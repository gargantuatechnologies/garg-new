"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import ConceptSection from "@/components/concept-section"
import { ServicesSection } from "@/components/services-section"
import { CasesSection } from "@/components/cases-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt")

  const handleLanguageChange = (lang: "pt" | "en") => {
    setCurrentLang(lang)
  }

  return (
    <main className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <HeroSection currentLang={currentLang} />
      <ConceptSection currentLang={currentLang} />
      <ServicesSection currentLang={currentLang} />
      <CasesSection currentLang={currentLang} />
      <PartnersSection currentLang={currentLang} />
      <CTASection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  )
}
