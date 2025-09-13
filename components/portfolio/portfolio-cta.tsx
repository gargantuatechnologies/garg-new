"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function PortfolioCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
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
            Pronto para seu
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] via-[#B6E1F2] to-[#126AF9]">
              Próximo Projeto?
            </span>
          </h2>
          
          <p className="text-xl text-[#B6E1F2] mb-12 leading-relaxed">
            Vamos transformar sua ideia em realidade. Nossa equipe está pronta para 
            criar soluções que transcendem o comum e alcançam a singularidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/#cta">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#052699] hover:to-[#0ea5e9] text-white font-semibold rounded-2xl transition-all duration-300 group"
              >
                <span>Iniciar Projeto</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <div className="text-[#B6E1F2] font-medium">ou</div>

            <Link href="https://wa.me/971582533528" target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border-2 border-[#20BCED] text-[#20BCED] hover:bg-[#20BCED] hover:text-white font-semibold rounded-2xl transition-all duration-300 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Falar no WhatsApp</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
