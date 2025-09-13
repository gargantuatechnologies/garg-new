"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "90%",
    label: "Redução de Fraudes",
    description: "Sistema DCréditos"
  },
  {
    icon: Users,
    value: "20+",
    label: "Clientes Atendidos",
    description: "Grupo Fast"
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfação",
    description: "Taxa de aprovação"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Disponibilidade",
    description: "Sistemas em produção"
  }
]

export function PortfolioStats() {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/5 via-transparent to-[#20BCED]/5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Números que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#B6E1F2]">Impressionam</span>
          </h2>
          <p className="text-lg text-[#B6E1F2] max-w-2xl mx-auto">
            Resultados reais dos nossos projetos em produção
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#126AF9]/20 rounded-2xl p-8 text-center hover:border-[#20BCED]/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#126AF9] to-[#20BCED] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#B6E1F2] mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-[#B6E1F2]">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
