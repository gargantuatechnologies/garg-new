"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutProcess } from "@/components/about/about-process"
import { AboutTeam } from "@/components/about/about-team"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt")

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} currentPage="about" />
      <AboutHero currentLang={currentLang} />
      <AboutMission currentLang={currentLang} />
      <AboutProcess currentLang={currentLang} />
      <AboutTeam currentLang={currentLang} />
      <AboutCTA currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  )
}
