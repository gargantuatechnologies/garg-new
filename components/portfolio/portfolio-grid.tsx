"use client"

import { motion } from "framer-motion"
import { PortfolioCard } from "./portfolio-card"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Grupo Fast",
    subtitle: "FastPay & FastSoft",
    description: "Parceria estratégica para transformar o white-label da FastSoft em uma solução completamente personalizável, aumentando exponencialmente a demanda e satisfação dos clientes.",
    category: "Pagamentos",
    image: "/images/fast-group-cases/ALLUS-DASH.png",
    images: [
      "/images/fast-group-cases/ALLUS-DASH.png",
      "/images/fast-group-cases/app-payhub.png",
      "/images/fast-group-cases/App-fastpay-mockup.png",
      "/images/fast-group-cases/dashboard-payhub.png"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    stats: {
      clients: "500+",
      satisfaction: "98%",
      uptime: "99.9%"
    },
    featured: true
  },
  {
    id: 2,
    title: "DCréditos",
    subtitle: "Empréstimos para MPEs",
    description: "Desenvolvimento de sistema completo que revolucionou as operações da DCréditos, reduzindo fraudes em 90% e otimizando drasticamente os processos internos.",
    category: "Fintech",
    image: "/images/midas-case/dcredito-operators-ranking.png",
    images: [
      "/images/midas-case/dcredito-operators-ranking.png",
      "/images/midas-case/MIDAS PHONES 1.png",
      "/images/midas-case/Screenshot_1.png",
      "/images/midas-case/Screenshot_16.png"
    ],
    technologies: ["React", "Python", "Machine Learning", "Docker"],
    stats: {
      fraudReduction: "90%",
      efficiency: "85%",
      processing: "3x mais rápido"
    },
    featured: true
  }
]

export function PortfolioGrid() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", label: "Todos" },
    { id: "Pagamentos", label: "Pagamentos" },
    { id: "Fintech", label: "Fintech" }
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#B6E1F2]">Projetos</span>
          </h2>
          <p className="text-lg text-[#B6E1F2] max-w-3xl mx-auto mb-8">
            Cada projeto é uma história de transformação digital, inovação e resultados excepcionais
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#1a1a1a] border border-[#126AF9]/20 rounded-2xl p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-[#126AF9] to-[#20BCED] text-white"
                    : "text-[#B6E1F2] hover:text-white hover:bg-[#126AF9]/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
