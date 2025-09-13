"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface PortfolioWrapperProps {
  children: React.ReactNode
}

export function PortfolioWrapper({ children }: PortfolioWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#126AF9] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#B6E1F2]">Carregando portfolio...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
