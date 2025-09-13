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
  id: 1,
  title: "Grupo Fast",
  subtitle: "FastPay & FastSoft",
  description: "Parceria estratégica para transformar o white-label da FastSoft em uma solução completamente personalizável, aumentando exponencialmente a demanda e satisfação dos clientes.",
  category: "Pagamentos",
  images: [
    "/images/fast-group-cases/ALLUS-DASH.png",
    "/images/fast-group-cases/app-payhub.png",
    "/images/fast-group-cases/App-fastpay-mockup.png",
    "/images/fast-group-cases/dashboard-payhub.png"
  ],
  technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"],
  challenge: "Time de desenvolvimento alocado internamente, demanda crescente por personalizações no sistema white-label.",
  solution: "Atuamos como parceiros oficiais de personalização e integração, liderando a frente de aplicativos mobile e transformando o produto em uma solução totalmente customizável.",
  results: [
    "Aumento de 500% na demanda por personalizações",
    "Redução de 70% no tempo de desenvolvimento",
    "Satisfação do cliente de 98%",
    "Uptime de 99.9% em produção"
  ],
  stats: {
    clients: "20+",
    satisfaction: "98%",
    uptime: "99.9%",
    efficiency: "70%"
  }
}

export default function GrupoFastPage() {
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
