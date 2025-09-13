"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Shield, Star, Rocket, Brain, Lightbulb, Heart } from "lucide-react"
import { useRef } from "react"

interface AboutMissionProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nossa Missão, Visão e Valores",
    subtitle: "Os pilares que nos guiam",
    mission: {
      title: "Missão",
      description: "Transformar desafios complexos em soluções tecnológicas que transcendem o comum, sempre nos apaixonando pelo problema do cliente e entregando resultados que fazem a diferença."
    },
    vision: {
      title: "Visão",
      description: "Ser reconhecida como a softwarehouse que não apenas desenvolve, mas que verdadeiramente compreende e transforma negócios através de tecnologia de ponta e processos otimizados."
    },
    values: {
      title: "Valores",
      description: "Paixão pelo problema, excelência técnica, transparência total e compromisso com o sucesso do cliente em cada linha de código."
    }
  },
  en: {
    title: "Our Mission, Vision and Values",
    subtitle: "The pillars that guide us",
    mission: {
      title: "Mission",
      description: "Transform complex challenges into technological solutions that transcend the ordinary, always falling in love with the client's problem and delivering results that make a difference."
    },
    vision: {
      title: "Vision",
      description: "To be recognized as the software house that not only develops, but truly understands and transforms businesses through cutting-edge technology and optimized processes."
    },
    values: {
      title: "Values",
      description: "Passion for the problem, technical excellence, total transparency and commitment to client success in every line of code."
    }
  }
}

export function AboutMission({ currentLang }: AboutMissionProps) {
  const t = translations[currentLang]
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const cards = [
    {
      icon: Rocket,
      title: t.mission.title,
      description: t.mission.description,
      color: "from-[#126AF9] to-[#20BCED]",
      bgColor: "bg-gradient-to-br from-[#126AF9]/10 to-[#20BCED]/5",
      position: "left",
      image: "/images/mission-bg.jpg",
      floatingIcons: [Sparkles, Zap, Star],
      accentColor: "#126AF9"
    },
    {
      icon: Brain,
      title: t.vision.title,
      description: t.vision.description,
      color: "from-[#20BCED] to-[#B6E1F2]",
      bgColor: "bg-gradient-to-br from-[#20BCED]/10 to-[#B6E1F2]/5",
      position: "center",
      image: "/images/vision-bg.jpg",
      floatingIcons: [Lightbulb, Shield, Star],
      accentColor: "#20BCED"
    },
    {
      icon: Heart,
      title: t.values.title,
      description: t.values.description,
      color: "from-[#B6E1F2] to-[#126AF9]",
      bgColor: "bg-gradient-to-br from-[#B6E1F2]/10 to-[#126AF9]/5",
      position: "right",
      image: "/images/values-bg.jpg",
      floatingIcons: [Shield, Sparkles, Zap],
      accentColor: "#B6E1F2"
    }
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <div className={`w-1 h-1 ${
              i % 4 === 0 ? 'bg-[#126AF9]/15' : 
              i % 4 === 1 ? 'bg-[#20BCED]/15' : 
              i % 4 === 2 ? 'bg-[#B6E1F2]/15' : 'bg-[#FF6B6B]/15'
            } rounded-full blur-sm`} />
          </motion.div>
        ))}

        {/* Large Background Shapes */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#126AF9]/8 to-[#20BCED]/8 rounded-full blur-3xl"
          style={{ y }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#20BCED]/6 to-[#B6E1F2]/6 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
             <motion.span 
               className="relative inline-block"
               animate={{
                 backgroundPosition: ["0% 50%", "-100% 50%"]
               }}
               transition={{
                 duration: 8,
                 repeat: Infinity,
                 ease: "linear"
               }}
               style={{
                 background: "linear-gradient(90deg, #126AF9 0%, #20BCED 12.5%, #1E40AF 25%, #20BCED 37.5%, #126AF9 50%, #20BCED 62.5%, #1E40AF 75%, #20BCED 87.5%, #126AF9 100%)",
                 backgroundSize: "200% 100%",
                 WebkitBackgroundClip: "text",
                 backgroundClip: "text",
                 color: "transparent"
               }}
             >
               {t.title}
             </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 font-medium max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards Grid - Responsive and Proportional */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#20BCED]/5 to-[#126AF9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${card.accentColor}, transparent)`,
                    padding: '1px',
                  }}
                  animate={{
                    background: [
                      `linear-gradient(45deg, transparent, ${card.accentColor}, transparent)`,
                      `linear-gradient(225deg, transparent, ${card.accentColor}, transparent)`,
                      `linear-gradient(45deg, transparent, ${card.accentColor}, transparent)`,
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center relative overflow-hidden shadow-lg`}>
                      <card.icon className="h-8 w-8 text-white z-10" />
                      
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
                      </div>
                      
                      {/* Floating Particles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute w-1 h-1 bg-white/30 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 20}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-gray-900 mb-4 relative"
                  >
                    {card.title}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#20BCED] to-[#126AF9]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {card.description}
                  </motion.p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}