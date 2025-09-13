"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface AboutHeroProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Sobre Nós",
    subtitle: "Alcançando a singularidade através da tecnologia",
    description: "Somos mais que uma softwarehouse. Somos parceiros estratégicos que se apaixonam pelo problema do cliente e transformam desafios complexos em soluções que transcendem o comum."
  },
  en: {
    title: "About Us",
    subtitle: "Reaching singularity through technology",
    description: "We are more than a software house. We are strategic partners who fall in love with the client's problem and transform complex challenges into solutions that transcend the ordinary."
  }
}

export function AboutHero({ currentLang }: AboutHeroProps) {
  const t = translations[currentLang]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Floating Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(18, 106, 249, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(18, 106, 249, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 30s linear infinite',
          }} />
        </div>

        {/* Floating Particles with Optimized Motion */}
        {[...Array(20)].map((_, i) => {
          const baseX = (i * 5) % 100
          const baseY = (i * 7) % 100
          const colorIndex = i % 4
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                left: `${baseX}%`,
                top: `${baseY}%`,
              }}
              animate={{
                x: [0, (i % 3) * 50 - 75, 0],
                y: [0, (i % 2) * 30 - 15, 0],
                scale: [0.5, 1.2, 0.5],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 12 + (i % 3) * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <div
                className={`w-1 h-1 ${
                  colorIndex === 0 ? 'bg-[#126AF9]' : 
                  colorIndex === 1 ? 'bg-[#20BCED]' : 
                  colorIndex === 2 ? 'bg-[#B6E1F2]' : 'bg-[#FF6B6B]'
                } rounded-full blur-sm`}
              />
            </motion.div>
          )
        })}

        {/* Large Floating Orbs with Optimized Animation */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#126AF9]/30 to-[#20BCED]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#20BCED]/25 to-[#B6E1F2]/25 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#B6E1F2]/20 to-[#FF6B6B]/20 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Animated Lines - Optimized */}
        {[...Array(5)].map((_, i) => {
          const baseX = (i * 20) % 100
          const baseY = (i * 15) % 100
          const width = 100 + (i % 3) * 50
          
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute"
              style={{
                left: `${baseX}%`,
                top: `${baseY}%`,
                width: `${width}px`,
                height: '1px',
              }}
              animate={{
                x: [0, (i % 2) * 100 - 50, 0],
                y: [0, (i % 3) * 30 - 15, 0],
                opacity: [0, 0.4, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 6 + (i % 2) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-[#20BCED]/40 to-transparent" />
            </motion.div>
          )
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >

          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 relative"
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] via-[#B6E1F2] to-[#126AF9] relative inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              {t.title}
            </motion.span>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] via-[#B6E1F2] to-[#126AF9] blur-sm opacity-5"
              animate={{
                opacity: [0.03, 0.07, 0.03]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t.title}
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 80
            }}
            className="text-2xl md:text-3xl text-[#B6E1F2] mb-8 font-medium"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(182, 225, 242, 0)",
                  "0 0 20px rgba(182, 225, 242, 0.5)",
                  "0 0 0px rgba(182, 225, 242, 0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t.subtitle}
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              type: "spring",
              stiffness: 60
            }}
            className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Animated Stats with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-8 mt-12"
          >
            {[
              { number: "50+", label: currentLang === "pt" ? "Projetos" : "Projects" },
              { number: "15+", label: currentLang === "pt" ? "Especialistas" : "Experts" },
              { number: "5+", label: currentLang === "pt" ? "Anos" : "Years" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="text-center relative"
              >
                <motion.div 
                  className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#126AF9]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-sm text-[#B6E1F2]/80"
                  animate={{
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Glow Effect for Stats */}
                <motion.div
                  className="absolute inset-0 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] to-[#126AF9] blur-sm opacity-30"
                  animate={{
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {stat.number}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#B6E1F2]/60 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-[#20BCED] to-[#126AF9] rounded-full mt-2"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs text-[#B6E1F2]/60 mt-2 text-center"
        >
          {currentLang === "pt" ? "Deslize para baixo" : "Scroll down"}
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  )
}
