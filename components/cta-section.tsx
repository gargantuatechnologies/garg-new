"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Pronto para Alcançar a Singularidade?",
    subtitle: "Vamos conversar sobre como podemos transformar seu negócio",
    description: "Nossa equipe está pronta para mergulhar nos seus processos e criar soluções que transcendem o comum.",
    ctaPrimary: "Iniciar Projeto",
    ctaSecondary: "Agendar Reunião",
  },
  en: {
    title: "Ready to Reach Singularity?",
    subtitle: "Let's talk about how we can transform your business",
    description: "Our team is ready to dive into your processes and create solutions that transcend the ordinary.",
    ctaPrimary: "Start Project",
    ctaSecondary: "Schedule Meeting",
  },
}

export function CTASection({ currentLang }: CTASectionProps) {
  const t = translations[currentLang]

  return (
    <section className="py-24 bg-metallic-gradient texture-overlay relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{t.title}</h2>
          <p className="text-2xl text-[#B6E1F2] mb-8">{t.subtitle}</p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">{t.description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-[#126AF9] hover:bg-[#052699] text-white px-8 py-4 text-lg font-semibold hover-lift group"
            >
              {t.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#20BCED] text-[#20BCED] hover:bg-[#20BCED] hover:text-white px-8 py-4 text-lg font-semibold hover-lift bg-transparent"
            >
              {t.ctaSecondary}
            </Button>
          </div>

        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#126AF9]/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#20BCED]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#B6E1F2]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}
