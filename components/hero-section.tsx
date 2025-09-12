"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    tagline: "Alcance a Singularidade",
    subtitle: "A softwarehouse definitiva para uma solução de ponta a ponta, enxergando além do comum.",
    cta: "Descobrir Soluções",
    ctaSecondary: "Nosso Portfólio",
  },
  en: {
    tagline: "Reach the Singularity",
    subtitle: "The definitive software house for end-to-end solutions, seeing beyond the ordinary.",
    cta: "Discover Solutions",
    ctaSecondary: "Our Portfolio",
  },
}

export function HeroSection({ currentLang }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = translations[currentLang]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const waves: Array<{
      x: number
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
      opacity: number
      direction: number
    }> = []

    for (let i = 0; i < 8; i++) {
      waves.push({
        x: 0,
        y: canvas.height * (0.2 + i * 0.12),
        amplitude: 25 + Math.random() * 40,
        frequency: 0.004 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.0005,
        opacity: 0.02 + Math.random() * 0.06,
        direction: Math.random() > 0.5 ? 1 : -1,
      })
    }

    let time = 0

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + wave.phase + time * wave.speed * wave.direction) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.7 + time * wave.speed * 2) * wave.amplitude * 0.4 +
            Math.cos(x * wave.frequency * 0.3 + time * wave.speed * 0.8) * wave.amplitude * 0.2
          ctx.lineTo(x, y)
        }

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        if (index % 4 === 0) {
          gradient.addColorStop(0, `rgba(32, 188, 237, ${wave.opacity * 0.5})`)
          gradient.addColorStop(0.5, `rgba(18, 106, 249, ${wave.opacity * 0.7})`)
          gradient.addColorStop(1, `rgba(5, 38, 153, ${wave.opacity * 0.4})`)
        } else if (index % 4 === 1) {
          gradient.addColorStop(0, `rgba(197, 212, 230, ${wave.opacity * 0.3})`)
          gradient.addColorStop(0.5, `rgba(139, 155, 179, ${wave.opacity * 0.5})`)
          gradient.addColorStop(1, `rgba(74, 85, 104, ${wave.opacity * 0.3})`)
        } else if (index % 4 === 2) {
          gradient.addColorStop(0, `rgba(182, 225, 242, ${wave.opacity * 0.4})`)
          gradient.addColorStop(0.5, `rgba(32, 188, 237, ${wave.opacity * 0.6})`)
          gradient.addColorStop(1, `rgba(18, 106, 249, ${wave.opacity * 0.3})`)
        } else {
          gradient.addColorStop(0, `rgba(232, 238, 245, ${wave.opacity * 0.2})`)
          gradient.addColorStop(0.5, `rgba(197, 212, 230, ${wave.opacity * 0.4})`)
          gradient.addColorStop(1, `rgba(139, 155, 179, ${wave.opacity * 0.2})`)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: "url('/images/bg-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-background/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-transparent to-black/60" />

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#126AF9]/20 via-[#20BCED]/10 to-transparent blur-3xl animate-subtle-pulse" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#B6E1F2]/15 via-[#c5d4e6]/8 to-transparent blur-2xl animate-gentle-pulse" />
      <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-radial from-[#e8eef5]/10 to-transparent blur-xl animate-intense-pulse" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left column - Content */}
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-none animate-fade-in-up drop-shadow-2xl">
                  {t.tagline}
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#c5d4e6] font-light leading-relaxed max-w-2xl lg:max-w-none animate-fade-in-up-delay-1">
                {t.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start pt-4 lg:pt-8 animate-fade-in-up-delay-2">
                {/* Botão Principal - Descobrir Soluções */}
                <Button
                  size="lg"
                  className="group text-white font-bold px-8 lg:px-12 py-4 lg:py-5 text-base lg:text-lg rounded-2xl transition-all duration-300 relative z-10 overflow-hidden hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0"
                  style={{
                    background: 'linear-gradient(145deg, #126AF9 0%, #20BCED 100%)',
                    boxShadow: `
                      0 8px 24px rgba(18, 106, 249, 0.4),
                      0 4px 12px rgba(18, 106, 249, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                    `,
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 12px 32px rgba(18, 106, 249, 0.5),
                      0 6px 16px rgba(18, 106, 249, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                      0 0 0 1px rgba(32, 188, 237, 0.3)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 8px 24px rgba(18, 106, 249, 0.4),
                      0 4px 12px rgba(18, 106, 249, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                    `;
                  }}
                >
                  {/* Efeito de brilho sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  
                  <ArrowRight className="mr-3 h-5 lg:h-6 w-5 lg:w-6 group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300 relative z-10" />
                  <span className="relative z-10">{t.cta}</span>
                </Button>

                {/* Botão Secundário - Nosso Portfólio */}
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative glass-floating-enhanced border-2 border-[#8b9bb3]/40 hover:border-[#c5d4e6]/60 text-[#c5d4e6] hover:text-[#e8eef5] font-semibold px-8 lg:px-12 py-4 lg:py-5 text-base lg:text-lg rounded-2xl backdrop-blur-xl hover:backdrop-blur-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/5 to-[#20BCED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">{t.ctaSecondary}</span>
                </Button>
              </div>
            </div>

            {/* Right column - Logo */}
            <div className="flex justify-center lg:justify-center mt-12 lg:mt-0">
              <div className="relative animate-magnetic-float">
                <Image
                  src="/images/icon-white.png"
                  alt="Gargantua Icon"
                  width={250}
                  height={250}
                  className="lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] relative z-10 animate-eye-catching-spin drop-shadow-2xl"
                />

                <div className="absolute inset-0 border-2 border-[#126AF9]/40 rounded-full animate-orbital-1 shadow-lg shadow-[#126AF9]/20"></div>
                <div className="absolute inset-6 border-2 border-[#20BCED]/35 rounded-full animate-orbital-2 shadow-lg shadow-[#20BCED]/15"></div>
                <div className="absolute inset-12 border border-[#B6E1F2]/30 rounded-full animate-orbital-3 shadow-md shadow-[#B6E1F2]/10"></div>
                <div className="absolute inset-16 border border-[#e8eef5]/25 rounded-full animate-orbital-4"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/30 to-[#20BCED]/30 rounded-full blur-3xl animate-intense-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-[#20BCED]/35 to-[#B6E1F2]/35 rounded-full blur-2xl animate-gentle-pulse"></div>
                <div className="absolute inset-12 bg-gradient-to-r from-[#e8eef5]/20 to-[#c5d4e6]/20 rounded-full blur-xl animate-subtle-pulse"></div>

                <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#126AF9] rounded-full animate-particle-1 blur-sm shadow-lg shadow-[#126AF9]/50"></div>
                <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-[#20BCED] rounded-full animate-particle-2 blur-sm shadow-lg shadow-[#20BCED]/50"></div>
                <div className="absolute left-0 top-1/2 w-2.5 h-2.5 bg-[#B6E1F2] rounded-full animate-particle-3 blur-sm shadow-md shadow-[#B6E1F2]/40"></div>
                <div className="absolute right-0 bottom-1/4 w-1.5 h-1.5 bg-[#e8eef5] rounded-full animate-particle-4 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8b9bb3] rounded-full flex justify-center glass-minimal-dark backdrop-blur-sm">
          <div className="w-1 h-3 bg-[#c5d4e6] rounded-full mt-2 animate-subtle-pulse"></div>
        </div>
      </div>
    </section>
  )
}
