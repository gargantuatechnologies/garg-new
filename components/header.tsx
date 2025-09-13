"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WorkWithUsDialog } from "@/components/work-with-us-dialog"
import { Globe, Menu, X } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  currentLang: "pt" | "en"
  onLanguageChange: (lang: "pt" | "en") => void
  currentPage?: "home" | "portfolio" | "project"
}

const translations = {
  pt: {
    contact: "Contato",
    about: "Sobre Nós",
    portfolio: "Portfólio",
    workWithUs: "Trabalhe conosco",
  },
  en: {
    contact: "Contact",
    about: "About Us",
    portfolio: "Portfolio",
    workWithUs: "Work with us",
  },
}

export function Header({ currentLang, onLanguageChange, currentPage = "home" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[currentLang]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
      <div
        className={`glass-floating-enhanced px-8 py-4 transition-all duration-500 ${
          isScrolled 
            ? "border-b border-[#126AF9]/30" 
            : "border-b border-[#4a5568]/20"
        } lg:border-b`}
      >
        <div className="container mx-auto flex items-center justify-between w-full">
          {/* Logo compacto */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => window.location.href = '/'}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/images/logo-dark.png"
                alt="Gargantua Technologies"
                width={160}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </button>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('concept')}
              className="text-[#c5d4e6] hover:text-[#e8eef5] transition-colors font-medium text-sm px-4 py-1.5 rounded-full hover:bg-[#126AF9]/10"
            >
              {t.about}
            </button>
            <button 
              onClick={() => window.location.href = '/portfolio'}
              className={`transition-colors font-medium text-sm px-4 py-1.5 rounded-full hover:bg-[#126AF9]/10 ${
                currentPage === "portfolio" 
                  ? "text-[#20BCED] bg-[#20BCED]/10 border border-[#20BCED]/30" 
                  : "text-[#c5d4e6] hover:text-[#e8eef5]"
              }`}
            >
              {t.portfolio}
            </button>
            <WorkWithUsDialog currentLang={currentLang}>
              <button className="text-[#c5d4e6] hover:text-[#e8eef5] transition-colors font-medium text-sm px-4 py-1.5 rounded-full hover:bg-[#126AF9]/10">
                {t.workWithUs}
              </button>
            </WorkWithUsDialog>
          <Button
            variant="outline"
            size="sm"
            className="border-[#8b9bb3] text-[#c5d4e6] hover:bg-[#8b9bb3] hover:text-white bg-transparent px-5 py-1.5 text-sm rounded-full"
            onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t.contact}
          </Button>
          </nav>

          {/* Idioma e Menu mobile */}
          <div className="flex items-center space-x-4">
            {/* Idioma */}
            <div className="flex items-center space-x-2">
              <Globe className="h-3.5 w-3.5 text-[#8b9bb3]" />
              <button
                onClick={() => onLanguageChange("pt")}
                className={`text-xs transition-colors px-2 py-1 rounded-full ${
                  currentLang === "pt" 
                    ? "text-[#126AF9] font-semibold bg-[#126AF9]/10" 
                    : "text-[#8b9bb3] hover:text-[#c5d4e6] hover:bg-[#126AF9]/5"
                }`}
              >
                PT
              </button>
              <span className="text-[#8b9bb3] text-xs">|</span>
              <button
                onClick={() => onLanguageChange("en")}
                className={`text-xs transition-colors px-2 py-1 rounded-full ${
                  currentLang === "en" 
                    ? "text-[#126AF9] font-semibold bg-[#126AF9]/10" 
                    : "text-[#8b9bb3] hover:text-[#c5d4e6] hover:bg-[#126AF9]/5"
                }`}
              >
                EN
              </button>
            </div>

            {/* Menu mobile */}
            <button
              className="lg:hidden text-[#c5d4e6] hover:text-[#e8eef5] transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile expandido */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 glass-floating rounded-2xl p-4 border border-[#4a5568]/20">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('concept')}
                className="text-[#c5d4e6] hover:text-[#e8eef5] transition-colors font-medium text-sm px-3 py-2 rounded-full hover:bg-[#126AF9]/10 text-left"
              >
                {t.about}
              </button>
              <button 
                onClick={() => window.location.href = '/portfolio'}
                className={`transition-colors font-medium text-sm px-3 py-2 rounded-full hover:bg-[#126AF9]/10 text-left ${
                  currentPage === "portfolio" 
                    ? "text-[#20BCED] bg-[#20BCED]/10 border border-[#20BCED]/30" 
                    : "text-[#c5d4e6] hover:text-[#e8eef5]"
                }`}
              >
                {t.portfolio}
              </button>
              <WorkWithUsDialog currentLang={currentLang}>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#c5d4e6] hover:text-[#e8eef5] transition-colors font-medium text-sm px-3 py-2 rounded-full hover:bg-[#126AF9]/10 text-left w-full"
                >
                  {t.workWithUs}
                </button>
              </WorkWithUsDialog>
              <Button
                variant="outline"
                size="sm"
                className="w-fit border-[#8b9bb3] text-[#c5d4e6] hover:bg-[#8b9bb3] hover:text-white bg-transparent px-4 py-1.5 text-sm rounded-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const ctaSection = document.getElementById('cta');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.contact}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}