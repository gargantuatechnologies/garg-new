"use client"

import { useState, lazy, Suspense } from "react"
import { Header } from "@/components/header"
import { AboutHero } from "@/components/about/about-hero"

// Lazy load components that are not immediately visible
const AboutMission = lazy(() => import("@/components/about/about-mission").then(module => ({ default: module.AboutMission })))
const AboutProcess = lazy(() => import("@/components/about/about-process").then(module => ({ default: module.AboutProcess })))
const AboutTeam = lazy(() => import("@/components/about/about-team").then(module => ({ default: module.AboutTeam })))
const AboutCTA = lazy(() => import("@/components/about/about-cta").then(module => ({ default: module.AboutCTA })))
const Footer = lazy(() => import("@/components/footer").then(module => ({ default: module.Footer })))

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="w-full h-32 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] animate-pulse rounded-lg" />
)

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt")

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} currentPage="about" />
      <AboutHero currentLang={currentLang} />
      
      <Suspense fallback={<SectionLoader />}>
        <AboutMission currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutProcess currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutTeam currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <AboutCTA currentLang={currentLang} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer currentLang={currentLang} />
      </Suspense>
    </main>
  )
}
