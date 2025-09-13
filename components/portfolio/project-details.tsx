"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, CheckCircle } from "lucide-react"

interface ProjectDetailsProps {
  challenge: string
  solution: string
  results: string[]
}

export function ProjectDetails({ challenge, solution, results }: ProjectDetailsProps) {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Detalhes do <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#B6E1F2]">Projeto</span>
          </h2>
          <p className="text-lg text-[#B6E1F2] max-w-3xl mx-auto">
            Entenda o desafio, nossa solução e os resultados alcançados
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#126AF9]/20 rounded-3xl p-8 hover:border-[#20BCED]/40 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">O Desafio</h3>
                </div>
                <p className="text-[#B6E1F2] leading-relaxed text-lg">
                  {challenge}
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#126AF9]/20 rounded-3xl p-8 hover:border-[#20BCED]/40 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#126AF9] to-[#20BCED] rounded-2xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Nossa Solução</h3>
                </div>
                <p className="text-[#B6E1F2] leading-relaxed text-lg">
                  {solution}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#126AF9]/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Resultados Alcançados</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#126AF9]/5 to-[#20BCED]/5 rounded-xl border border-[#126AF9]/10"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#20BCED] to-[#B6E1F2] rounded-full"></div>
                    <span className="text-[#B6E1F2] font-medium">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
