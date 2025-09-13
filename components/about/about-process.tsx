"use client"

import { motion } from "framer-motion"
import { Search, Users, Lightbulb, Cog, CheckCircle, ArrowRight } from "lucide-react"

interface AboutProcessProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nosso Processo de Discovery",
    subtitle: "Vamos além do desenvolvimento tradicional",
    description: "Nosso processo de discovery transcende os limites de uma softwarehouse comum. Temos especialistas em produto e gestores de projeto que enxergam além da tecnologia.",
    steps: [
      {
        icon: Search,
        title: "Imersão Profunda",
        description: "Nos apaixonamos pelo problema do cliente. Entendemos sua realidade, acompanhamos o cotidiano e mergulhamos fundo no contexto do negócio.",
        color: "from-[#126AF9] to-[#20BCED]",
        bgColor: "bg-gradient-to-br from-[#126AF9]/20 to-[#20BCED]/10",
        number: "01"
      },
      {
        icon: Users,
        title: "Análise Multidisciplinar",
        description: "Especialistas em produto, gestores de projeto e desenvolvedores analisam questões regulatórias, compliance e oportunidades de otimização.",
        color: "from-[#20BCED] to-[#B6E1F2]",
        bgColor: "bg-gradient-to-br from-[#20BCED]/20 to-[#B6E1F2]/10",
        number: "02"
      },
      {
        icon: Lightbulb,
        title: "Solução Sob Medida",
        description: "Montamos a solução perfeita, considerando eficiência, economia de tempo, UX otimizada e integração com nossas parcerias estratégicas.",
        color: "from-[#B6E1F2] to-[#126AF9]",
        bgColor: "bg-gradient-to-br from-[#B6E1F2]/20 to-[#126AF9]/10",
        number: "03"
      },
      {
        icon: Cog,
        title: "Implementação Inteligente",
        description: "Desenvolvemos com foco em escalabilidade, manutenibilidade e performance, sempre pensando no crescimento futuro do cliente.",
        color: "from-[#126AF9] to-[#20BCED]",
        bgColor: "bg-gradient-to-br from-[#126AF9]/20 to-[#20BCED]/10",
        number: "04"
      }
    ],
    benefits: [
      "Visão 360° do negócio do cliente",
      "Soluções integradas com parceiros estratégicos",
      "Foco em compliance e regulamentações",
      "UX otimizada para máxima eficiência",
      "Acompanhamento contínuo e evolução"
    ]
  },
  en: {
    title: "Our Discovery Process",
    subtitle: "Going beyond traditional development",
    description: "Our discovery process transcends the boundaries of a common software house. We have product specialists and project managers who see beyond technology.",
    steps: [
      {
        icon: Search,
        title: "Deep Immersion",
        description: "We fall in love with the client's problem. We understand their reality, follow their daily routine and dive deep into the business context.",
        color: "from-[#126AF9] to-[#20BCED]",
        bgColor: "bg-gradient-to-br from-[#126AF9]/20 to-[#20BCED]/10",
        number: "01"
      },
      {
        icon: Users,
        title: "Multidisciplinary Analysis",
        description: "Product specialists, project managers and developers analyze regulatory issues, compliance and optimization opportunities.",
        color: "from-[#20BCED] to-[#B6E1F2]",
        bgColor: "bg-gradient-to-br from-[#20BCED]/20 to-[#B6E1F2]/10",
        number: "02"
      },
      {
        icon: Lightbulb,
        title: "Tailored Solution",
        description: "We build the perfect solution, considering efficiency, time savings, optimized UX and integration with our strategic partnerships.",
        color: "from-[#B6E1F2] to-[#126AF9]",
        bgColor: "bg-gradient-to-br from-[#B6E1F2]/20 to-[#126AF9]/10",
        number: "03"
      },
      {
        icon: Cog,
        title: "Smart Implementation",
        description: "We develop with focus on scalability, maintainability and performance, always thinking about the client's future growth.",
        color: "from-[#126AF9] to-[#20BCED]",
        bgColor: "bg-gradient-to-br from-[#126AF9]/20 to-[#20BCED]/10",
        number: "04"
      }
    ],
    benefits: [
      "360° view of the client's business",
      "Integrated solutions with strategic partners",
      "Focus on compliance and regulations",
      "Optimized UX for maximum efficiency",
      "Continuous monitoring and evolution"
    ]
  }
}

export function AboutProcess({ currentLang }: AboutProcessProps) {
  const t = translations[currentLang]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#20BCED]/20 to-[#B6E1F2]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#126AF9]/15 to-[#20BCED]/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] via-[#B6E1F2] to-[#126AF9]">
              {t.title}
            </span>
          </h2>
          
          <p className="text-xl text-[#B6E1F2] mb-4 font-medium">
            {t.subtitle}
          </p>
          
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Steps */}
          <div className="space-y-24">
            {t.steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connection Line - Only between cards - Hidden on mobile */}
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-[#20BCED] to-[#B6E1F2] rounded-full opacity-30" 
                       style={{ top: 'calc(50% + 80px)' }}></div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8 lg:gap-16`}
                >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  {/* Step Number - Outside and Above */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#20BCED] to-[#126AF9] rounded-full flex items-center justify-center shadow-lg z-20"
                  >
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent" />
                    </motion.div>
                    
                    <step.icon className="h-10 w-10 text-white z-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className={`flex-1 max-w-2xl ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                >
                  <div className={`${step.bgColor} rounded-3xl p-6 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                      }} />
                    </div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-2xl font-black text-white mb-4 relative inline-block"
                    >
                      {step.title}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#20BCED] to-[#126AF9] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                        viewport={{ once: true }}
                      />
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="text-lg text-[#B6E1F2]/90 leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="glass-floating rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)`,
                backgroundSize: '40px 40px',
              }} />
            </div>
            
            <h3 className="text-3xl font-black text-white mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#126AF9]">
                {currentLang === "pt" ? "O que nos diferencia" : "What sets us apart"}
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-6 w-6 text-[#20BCED] flex-shrink-0" />
                  </motion.div>
                  <span className="text-white/90 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}