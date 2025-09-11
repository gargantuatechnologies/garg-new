'use client';

import React from 'react';
import Image from 'next/image';
import { Atom, Sparkles, Cpu } from 'lucide-react';

// Componente para o Card de Conceito
const ConceptCard = ({ concept, index, className = "" }: { 
  concept: { icon: any; title: string; description: string }; 
  index: number; 
  className?: string;
}) => (
  <div className={`group relative ${className}`} style={{ animationDelay: `${index * 0.3}s` }}>
    <div className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#126AF9]/20 hover:border-[#20BCED]/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 shadow-xl hover:shadow-xl shadow-[#126AF9]/10 hover:shadow-[#20BCED]/15 animate-concept-float">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#126AF9]/3 via-[#20BCED]/5 to-[#126AF9]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon Container */}
        <div className="mb-4 flex justify-center">
          <div className="relative p-4 rounded-full bg-gradient-to-br from-[#126AF9]/20 to-[#20BCED]/20 border border-[#126AF9]/30 group-hover:border-[#20BCED]/50 transition-all duration-500 group-hover:scale-110 animate-concept-pulse">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 blur-sm"></div>
            <concept.icon className="h-6 w-6 text-[#126AF9] group-hover:text-[#20BCED] transition-colors duration-300 relative z-10" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0a0a0a] mb-3 group-hover:text-[#126AF9] transition-colors duration-300">
          {concept.title}
        </h3>

        {/* Description */}
        <p className="text-[#4a5568] leading-relaxed group-hover:text-[#2d3748] transition-colors duration-300">
          {concept.description}
        </p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#126AF9] rounded-full animate-concept-pulse"></div>
      <div className="absolute bottom-3 left-3 w-1 h-1 bg-[#20BCED] rounded-full animate-concept-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  </div>
);

// Componente para as Linhas Conectoras
const ConnectingLines = () => (
  <div className="absolute inset-0 pointer-events-none z-10">
    <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Gradiente para o raio */}
        <linearGradient id="energy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#126AF9" stopOpacity="0" />
          <stop offset="30%" stopColor="#20BCED" stopOpacity="1" />
          <stop offset="70%" stopColor="#20BCED" stopOpacity="1" />
          <stop offset="100%" stopColor="#126AF9" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Left line - Outline fixo */}
      <line 
        x1="166" 
        y1="500" 
        x2="500" 
        y2="200" 
        stroke="#126AF9" 
        strokeWidth="6" 
        fill="none"
        opacity="0.4"
      />
      
      {/* Left line - Raio interno */}
      <line 
        x1="166" 
        y1="500" 
        x2="500" 
        y2="200" 
        stroke="url(#energy-gradient)" 
        strokeWidth="2" 
        fill="none"
        opacity="0.9"
      >
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s"/>
      </line>
      
      {/* Middle line - Outline fixo */}
      <line 
        x1="500" 
        y1="500" 
        x2="500" 
        y2="200" 
        stroke="#20BCED" 
        strokeWidth="6" 
        fill="none"
        opacity="0.4"
      />
      
      {/* Middle line - Raio interno */}
      <line 
        x1="500" 
        y1="500" 
        x2="500" 
        y2="200" 
        stroke="url(#energy-gradient)" 
        strokeWidth="2" 
        fill="none"
        opacity="0.9"
      >
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.3s"/>
      </line>
      
      {/* Right line - Outline fixo */}
      <line 
        x1="834" 
        y1="500" 
        x2="500" 
        y2="200" 
        stroke="#126AF9" 
        strokeWidth="6" 
        fill="none"
        opacity="0.4"
      />
      
      {/* Right line - Raio interno */}
      <line 
        x1="834" 
        y1="500" 
        x2="500" 
        y2="200" 
        stroke="url(#energy-gradient)" 
        strokeWidth="2" 
        fill="none"
        opacity="0.9"
      >
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.6s"/>
      </line>
    </svg>
  </div>
);

// Componente para a Logo Central
const CentralLogo = () => (
  <div className="flex justify-center mt-8 relative z-20">
    <div className="relative w-28 h-28 soft-3d-white rounded-full flex items-center justify-center animate-concept-glow" id="central-logo">
      <Image
        src="/images/icon-blue.png"
        alt="Gargantua Technologies"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    </div>
  </div>
);

// Componente para o Header da Seção
const ConceptHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a0a0a] via-[#126AF9] to-[#20BCED] mb-6 animate-concept-float">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed animate-concept-pulse">
      {subtitle}
    </p>
    <CentralLogo />
  </div>
);

// Componente para a Malha Gravitacional
const GravitationalMesh = () => (
  <div className="absolute inset-0 opacity-20">
    <svg className="w-full h-full" viewBox="0 0 1000 600">
      <defs>
        <pattern id="gravitational-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#126AF9" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
        <filter id="gravitational-distortion">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#gravitational-grid)" filter="url(#gravitational-distortion)"/>
    </svg>
  </div>
);

// Componente principal da seção
const ConceptSection = ({ currentLang }: { currentLang: string }) => {
const translations = {
  pt: {
    title: "O Conceito por Trás da Singularidade",
    subtitle: "Três dimensões de excelência que nos definem",
    concepts: [
      {
        icon: Atom,
        title: "Singularidade Física",
          description: "Assim como no centro de um buraco negro, nossa expertise em soluções de pagamento e sistemas complexos concentra toda a força necessária para transformar seu negócio."
      },
      {
        icon: Sparkles,
        title: "Singularidade Única",
          description: "Cada solução é singular, customizada e diferenciada. Não trabalhamos com genéricos - cada projeto é único e desenvolvido especificamente para suas necessidades."
      },
      {
        icon: Cpu,
        title: "Singularidade da AGI",
          description: "Utilizamos inteligência artificial avançada e metodologias imersivas para criar soluções que pensam, aprendem e evoluem junto com seu negócio."
        }
      ]
  },
  en: {
    title: "The Concept Behind Singularity",
    subtitle: "Three dimensions of excellence that define us",
    concepts: [
      {
        icon: Atom,
        title: "Physical Singularity",
          description: "Just like at the center of a black hole, our expertise in payment solutions and complex systems concentrates all the force needed to transform your business."
      },
      {
        icon: Sparkles,
        title: "Unique Singularity",
          description: "Each solution is singular, customized and differentiated. We don't work with generics - each project is unique and developed specifically for your needs."
      },
      {
        icon: Cpu,
        title: "AGI Singularity",
          description: "We use advanced artificial intelligence and immersive methodologies to create solutions that think, learn and evolve with your business."
        }
      ]
    }
  };

  const t = translations[currentLang as keyof typeof translations] || translations.pt;

  return (
    <section className="py-24 bg-gradient-to-br from-[#e8eef5] via-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
      {/* Gravitational Mesh Background - Static */}
      <GravitationalMesh />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Layout - Grid */}
        <div className="block lg:hidden">
          <ConceptHeader title={t.title} subtitle={t.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
            {t.concepts.map((concept, index) => (
              <ConceptCard key={index} concept={concept} index={index} />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Clean Grid with Connecting Lines */}
        <div className="hidden lg:block relative max-w-6xl mx-auto py-8">
          <ConceptHeader title={t.title} subtitle={t.subtitle} />
          
          {/* Connecting Lines */}
          <ConnectingLines />

          {/* Cards Grid - Clean and Organized */}
          <div className="grid grid-cols-3 gap-8 relative z-30">
          {t.concepts.map((concept, index) => (
              <ConceptCard key={index} concept={concept} index={index} />
            ))}
              </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;