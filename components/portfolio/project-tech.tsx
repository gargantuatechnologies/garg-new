"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Globe, Cpu } from "lucide-react"

interface ProjectTechProps {
  technologies: string[]
}

const techIcons: Record<string, any> = {
  "React": Globe,
  "React Native": Smartphone,
  "Node.js": Code,
  "Python": Code,
  "PostgreSQL": Database,
  "AWS": Cloud,
  "Docker": Cloud,
  "Redis": Database,
  "Machine Learning": Cpu,
  "TensorFlow": Cpu
}

export function ProjectTech({ technologies }: ProjectTechProps) {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
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
            Tecnologias <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#B6E1F2]">Utilizadas</span>
          </h2>
          <p className="text-lg text-[#B6E1F2] max-w-2xl mx-auto">
            Stack tecnológico moderno e robusto para garantir performance e escalabilidade
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = techIcons[tech] || Code
              
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#126AF9]/20 rounded-2xl p-6 text-center hover:border-[#20BCED]/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#126AF9] to-[#20BCED] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#20BCED] group-hover:to-[#B6E1F2] transition-all duration-300">
                      {tech}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
