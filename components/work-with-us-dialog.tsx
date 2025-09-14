"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, X } from "lucide-react"

interface WorkWithUsDialogProps {
  currentLang: "pt" | "en"
  children: React.ReactNode
}

const translations = {
  pt: {
    workDialog: {
      title: "Quer se tornar um",
      titleHighlight: "Profissional Singular?",
      name: "Nome completo",
      phone: "Telefone (com DDI e DDD)",
      email: "E-mail",
      position: "Vaga de interesse",
      message: "Conte-nos um pouco sobre você",
      submit: "Enviar Candidatura",
      cancel: "Cancelar",
      placeholder: {
        name: "Digite seu nome completo",
        phone: "+55 (11) 99999-9999",
        email: "seu@email.com",
        position: "Ex: Desenvolvedor Full Stack",
        message: "Conte-nos sobre sua experiência e interesse na vaga..."
      }
    }
  },
  en: {
    workDialog: {
      title: "Want to become a",
      titleHighlight: "Singular Professional?",
      name: "Full name",
      phone: "Phone (with country and area code)",
      email: "E-mail",
      position: "Position of interest",
      message: "Tell us a little about yourself",
      submit: "Submit Application",
      cancel: "Cancel",
      placeholder: {
        name: "Enter your full name",
        phone: "+1 (555) 123-4567",
        email: "your@email.com",
        position: "Ex: Full Stack Developer",
        message: "Tell us about your experience and interest in the position..."
      }
    }
  }
}

export function WorkWithUsDialog({ currentLang, children }: WorkWithUsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    message: ""
  })

  const t = translations[currentLang]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsOpen(false)
    setFormData({ name: "", phone: "", email: "", position: "", message: "" })
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeDialog()
    }
  }

  return (
    <>
      <div onClick={() => {
        console.log('Button clicked!')
        setIsOpen(true)
      }}>
        {children}
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh'
          }}
        >
          <div 
            className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] text-white p-8 rounded-2xl max-w-md w-full mx-4 relative shadow-2xl border border-[#126AF9]/20 glass-floating-enhanced"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-[#8b9bb3] hover:text-[#20BCED] transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {t.workDialog.title}
                <span className="text-[#20BCED] block">{t.workDialog.titleHighlight}</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.name}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={t.workDialog.placeholder.name}
                  className="mt-1 bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.phone}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder={t.workDialog.placeholder.phone}
                  className="mt-1 bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t.workDialog.placeholder.email}
                  className="mt-1 bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                  required
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.position}
                </Label>
                <Input
                  id="position"
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  placeholder={t.workDialog.placeholder.position}
                  className="mt-1 bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.message}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder={t.workDialog.placeholder.message}
                  className="mt-1 min-h-[100px] bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeDialog}
                  className="flex-1 border-[#4a5568] text-[#c5d4e6] hover:bg-[#4a5568] hover:text-white bg-transparent"
                >
                  {t.workDialog.cancel}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#0F5CD1] hover:to-[#1A9BC7] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send size={16} className="mr-2" />
                  {t.workDialog.submit}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
