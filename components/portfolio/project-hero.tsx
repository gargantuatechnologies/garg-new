"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  category: string
  images: string[]
}

interface ProjectHeroProps {
  project: Project
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#126AF9]/20 to-[#20BCED]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#20BCED]/15 to-[#B6E1F2]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#B6E1F2]/10 to-[#126AF9]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-20"
      >
        <Link href="/portfolio">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#126AF9]/30 rounded-xl text-[#B6E1F2] hover:text-white hover:border-[#20BCED]/50 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Voltar ao Portfolio</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Category & Badge */}
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 text-sm font-semibold text-[#20BCED] bg-[#20BCED]/10 border border-[#20BCED]/30 rounded-full">
                {project.category}
              </span>
              <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#126AF9] to-[#20BCED] rounded-full text-white text-xs font-semibold">
                <Star className="h-3 w-3" />
                Destaque
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-4 leading-tight">
                {project.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#20BCED] font-semibold">
                {project.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-[#B6E1F2] leading-relaxed">
              {project.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#052699] hover:to-[#0ea5e9] text-white font-semibold rounded-xl transition-all duration-300 group"
              >
                <span>Ver Projeto</span>
                <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-[#126AF9]/30 group">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#126AF9]/10 via-transparent to-[#20BCED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#126AF9] rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#20BCED] rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#B6E1F2] rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
    </section>
  )
}
