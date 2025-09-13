"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

interface AboutCTAProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Pronto para Transformar seu Negócio?",
    subtitle: "Vamos conversar sobre como podemos ajudar sua empresa a alcançar a singularidade tecnológica",
    description: "Nossa equipe está pronta para mergulhar no seu desafio e criar uma solução que vai além do esperado.",
    ctaPrimary: "Agendar Reunião",
    ctaSecondary: "Falar no WhatsApp"
  },
  en: {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's talk about how we can help your company reach technological singularity",
    description: "Our team is ready to dive into your challenge and create a solution that goes beyond expectations.",
    ctaPrimary: "Schedule Meeting",
    ctaSecondary: "Talk on WhatsApp"
  }
}

export function AboutCTA({ currentLang }: AboutCTAProps) {
  const t = translations[currentLang]

  const handleScheduleMeeting = () => {
    console.log('Button clicked, opening Google Calendar...')
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1nxGMr3hEjDt0doXHOXfUgFZcjCN9FVjX_ybSKrQrGkMu6YWv-Tf98us7SvAjlcEegty5Op2nb?gv=true', '_blank')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/971582533528', '_blank')
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#126AF9]/10 via-[#20BCED]/5 to-[#B6E1F2]/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#126AF9]/20 to-[#20BCED]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#20BCED]/15 to-[#B6E1F2]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t.title}
          </h2>
          
          <p className="text-xl text-[#B6E1F2] mb-8 leading-relaxed">
            {t.subtitle}
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleMeeting}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#052699] hover:to-[#0ea5e9] text-white font-semibold rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <div className="text-[#B6E1F2] font-medium">ou</div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center gap-3 px-8 py-4 border-2 border-[#20BCED] text-[#20BCED] hover:bg-[#20BCED] hover:text-white font-semibold rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>{t.ctaSecondary}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
