'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CasesSectionProps {
  currentLang: 'pt' | 'en';
}

const translations = {
  pt: {
    title: "Nossos Cases",
    subtitle: "Transformações reais que impactaram o mercado brasileiro",
    cases: [
      {
        id: 1,
        title: "Grupo Fast",
        subtitle: "FastPay & FastSoft",
        description: "Parceria estratégica para transformar o white-label da FastSoft em uma solução completamente personalizável, aumentando exponencialmente a demanda e satisfação dos clientes.",
        challenge: "Time de desenvolvimento alocado internamente, demanda crescente por personalizações no sistema white-label.",
        solution: "Atuamos como parceiros oficiais de personalização e integração, liderando a frente de aplicativos mobile e transformando o produto em uma solução totalmente customizável.",
        category: "Pagamentos",
        images: [
          "/images/fast-group-cases/ALLUS-DASH.png",
          "/images/fast-group-cases/app-payhub.png",
          "/images/fast-group-cases/App-fastpay-mockup.png",
          "/images/fast-group-cases/dashboard-payhub.png"
        ],
        stats: {}
      },
      {
        id: 2,
        title: "DCréditos",
        subtitle: "Empréstimos para MPEs",
        description: "Desenvolvimento de sistema completo que revolucionou as operações da DCréditos, reduzindo fraudes em 90% e otimizando drasticamente os processos internos.",
        challenge: "Sistema engessado, dificuldade de escalar, fraudes por múltiplas contas bancárias e conciliação manual.",
        solution: "Construímos um sistema sob medida utilizando IA para cobranças e BaaS próprio, automatizando transações e aumentando a visibilidade de métricas.",
        category: "Fintech",
        images: [
          "/images/midas-case/dcredito-operators-ranking.png",
          "/images/midas-case/MIDAS PHONES 1.png",
          "/images/midas-case/Screenshot_1.png",
          "/images/midas-case/Screenshot_16.png"
        ],
        stats: {}
      }
    ]
  },
  en: {
    title: "Our Cases",
    subtitle: "Real transformations that impacted the Brazilian market",
    cases: [
      {
        id: 1,
        title: "Grupo Fast",
        subtitle: "FastPay & FastSoft",
        description: "Strategic partnership to transform FastSoft's white-label into a completely customizable solution, exponentially increasing demand and client satisfaction.",
        challenge: "Development team allocated internally, growing demand for white-label system customizations.",
        solution: "We acted as official customization and integration partners, leading the mobile apps front and transforming the product into a fully customizable solution.",
        category: "Payments",
        images: [
          "/images/fast-group-cases/ALLUS-DASH.png",
          "/images/fast-group-cases/app-payhub.png",
          "/images/fast-group-cases/App-fastpay-mockup.png",
          "/images/fast-group-cases/dashboard-payhub.png"
        ],
        stats: {}
      },
      {
        id: 2,
        title: "DCréditos",
        subtitle: "Loans for SMEs",
        description: "Complete system development that revolutionized DCréditos operations, reducing fraud by 90% and drastically optimizing internal processes.",
        challenge: "Rigid system, scaling difficulties, fraud from multiple bank accounts and manual reconciliation.",
        solution: "We built a tailored system using AI for collections and proprietary BaaS, automating transactions and increasing metrics visibility.",
        category: "Fintech",
        images: [
          "/images/midas-case/dcredito-operators-ranking.png",
          "/images/midas-case/MIDAS PHONES 1.png",
          "/images/midas-case/Screenshot_1.png",
          "/images/midas-case/Screenshot_16.png"
        ],
        stats: {}
      }
    ]
  }
};

