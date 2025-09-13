'use client'

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, Database, BarChart3, Shield, Cog, ChevronRight, Brain, Coins } from "lucide-react"

interface ServicesSectionProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Nossas Especialidades",
    subtitle: "Soluções completas para impulsionar seu negócio",
    next: "Próximo",
    services: [
      {
        icon: CreditCard,
        title: "Soluções de Pagamento",
        description: "Sistemas de pagamento customizados, gateways seguros e integrações com as principais operadoras do mercado.",
        features: ["Gateways Personalizados", "Antifraude Avançado", "Múltiplas Operadoras"],
        color: "from-[#126AF9] to-[#20BCED]"
      },
      {
        icon: Database,
        title: "Banking as a Service (BaaS)",
        description: "Infraestrutura bancária completa para fintechs e empresas que desejam oferecer serviços financeiros.",
        features: ["APIs Bancárias", "Compliance Automático", "Escalabilidade Total"],
        color: "from-[#20BCED] to-[#B6E1F2]"
      },
      {
        icon: Smartphone,
        title: "Aplicativos Mobile",
        description: "Desenvolvimento de aplicativos nativos e híbridos com foco em performance e experiência do usuário.",
        features: ["iOS & Android", "UX/UI Avançado", "Performance Otimizada"],
        color: "from-[#B6E1F2] to-[#126AF9]"
      },
      {
        icon: Cog,
        title: "Sistemas ERP Complexos",
        description: "ERPs customizados que se adaptam perfeitamente aos processos únicos da sua empresa.",
        features: ["Totalmente Customizável", "Integração Completa", "Automação Inteligente"],
        color: "from-[#126AF9] to-[#20BCED]"
      },
      {
        icon: Brain,
        title: "Inteligência Artificial",
        description: "Soluções de IA avançada para automação, análise de dados e tomada de decisões inteligentes.",
        features: ["Machine Learning", "Processamento de Linguagem", "Visão Computacional"],
        color: "from-[#20BCED] to-[#B6E1F2]"
      },
      {
        icon: Coins,
        title: "Web3 e Tokenização",
        description: "Desenvolvimento de soluções blockchain, smart contracts e sistemas de tokenização para o futuro digital.",
        features: ["Smart Contracts", "NFTs e Tokens", "DeFi Solutions"],
        color: "from-[#B6E1F2] to-[#126AF9]"
      },
    ],
  },
  en: {
    title: "Our Specialties",
    subtitle: "Complete solutions to boost your business",
    next: "Next",
    services: [
      {
        icon: CreditCard,
        title: "Payment Solutions",
        description: "Customized payment systems, secure gateways and integrations with major market operators.",
        features: ["Custom Gateways", "Advanced Anti-fraud", "Multiple Operators"],
        color: "from-[#126AF9] to-[#20BCED]"
      },
      {
        icon: Database,
        title: "Banking as a Service (BaaS)",
        description: "Complete banking infrastructure for fintechs and companies that want to offer financial services.",
        features: ["Banking APIs", "Automatic Compliance", "Total Scalability"],
        color: "from-[#20BCED] to-[#B6E1F2]"
      },
      {
        icon: Smartphone,
        title: "Mobile Applications",
        description: "Development of native and hybrid applications focused on performance and user experience.",
        features: ["iOS & Android", "Advanced UX/UI", "Optimized Performance"],
        color: "from-[#B6E1F2] to-[#126AF9]"
      },
      {
        icon: Cog,
        title: "Complex ERP Systems",
        description: "Customized ERPs that perfectly adapt to your company's unique processes.",
        features: ["Fully Customizable", "Complete Integration", "Intelligent Automation"],
        color: "from-[#126AF9] to-[#20BCED]"
      },
      {
        icon: Brain,
        title: "Artificial Intelligence",
        description: "Advanced AI solutions for automation, data analysis and intelligent decision making.",
        features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
        color: "from-[#20BCED] to-[#B6E1F2]"
      },
      {
        icon: Coins,
        title: "Web3 and Tokenization",
        description: "Development of blockchain solutions, smart contracts and tokenization systems for the digital future.",
        features: ["Smart Contracts", "NFTs and Tokens", "DeFi Solutions"],
        color: "from-[#B6E1F2] to-[#126AF9]"
      },
    ],
  },
}

