"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  category: string
  image: string
  images: string[]
  technologies: string[]
  stats: Record<string, string>
  featured: boolean
}

interface PortfolioCardProps {
  project: Project
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    featured: "Destaque",
    viewDetails: "Ver Detalhes"
  },
  en: {
    featured: "Featured",
    viewDetails: "View Details"
  }
}

export function PortfolioCard({ project, currentLang }: PortfolioCardProps) {
  const t = translations[currentLang]
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#126AF9]/20 rounded-3xl overflow-hidden hover:border-[#20BCED]/40 transition-all duration-500">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#126AF9] to-[#20BCED] rounded-full text-white text-xs font-semibold">
              <Star className="h-3 w-3" />
              {t.featured}
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#126AF9]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#20BCED] bg-[#20BCED]/10 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#20BCED] group-hover:to-[#B6E1F2] transition-all duration-300">
            {project.title}
          </h3>
          
          <h4 className="text-lg text-[#20BCED] font-semibold mb-4">
            {project.subtitle}
          </h4>

          {/* Description */}
          <p className="text-[#B6E1F2] text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-[#B6E1F2] bg-[#126AF9]/10 border border-[#126AF9]/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(project.stats).map(([key, value], index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-[#B6E1F2] capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href={`/portfolio/${project.id}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#052699] hover:to-[#0ea5e9] text-white font-semibold rounded-xl transition-all duration-300 group/btn"
            >
              <span>{t.viewDetails}</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