// Componente para o Card de Case no Carrossel
const CaseCard = ({ case: caseItem, onPrev, onNext, onSetCase, currentCase, totalCases, currentLang }: { 
  case: any; 
  onPrev: () => void; 
  onNext: () => void; 
  onSetCase: (index: number) => void;
  currentCase: number; 
  totalCases: number; 
  currentLang: 'pt' | 'en';
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Reset image index when case changes
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentCase]);

  const nextImage = () => {
    if (caseItem.images && caseItem.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % caseItem.images.length);
    }
  };

  const prevImage = () => {
    if (caseItem.images && caseItem.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + caseItem.images.length) % caseItem.images.length);
    }
  };

  return (
  <div className="relative w-full h-[600px]">
    {/* Content */}
    <div className="absolute inset-0 flex items-center px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-4">
          {/* Category & Title */}
          <div>
            <span className="inline-block px-4 py-2 text-sm font-semibold text-[#20BCED] bg-[#20BCED]/20 rounded-full mb-4">
              {caseItem.category}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
              {caseItem.title}
            </h2>
            <h3 className="text-lg lg:text-xl text-[#20BCED] font-semibold">
              {caseItem.subtitle}
            </h3>
          </div>

          {/* Description */}
          <p className="text-base text-[#B6E1F2] leading-relaxed">
            {caseItem.description}
          </p>

          {/* Challenge & Solution */}
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-semibold text-[#20BCED] mb-1">O DESAFIO:</h4>
              <p className="text-xs text-[#B6E1F2]">{caseItem.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#20BCED] mb-1">NOSSA SOLUÇÃO:</h4>
              <p className="text-xs text-[#B6E1F2]">{caseItem.solution}</p>
            </div>
          </div>

        </div>

        {/* Right Side - Image Gallery */}
        <div className="relative">
          <div className="w-full h-80 rounded-xl overflow-hidden border border-[#126AF9]/30 relative group bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
            <img
              src={caseItem.images ? caseItem.images[currentImageIndex] : caseItem.image}
              alt={caseItem.title}
              className="w-full h-full object-contain transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Image Navigation - Only show if multiple images */}
            {caseItem.images && caseItem.images.length > 1 && (
              <>
                {/* Previous Image Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                {/* Next Image Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {currentImageIndex + 1} / {caseItem.images.length}
                </div>
                
                {/* Image Dots */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {caseItem.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="flex items-center space-x-2 bg-[#126AF9]/20 hover:bg-[#126AF9]/30 text-[#20BCED] border border-[#126AF9]/30 hover:border-[#20BCED]/50 transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Anterior</span>
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {Array.from({ length: totalCases }, (_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  onSetCase(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCase 
                    ? 'bg-[#20BCED] scale-125' 
                    : 'bg-[#126AF9]/40 hover:bg-[#126AF9]/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="flex items-center space-x-2 bg-[#126AF9]/20 hover:bg-[#126AF9]/30 text-[#20BCED] border border-[#126AF9]/30 hover:border-[#20BCED]/50 transition-all duration-300"
          >
            <span>Próximo</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Ver Portfolio Button */}
        <Button
          onClick={() => window.location.href = '/portfolio'}
          className="group relative glass-floating-enhanced border-2 border-[#8b9bb3]/40 hover:border-[#c5d4e6]/60 text-[#c5d4e6] hover:text-[#e8eef5] font-light px-6 py-3 text-base rounded-2xl backdrop-blur-xl hover:backdrop-blur-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/5 to-[#20BCED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10">
            {currentLang === 'pt' ? 'Ver Portfolio' : 'View Portfolio'}
          </span>
        </Button>
      </div>
    </div>
  </div>
  );
};

// Componente principal
export function CasesSection({ currentLang }: CasesSectionProps) {
  const [currentCase, setCurrentCase] = useState(0);
  const t = translations[currentLang];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % t.cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + t.cases.length) % t.cases.length);
  };

  return (
    <section id="cases" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/20 via-transparent to-[#20BCED]/20"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#126AF9]/10 to-[#20BCED]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#20BCED]/10 to-[#B6E1F2]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-[#B6E1F2]/8 to-[#126AF9]/8 rounded-full blur-2xl"></div>
      </div>

      {/* Carousel */}
      <div className="relative h-[600px]">
        {/* Header */}
        <div className="absolute -top-2 left-0 right-0 text-center px-4 z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-1">
            {t.title}
          </h2>
          <p className="text-lg text-[#B6E1F2] max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        <CaseCard 
          key={t.cases[currentCase].id} 
          case={t.cases[currentCase]} 
          onPrev={prevCase}
          onNext={nextCase}
          onSetCase={setCurrentCase}
          currentCase={currentCase}
          totalCases={t.cases.length}
          currentLang={currentLang}
        />
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
