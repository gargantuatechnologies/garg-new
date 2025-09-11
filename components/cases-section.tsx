'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface CasesSectionProps {
  currentLang: 'pt' | 'en';
}

const translations = {
  pt: {
    title: "Nossos Cases",
    subtitle: "Projetos que transformaram negócios e definiram o futuro",
    cta: "Ver Todos os Cases",
    cases: [
      {
        id: 1,
        title: "Fintech Revolution",
        description: "Plataforma de pagamentos completa que processou mais de R$ 50 milhões em transações no primeiro ano.",
        category: "Fintech",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        image: "/placeholder.jpg",
        link: "#",
        github: "#",
        stats: {
          transactions: "R$ 50M+",
          users: "10K+",
          uptime: "99.9%"
        }
      },
      {
        id: 2,
        title: "E-commerce Intelligence",
        description: "Sistema de BI avançado que aumentou as vendas em 300% através de análises preditivas.",
        category: "E-commerce",
        technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"],
        image: "/placeholder.jpg",
        link: "#",
        github: "#",
        stats: {
          sales: "+300%",
          users: "25K+",
          accuracy: "95%"
        }
      },
      {
        id: 3,
        title: "Banking as a Service",
        description: "Infraestrutura bancária completa que permitiu a criação de 15+ fintechs em 6 meses.",
        category: "BaaS",
        technologies: ["Go", "Microservices", "Redis", "MongoDB"],
        image: "/placeholder.jpg",
        link: "#",
        github: "#",
        stats: {
          apis: "50+",
          fintechs: "15+",
          latency: "<100ms"
        }
      }
    ]
  },
  en: {
    title: "Our Cases",
    subtitle: "Projects that transformed businesses and defined the future",
    cta: "View All Cases",
    cases: [
      {
        id: 1,
        title: "Fintech Revolution",
        description: "Complete payment platform that processed over $10 million in transactions in the first year.",
        category: "Fintech",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        image: "/placeholder.jpg",
        link: "#",
        github: "#",
        stats: {
          transactions: "$10M+",
          users: "10K+",
          uptime: "99.9%"
        }
      },
      {
        id: 2,
        title: "E-commerce Intelligence",
        description: "Advanced BI system that increased sales by 300% through predictive analytics.",
        category: "E-commerce",
        technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"],
        image: "/placeholder.jpg",
        link: "#",
        github: "#",
        stats: {
          sales: "+300%",
          users: "25K+",
          accuracy: "95%"
        }
      },
      {
        id: 3,
        title: "Banking as a Service",
        description: "Complete banking infrastructure that enabled the creation of 15+ fintechs in 6 months.",
        category: "BaaS",
        technologies: ["Go", "Microservices", "Redis", "MongoDB"],
        image: "/placeholder.jpg",
        link: "#",
        github: "#",
        stats: {
          apis: "50+",
          fintechs: "15+",
          latency: "<100ms"
        }
      }
    ]
  }
};

// Componente para o Card de Case
const CaseCard = ({ case: caseItem, index }: { case: any; index: number }) => (
  <Card className="group relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#126AF9]/20 hover:border-[#20BCED]/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-gradient-to-br from-[#126AF9]/10 via-transparent to-[#20BCED]/10"></div>
    </div>
    
    {/* Content */}
    <div className="relative z-10 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#20BCED] bg-[#20BCED]/10 rounded-full mb-2">
            {caseItem.category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-[#20BCED] transition-colors duration-300">
            {caseItem.title}
          </h3>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-[#126AF9]/20">
            <ExternalLink className="h-4 w-4 text-[#20BCED]" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-[#126AF9]/20">
            <Github className="h-4 w-4 text-[#20BCED]" />
          </Button>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#B6E1F2] text-sm leading-relaxed mb-4">
        {caseItem.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {Object.entries(caseItem.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-lg font-bold text-[#20BCED]">{value}</div>
            <div className="text-xs text-[#B6E1F2] capitalize">{key}</div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {caseItem.technologies.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="px-2 py-1 text-xs text-[#126AF9] bg-[#126AF9]/10 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Button 
        className="w-full bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:opacity-90 text-white font-semibold py-2 text-sm transition-all duration-300 group-hover:scale-105"
        style={{
          background: 'linear-gradient(45deg, #126AF9, #20BCED, #B6E1F2, #126AF9)',
          backgroundSize: '200% 200%',
          animation: 'gradient-flow 3s ease infinite'
        }}
      >
        <span className="relative z-10">Ver Detalhes</span>
        <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
      </Button>
    </div>

    {/* Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/5 via-[#20BCED]/10 to-[#126AF9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </Card>
);

// Componente principal
export function CasesSection({ currentLang }: CasesSectionProps) {
  const t = translations[currentLang];

  return (
    <section className="py-16 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#B6E1F2]/8 to-[#126AF9]/8 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-[#B6E1F2] max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} case={caseItem} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:opacity-90 text-white font-bold px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(45deg, #126AF9, #20BCED, #B6E1F2, #126AF9)',
              backgroundSize: '200% 200%',
              animation: 'gradient-flow 3s ease infinite'
            }}
          >
            <span className="relative z-10">{t.cta}</span>
            <ArrowRight className="ml-3 h-5 w-5 relative z-10" />
          </Button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
