"use client"

import Image from "next/image"
import { CheckCircle, Shield, Zap, ChevronLeft, ChevronRight, Building2, CreditCard, Coins, Banknote } from "lucide-react"
import { useState, useEffect } from "react"

interface PartnersSectionProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nossos Parceiros",
    subtitle: "Conexões estratégicas que impulsionam seu negócio",
    description: "Somos a softwarehouse com as melhores conexões do mercado de pagamentos, trabalhando exclusivamente com empresas credenciadas e homologadas. Sua integração é facilitada através de nossa rede estratégica.",
    features: [
      "Empresas Credenciadas",
      "Integração Facilitada", 
      "Segurança Garantida"
    ]
  },
  en: {
    title: "Our Partners",
    subtitle: "Strategic connections that boost your business",
    description: "We are the software house with the best connections in the payments market, working exclusively with accredited and certified companies. Your integration is facilitated through our strategic network.",
    features: [
      "Accredited Companies",
      "Facilitated Integration",
      "Guaranteed Security"
    ]
  },
}

const partners = [
  { 
    name: "BaaS", 
    logo: null,
    description: "Banking as a Service: Oferecemos soluções bancárias completas através de APIs integradas",
    icon: Building2
  },
  { 
    name: "Adquirência", 
    logo: null,
    description: "Adquirência: Parcerias com adquirentes credenciados para processamento de pagamentos",
    icon: CreditCard
  },
  { 
    name: "CaaS", 
    logo: null,
    description: "Crypto as a Service: Soluções completas para integração com criptomoedas e blockchain",
    icon: Coins
  },
  { 
    name: "Instituições de Pagamentos", 
    logo: null,
    description: "IPs: Temos parcerias com diversas instituições devidamente credenciadas e homologadas no Bacen",
    icon: Banknote
  },
]

export function PartnersSection({ currentLang }: PartnersSectionProps) {
  const t = translations[currentLang]
  const [currentPartner, setCurrentPartner] = useState(0)
  const featureIcons = [CheckCircle, Zap, Shield]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentPartner])

  // Reset timer when manually changing partners
  const resetTimer = () => {
    // Force re-render to restart the timer
    setCurrentPartner((prev) => prev)
  }

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % partners.length)
    resetTimer()
  }

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length)
    resetTimer()
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#e8eef5] via-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#B6E1F2]/8 to-[#126AF9]/8 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a0a0a] via-[#126AF9] to-[#20BCED] mb-6">{t.title}</h2>
          <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Partner Carousel */}
            <div className="relative">
              <div className="flex items-center justify-center h-32">
                <div className="text-center max-w-xs mx-auto">
                  <div className="w-40 h-24 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-xl flex flex-col items-center justify-center border-2 border-[#126AF9]/20 p-4 mx-auto">
                    {partners[currentPartner].icon && (() => {
                      const IconComponent = partners[currentPartner].icon
                      return <IconComponent className={`text-[#126AF9] mb-2 ${
                        partners[currentPartner].name === "Instituições de Pagamentos" ? "h-12 w-12" : "h-6 w-6"
                      }`} />
                    })()}
                    <span className={`text-[#126AF9] font-bold text-center ${
                      partners[currentPartner].name === "Instituições de Pagamentos" ? "text-sm" : "text-lg"
                    }`}>
                      {partners[currentPartner].name}
                    </span>
                  </div>
                  <p className="text-sm text-[#4a5568] mt-3 font-medium leading-relaxed">{partners[currentPartner].description}</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevPartner}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#126AF9]/20 hover:border-[#20BCED]/30 transition-all duration-300 hover:shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 text-[#126AF9]" />
              </button>
              
              <button
                onClick={nextPartner}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#126AF9]/20 hover:border-[#20BCED]/30 transition-all duration-300 hover:shadow-lg"
              >
                <ChevronRight className="h-5 w-5 text-[#126AF9]" />
              </button>
              
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPartner(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPartner 
                        ? 'bg-[#126AF9] w-6' 
                        : 'bg-[#126AF9]/30 hover:bg-[#126AF9]/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg md:text-xl text-[#0a0a0a] leading-relaxed font-normal">
                  {t.description}
                </h3>
                
                {/* Features */}
                <div className="space-y-3">
                  {t.features.map((feature, index) => {
                    const IconComponent = featureIcons[index]
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-white/40 backdrop-blur-sm border border-[#126AF9]/10 hover:border-[#20BCED]/20 transition-all duration-300">
                        <div className="p-2 rounded-full bg-gradient-to-r from-[#126AF9]/20 to-[#20BCED]/20 border border-[#126AF9]/30">
                          <IconComponent className="h-4 w-4 text-[#126AF9]" />
                        </div>
                        <span className="text-[#4a5568] font-medium text-sm">{feature}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
