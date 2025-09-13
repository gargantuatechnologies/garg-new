"use client"

import { motion } from "framer-motion"
import { Code, Users, BarChart3, Shield, Zap, Target } from "lucide-react"

interface AboutTeamProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nossa Equipe Multidisciplinar",
    subtitle: "Especialistas que fazem a diferença",
    description: "Contamos com uma equipe diversificada de profissionais especializados, cada um contribuindo com sua expertise única para o sucesso dos projetos.",
    roles: [
      {
        icon: Code,
        title: "Desenvolvedores Especialistas",
        description: "Desenvolvedores sênior com expertise em múltiplas tecnologias e arquiteturas escaláveis.",
        color: "from-[#126AF9] to-[#20BCED]"
      },
      {
        icon: Users,
        title: "Especialistas em Produto",
        description: "Profissionais que entendem de UX/UI, pesquisa de usuário e design de produtos digitais.",
        color: "from-[#20BCED] to-[#B6E1F2]"
      },
      {
        icon: BarChart3,
        title: "Gestores de Projeto",
        description: "Especialistas em metodologias ágeis e gestão de projetos complexos de tecnologia.",
        color: "from-[#B6E1F2] to-[#126AF9]"
      },
      {
        icon: Shield,
        title: "Especialistas em Compliance",
        description: "Profissionais que garantem conformidade regulatória e segurança em todos os projetos.",
        color: "from-[#126AF9] to-[#1E40AF]"
      },
      {
        icon: Zap,
        title: "Arquiteto de Soluções",
        description: "Especialistas em arquitetura de sistemas e integração com parceiros estratégicos.",
        color: "from-[#20BCED] to-[#126AF9]"
      },
      {
        icon: Target,
        title: "Consultores de Negócio",
        description: "Profissionais que entendem o mercado e ajudam a alinhar tecnologia com objetivos de negócio.",
        color: "from-[#B6E1F2] to-[#20BCED]"
      }
    ],
    stats: [
      { number: "50+", label: "Projetos Entregues" },
      { number: "15+", label: "Especialistas" },
      { number: "5+", label: "Anos de Experiência" },
      { number: "100%", label: "Clientes Satisfeitos" }
    ]
  },
  en: {
    title: "Our Multidisciplinary Team",
    subtitle: "Specialists who make the difference",
    description: "We have a diverse team of specialized professionals, each contributing their unique expertise to project success.",
    roles: [
      {
        icon: Code,
        title: "Specialist Developers",
        description: "Senior developers with expertise in multiple technologies and scalable architectures.",
        color: "from-[#126AF9] to-[#20BCED]"
      },
      {
        icon: Users,
        title: "Product Specialists",
        description: "Professionals who understand UX/UI, user research and digital product design.",
        color: "from-[#20BCED] to-[#B6E1F2]"
      },
      {
        icon: BarChart3,
        title: "Project Managers",
        description: "Specialists in agile methodologies and complex technology project management.",
        color: "from-[#B6E1F2] to-[#126AF9]"
      },
      {
        icon: Shield,
        title: "Compliance Specialists",
        description: "Professionals who ensure regulatory compliance and security in all projects.",
        color: "from-[#126AF9] to-[#1E40AF]"
      },
      {
        icon: Zap,
        title: "Solution Architects",
        description: "Specialists in system architecture and integration with strategic partners.",
        color: "from-[#20BCED] to-[#126AF9]"
      },
      {
        icon: Target,
        title: "Business Consultants",
        description: "Professionals who understand the market and help align technology with business objectives.",
        color: "from-[#B6E1F2] to-[#20BCED]"
      }
    ],
    stats: [
      { number: "50+", label: "Projects Delivered" },
      { number: "15+", label: "Specialists" },
      { number: "5+", label: "Years of Experience" },
      { number: "100%", label: "Satisfied Clients" }
    ]
  }
}

export function AboutTeam({ currentLang }: AboutTeamProps) {
  const t = translations[currentLang]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#20BCED]/5 via-[#B6E1F2]/3 to-[#126AF9]/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-[#B6E1F2] mb-4 font-medium">
            {t.subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Team Roles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-floating rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                <role.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {role.title}
              </h3>
              
              <p className="text-sm text-[#B6E1F2]/80 leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {t.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#B6E1F2] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#B6E1F2]/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