// Componente para o Card de Serviço Principal
const MainServiceCard = ({ service }: { service: any }) => (
  <Card className="p-6 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#126AF9]/30 hover:border-[#20BCED]/50 transition-all duration-500 group">
    {/* Icon */}
    <div className="mb-4 flex justify-center">
      <div className="relative p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
        {/* Animated gradient border - only border, no fill */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent" style={{
          background: 'linear-gradient(45deg, #126AF9, #20BCED, #B6E1F2, #126AF9)',
          backgroundSize: '400% 400%',
          animation: 'gradient-flow 3s ease infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}></div>
        {/* Icon with simple color */}
        <div className="relative z-10">
          <service.icon className="h-6 w-6 text-[#20BCED]" strokeWidth={1.5} />
        </div>
                </div>
              </div>

    {/* Title */}
    <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-[#20BCED] transition-colors duration-300">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-[#B6E1F2] mb-4 leading-relaxed text-center text-base">
      {service.description}
    </p>

    {/* Features */}
    <ul className="space-y-3 mb-6">
      {service.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="text-white/80 text-sm flex items-center">
          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

            </Card>
)

// Componente para o Item da Lista de Serviços
const ServiceListItem = ({ 
  service, 
  index, 
  isActive, 
  onClick 
}: { 
  service: any; 
  index: number; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 border-[#20BCED]/50 scale-105'
        : 'bg-black/20 border-[#126AF9]/20 hover:border-[#20BCED]/30 hover:bg-black/30'
    }`}
  >
    <div className="flex items-center space-x-3">
      {/* Service Icon */}
      <div className={`p-2 rounded-lg w-10 h-10 flex items-center justify-center relative`}>
        {isActive && (
          <div className="absolute inset-0 rounded-lg border-2 border-transparent" style={{
            background: 'linear-gradient(45deg, #126AF9, #20BCED, #B6E1F2, #126AF9)',
            backgroundSize: '400% 400%',
            animation: 'gradient-flow 3s ease infinite',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}></div>
        )}
        <div className="relative z-10">
          <service.icon className="h-5 w-5 text-[#20BCED]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Service Info */}
      <div className="flex-1">
        <h4 className="text-base font-semibold text-white">
          {service.title}
        </h4>
      </div>

      {/* Arrow */}
      <ChevronRight className={`h-4 w-4 transition-colors duration-300 ${
        isActive ? 'text-[#20BCED]' : 'text-white/40'
      }`} />
    </div>
  </div>
)

// Componente para o Header da Seção
const ServicesHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-4">
      {title}
    </h2>
    <p className="text-lg text-[#B6E1F2] max-w-2xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
)

// Componente para o Background da Seção
const ServicesBackground = ({ currentService, sectionRef }: { currentService: number; sectionRef: React.RefObject<HTMLElement> }) => {
  const glowRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        // Cancelar animação anterior se existir
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
        
        // Usar requestAnimationFrame para movimento suave
        animationId = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.left = `${x}px`
            glowRef.current.style.top = `${y}px`
            glowRef.current.style.transform = 'translate(-50%, -50%)'
            glowRef.current.style.opacity = '1'
          }
        })
      }
      
      // Mostrar linhas metálicas
      const metallicLines = document.getElementById('metallic-lines')
      if (metallicLines) {
        metallicLines.style.opacity = '0.6'
      }
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0'
      }
      
      // Esconder linhas metálicas
      const metallicLines = document.getElementById('metallic-lines')
      if (metallicLines) {
        metallicLines.style.opacity = '0'
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove, { passive: true })
      section.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseleave', handleMouseLeave)
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
      }
    }
  }, [])

  return (
  <div className="absolute inset-0 overflow-hidden">
    {/* Static gradient orbs - no animation */}
    <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#B6E1F2]/8 to-[#126AF9]/8 rounded-full blur-2xl"></div>
    
    {/* Additional static orbs */}
    <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-[#126AF9]/6 to-[#B6E1F2]/6 rounded-full blur-2xl"></div>
    <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-[#20BCED]/8 to-[#126AF9]/8 rounded-full blur-xl"></div>
    
    {/* Mouse follow illumination effect */}
    <div className="absolute inset-0 pointer-events-none">
      <div ref={glowRef} className="absolute w-96 h-96 rounded-full blur-3xl opacity-0 transition-opacity duration-200" 
           style={{
             left: '50%',
             top: '50%',
             transform: 'translate(-50%, -50%)',
             background: 'radial-gradient(circle, rgba(32, 188, 237, 0.1) 0%, rgba(18, 106, 249, 0.05) 30%, transparent 70%)',
             willChange: 'transform, opacity'
           }}></div>
    </div>
    


    {/* Static grid pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="services-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#126AF9" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="metallic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#126AF9" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#20BCED" stopOpacity="1"/>
            <stop offset="100%" stopColor="#B6E1F2" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#services-grid)"/>
        {/* Linhas metálicas que aparecem no hover */}
        <g className="opacity-0 transition-opacity duration-500" id="metallic-lines">
          <path d="M 0 0 L 100 0" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.8"/>
          <path d="M 0 0 L 0 100" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.8"/>
          <path d="M 50 0 L 50 100" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.6"/>
          <path d="M 0 50 L 100 50" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.6"/>
          <path d="M 25 0 L 25 100" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.4"/>
          <path d="M 75 0 L 75 100" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.4"/>
          <path d="M 0 25 L 100 25" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.4"/>
          <path d="M 0 75 L 100 75" fill="none" stroke="url(#metallic-gradient)" strokeWidth="0.4"/>
        </g>
      </svg>
    </div>
  </div>
  )
}

// CSS Animations
const styles = `
  @keyframes gradient-flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}



// Componente principal
export function ServicesSection({ currentLang }: ServicesSectionProps) {
  const [currentService, setCurrentService] = useState(0)
  const sectionRef = React.useRef<HTMLElement>(null)
  const t = translations[currentLang]


  const selectService = (index: number) => {
    setCurrentService(index)
  }

  const current = t.services[currentService]

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden">
      {/* Background */}
      <ServicesBackground currentService={currentService} sectionRef={sectionRef} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ServicesHeader title={t.title} subtitle={t.subtitle} />

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Service Info */}
            <div className="space-y-6">
              <MainServiceCard service={current} />
            </div>

            {/* Right Side - Service List */}
            <div className="space-y-3">
              {t.services.map((service, index) => (
                <ServiceListItem
                  key={index}
                  service={service}
                  index={index}
                  isActive={index === currentService}
                  onClick={() => selectService(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}