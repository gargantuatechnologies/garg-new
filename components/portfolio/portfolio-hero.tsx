"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"

interface PortfolioHeroProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nossos",
    titleSecond: "Projetos",
    subtitle: "Transformações reais que impactaram o mercado."
  },
  en: {
    title: "Our",
    titleSecond: "Projects",
    subtitle: "Real transformations that impacted the market."
  }
}

export function PortfolioHero({ currentLang }: PortfolioHeroProps) {
  const t = translations[currentLang]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Black Hole Animation Background */}
      <div className="absolute inset-0">
        {/* Black Hole Core - Central void */}
        <motion.div
          className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div 
            className="w-full h-full bg-black rounded-full"
            style={{
              boxShadow: '0 0 20px #20BCED, 0 0 40px #126AF9, inset 0 0 20px #20BCED'
            }}
          />
        </motion.div>

        {/* Accretion Disk - Outer ring */}
        <motion.div
          className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.div 
            className="w-full h-full rounded-full border-2 border-transparent"
            style={{
              background: 'conic-gradient(from 0deg, transparent, #126AF9/20, #20BCED/40, #126AF9/60, #20BCED/80, #126AF9/60, #20BCED/40, #126AF9/20, transparent)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Accretion Disk - Inner ring */}
        <motion.div
          className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          <motion.div 
            className="w-full h-full rounded-full border-2 border-transparent"
            style={{
              background: 'conic-gradient(from 180deg, transparent, #20BCED/30, #126AF9/50, #20BCED/70, #126AF9/50, #20BCED/30, transparent)'
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Accretion Disk - Middle ring */}
        <motion.div
          className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        >
          <motion.div 
            className="w-full h-full rounded-full border-2 border-transparent"
            style={{
              background: 'conic-gradient(from 90deg, transparent, #126AF9/40, #20BCED/60, #126AF9/80, #20BCED/60, #126AF9/40, transparent)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

         {/* Event Horizon - Glowing edge */}
         <motion.div
           className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full"
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 2, delay: 1.6 }}
         >
           <motion.div 
             className="w-full h-full rounded-full"
             style={{
               background: 'radial-gradient(circle, transparent 40%, #20BCED/20 50%, #126AF9/40 60%, transparent 70%)'
             }}
             animate={{ 
               scale: [1, 1.05, 1],
               opacity: [0.3, 0.8, 0.3]
             }}
             transition={{ 
               duration: 3, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
           />
         </motion.div>

         {/* Pulsating Glow Spots - Oscilating glow effect */}
         {[...Array(8)].map((_, i) => {
           const angle = (i / 8) * 360;
           const radius = 175; // Half of 350px
           const baseX = 50 + Math.cos(angle * Math.PI / 180) * (radius / 10);
           const baseY = 50 + Math.sin(angle * Math.PI / 180) * (radius / 10);
           
           return (
             <motion.div
               key={`glow-spot-${i}`}
               className="absolute w-8 h-8 rounded-full"
               style={{
                 background: 'radial-gradient(circle, #20BCED/60, #126AF9/40, transparent)',
                 filter: 'blur(4px)',
               }}
               animate={{
                 x: [baseX - 4, baseX + 4, baseX - 4],
                 y: [baseY - 4, baseY + 4, baseY - 4],
                 scale: [0, 1.5, 0],
                 opacity: [0, 0.8, 0],
               }}
               transition={{
                 duration: 2 + i * 0.3,
                 repeat: Infinity,
                 delay: i * 0.4,
                 ease: "easeInOut"
               }}
             />
           );
         })}

         {/* Cosmic Rays - Radial energy beams */}
         {[...Array(16)].map((_, i) => {
           const angle = (i / 16) * 360;
           const startRadius = 175; // Edge of event horizon
           const endRadius = 300 + (i % 4) * 50; // Vary length
           const startX = 50 + Math.cos(angle * Math.PI / 180) * (startRadius / 10);
           const startY = 50 + Math.sin(angle * Math.PI / 180) * (startRadius / 10);
           const endX = 50 + Math.cos(angle * Math.PI / 180) * (endRadius / 10);
           const endY = 50 + Math.sin(angle * Math.PI / 180) * (endRadius / 10);
           
           return (
             <motion.div
               key={`cosmic-ray-${i}`}
               className="absolute"
               style={{
                 left: `${startX}%`,
                 top: `${startY}%`,
                 transform: 'translate(-50%, -50%)',
                 width: `${Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)}%`,
                 height: '2px',
                 background: 'linear-gradient(90deg, #20BCED/80, #126AF9/60, #20BCED/40, transparent)',
                 filter: 'blur(1px)',
                 transformOrigin: 'left center',
                 rotate: `${angle}deg`,
               }}
               animate={{
                 scaleX: [0, 1, 0],
                 opacity: [0, 0.8, 0],
               }}
               transition={{
                 duration: 2 + (i % 3) * 0.5,
                 repeat: Infinity,
                 delay: i * 0.3,
                 ease: "easeInOut"
               }}
             />
           );
         })}

         {/* Cosmic Ray Particles - Energy sparks */}
         {[...Array(20)].map((_, i) => {
           const angle = (i / 20) * 360 + (i % 3) * 15; // Deterministic offset
           const radius = 200 + (i % 4) * 40; // Vary radius deterministically
           const baseX = 50 + Math.cos(angle * Math.PI / 180) * (radius / 10);
           const baseY = 50 + Math.sin(angle * Math.PI / 180) * (radius / 10);
           
           return (
             <motion.div
               key={`ray-particle-${i}`}
               className="absolute w-1 h-1 rounded-full"
               style={{
                 background: 'radial-gradient(circle, #20BCED, #126AF9/60, transparent)',
                 filter: 'blur(0.5px)',
               }}
               animate={{
                 x: [baseX - 10, baseX + 10, baseX - 10],
                 y: [baseY - 10, baseY + 10, baseY - 10],
                 scale: [0, 2, 0],
                 opacity: [0, 1, 0],
               }}
               transition={{
                 duration: 1 + (i % 3) * 0.5,
                 repeat: Infinity,
                 delay: i * 0.2,
                 ease: "easeInOut"
               }}
             />
           );
         })}

         {/* Additional Random Glow Particles */}
         {[...Array(8)].map((_, i) => {
           const angle = (i / 8) * 360 + 15; // Offset for variety
           const radius = 160 + (i % 3) * 10; // Vary radius
           const baseX = 50 + Math.cos(angle * Math.PI / 180) * (radius / 10);
           const baseY = 50 + Math.sin(angle * Math.PI / 180) * (radius / 10);
           
           return (
             <motion.div
               key={`random-glow-${i}`}
               className="absolute w-4 h-4 rounded-full"
               style={{
                 background: 'radial-gradient(circle, #126AF9/70, #20BCED/50, transparent)',
                 filter: 'blur(2px)',
               }}
               animate={{
                 x: [baseX - 2, baseX + 2, baseX - 2],
                 y: [baseY - 2, baseY + 2, baseY - 2],
                 scale: [0, 1.2, 0],
                 opacity: [0, 1, 0],
                 rotate: [0, 180, 360],
               }}
               transition={{
                 duration: 1.5 + (i % 3) * 0.5,
                 repeat: Infinity,
                 delay: i * 0.2,
                 ease: "easeInOut"
               }}
             />
           );
         })}

        {/* Spiral Arms - Flowing matter */}
        <motion.div
          className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] lg:w-[800px] lg:h-[800px] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
        >
          <motion.div 
            className="w-full h-full rounded-full"
            style={{
              background: 'conic-gradient(from 45deg, transparent, #126AF9/10, transparent, #20BCED/15, transparent, #126AF9/10, transparent)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Matter Streams - Infalling material */}
        <motion.div
          className="absolute top-[35%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <motion.div 
            className="w-full h-full rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, #20BCED/5, transparent, #126AF9/8, transparent, #20BCED/5, transparent)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Black Hole Matter Particles */}
        <div className="absolute inset-0">
          {/* Infalling matter particles */}
          {[...Array(30)].map((_, i) => {
            const angle = (i / 30) * 360;
            const distance = 200 + Math.random() * 300;
            const startX = 50 + Math.cos(angle * Math.PI / 180) * (distance / 10);
            const startY = 50 + Math.sin(angle * Math.PI / 180) * (distance / 10);
            
            return (
              <motion.div
                key={`matter-${i}`}
                className="absolute w-1 h-1 bg-gradient-to-r from-[#20BCED] to-[#126AF9] rounded-full"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                }}
                animate={{
                  x: [0, (50 - startX) * 10, 0],
                  y: [0, (50 - startY) * 10, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: "easeIn"
                }}
              />
            );
          })}
          
          {/* Accretion disk particles */}
          {[...Array(20)].map((_, i) => {
            const angle = (i / 20) * 360;
            const radius = 250 + Math.random() * 100;
            const x = 50 + Math.cos(angle * Math.PI / 180) * (radius / 10);
            const y = 50 + Math.sin(angle * Math.PI / 180) * (radius / 10);
            
            return (
              <motion.div
                key={`accretion-${i}`}
                className="absolute w-0.5 h-0.5 bg-[#20BCED]/60 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 15 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              />
            );
          })}
          
          {/* Event horizon glow particles */}
          {[...Array(15)].map((_, i) => {
            const angle = (i / 15) * 360;
            const radius = 150 + Math.random() * 50;
            const x = 50 + Math.cos(angle * Math.PI / 180) * (radius / 10);
            const y = 50 + Math.sin(angle * Math.PI / 180) * (radius / 10);
            
            return (
              <motion.div
                key={`horizon-${i}`}
                className="absolute w-1 h-1 bg-[#126AF9]/40 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>

        {/* Very subtle dark shimmer */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
          style={{
            animation: 'metallicShimmer 15s ease-in-out infinite',
            transform: 'skewX(-15deg)',
          }}
        />
        
        {/* Minimal blue accent shimmer */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#20BCED]/2 to-transparent"
          style={{
            animation: 'metallicShimmer 20s ease-in-out infinite',
            transform: 'skewX(15deg)',
          }}
        />
      </div>

       {/* Título - Posicionamento absoluto independente */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="absolute top-[32%] lg:top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4"
       >
         <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] leading-tight">
           {t.title}
           <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] via-[#B6E1F2] to-[#126AF9]">
             {t.titleSecond}
           </span>
         </h1>
       </motion.div>

       {/* Subtítulo - Posicionamento absoluto independente */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.3 }}
         className="absolute top-[75%] lg:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4 max-w-2xl"
       >
         <p className="text-lg md:text-xl text-[#B6E1F2] leading-relaxed">
           {t.subtitle}
         </p>
       </motion.div>

      {/* Scroll Indicator - Minimalista */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#B6E1F2]/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-[#B6E1F2]/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Minimal Dark Particles with Very Subtle Blue Accents */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-dark-${i}`}
            className="absolute w-1 h-1 bg-black/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 0.8, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
        
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`blue-accent-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#20BCED]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
        
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`blue-bright-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#126AF9]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  )
}
