'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms/terms-content"

export default function TermsPage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt")

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} currentPage="terms" />
      <TermsContent currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  )
}