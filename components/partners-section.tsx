"use client"

import Image from "next/image"

interface PartnersSectionProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nossos Parceiros",
    subtitle: "Trabalhamos com as melhores empresas do mercado",
  },
  en: {
    title: "Our Partners",
    subtitle: "We work with the best companies in the market",
  },
}

const partners = [
  { name: "FastPay", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Celcoin", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Stripe", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Azify", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pelada do Digital", logo: "/placeholder.svg?height=60&width=120" },
  // Duplicating for infinite scroll effect
  { name: "FastPay", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Celcoin", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Stripe", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Azify", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pelada do Digital", logo: "/placeholder.svg?height=60&width=120" },
]

export function PartnersSection({ currentLang }: PartnersSectionProps) {
  const t = translations[currentLang]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Infinite Scroll Partners */}
        <div className="overflow-hidden">
          <div className="flex animate-slide-infinite">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
