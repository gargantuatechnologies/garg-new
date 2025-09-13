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
    ctaPrimary: "Agendar Reunião",
    ctaSecondary: "Falar com Especialista",
  },
  en: {
    title: "Ready to Reach Singularity?",
    subtitle: "Let's talk about how we can transform your business",
    description: "Our team is ready to dive into your processes and create solutions that transcend the ordinary.",
    ctaPrimary: "Schedule Meeting",
    ctaSecondary: "Talk to Expert",
  },
}

export function CTASection({ currentLang }: CTASectionProps) {
  const t = translations[currentLang]


  const handleScheduleMeeting = () => {
    console.log('Button clicked, opening Google Calendar...')
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1nxGMr3hEjDt0doXHOXfUgFZcjCN9FVjX_ybSKrQrGkMu6YWv-Tf98us7SvAjlcEegty5Op2nb?gv=true', '_blank')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/971582533528', '_blank')
  }

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#126AF9]/10 via-[#20BCED]/5 to-[#B6E1F2]/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#126AF9]/20 to-[#20BCED]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#20BCED]/15 to-[#B6E1F2]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{t.title}</h2>
          <p className="text-2xl text-[#B6E1F2] mb-8">{t.subtitle}</p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">{t.description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handleScheduleMeeting}
              className="bg-[#126AF9] hover:bg-[#052699] text-white px-8 py-4 text-lg font-semibold hover-lift group"
            >
              {t.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <span className="text-[#B6E1F2] font-medium text-lg">ou</span>
            
            <Button
              size="lg"
              onClick={handleWhatsApp}
              variant="outline"
              className="border-[#20BCED] text-[#20BCED] hover:bg-[#20BCED] hover:text-white px-8 py-4 text-lg font-semibold hover-lift bg-transparent"
            >
              {t.ctaSecondary}
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
