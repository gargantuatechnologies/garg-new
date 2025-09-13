"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProjectHero } from "@/components/portfolio/project-hero"
import { ProjectGallery } from "@/components/portfolio/project-gallery"
import { ProjectDetails } from "@/components/portfolio/project-details"
import { ProjectStats } from "@/components/portfolio/project-stats"
import { ProjectTech } from "@/components/portfolio/project-tech"
import { ProjectCTA } from "@/components/portfolio/project-cta"

const projectData = {
  id: 2,
  title: "DCréditos",
  subtitle: "Empréstimos para MPEs",
  description: "Desenvolvimento de sistema completo que revolucionou as operações da DCréditos, reduzindo fraudes em 90% e otimizando drasticamente os processos internos.",
  category: "Fintech",
  images: [
    "/images/midas-case/dcredito-operators-ranking.png",
    "/images/midas-case/MIDAS PHONES 1.png",
    "/images/midas-case/Screenshot_1.png",
    "/images/midas-case/Screenshot_16.png"
  ],
  technologies: ["React", "Python", "Machine Learning", "Docker", "PostgreSQL", "TensorFlow"],
  challenge: "Sistema engessado, dificuldade de escalar, fraudes por múltiplas contas bancárias e conciliação manual.",
  solution: "Construímos um sistema sob medida utilizando IA para cobranças e BaaS próprio, automatizando transações e aumentando a visibilidade de métricas.",
  results: [
    "Redução de 90% nas fraudes",
    "Aumento de 85% na eficiência operacional",
    "Processamento 3x mais rápido",
    "Automação de 95% dos processos"
  ],
  stats: {
    fraudReduction: "90%",
    efficiency: "85%",
    processing: "3x mais rápido",
    automation: "95%"
  }
}

export default function DCreditosPage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
           <Header currentLang={currentLang} onLanguageChange={setCurrentLang} currentPage="project" />
      <ProjectHero project={projectData} />
      <ProjectGallery images={projectData.images} title={projectData.title} />
      <ProjectDetails 
        challenge={projectData.challenge}
        solution={projectData.solution}
        results={projectData.results}
      />
      <ProjectStats stats={projectData.stats} />
      <ProjectTech technologies={projectData.technologies} />
      <ProjectCTA />
    </div>
  )
}
