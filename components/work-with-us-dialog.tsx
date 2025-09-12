"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

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
      placeholder: {
        name: "Digite seu nome completo",
        phone: "+55 (11) 99999-9999",
        email: "seu@email.com",
        position: "Ex: Desenvolvedor Full Stack",
        message: "Conte-nos sobre sua experiência e por que quer trabalhar conosco..."
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
      placeholder: {
        name: "Enter your full name",
        phone: "+1 (555) 123-4567",
        email: "your@email.com",
        position: "Ex: Full Stack Developer",
        message: "Tell us about your experience and why you want to work with us..."
      }
    }
  },
}

export function WorkWithUsDialog({ currentLang, children }: WorkWithUsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    message: ""
  })
  
  const t = translations[currentLang]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData)
    setIsOpen(false)
    setFormData({ name: "", phone: "", email: "", position: "", message: "" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent 
        className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-[#126AF9]/40 rounded-2xl shadow-2xl" 
      >
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-0">
            {t.workDialog.title}{" "}
            <span className="block md:inline">{t.workDialog.titleHighlight}</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#B6E1F2] text-sm font-semibold">
                {t.workDialog.name}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t.workDialog.placeholder.name}
                className="bg-[#1a1a1a]/80 border-[#126AF9]/40 text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-2 focus:ring-[#20BCED]/20 rounded-xl h-12 transition-all duration-300"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#B6E1F2] text-sm font-semibold">
                {t.workDialog.phone}
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder={t.workDialog.placeholder.phone}
                className="bg-[#1a1a1a]/80 border-[#126AF9]/40 text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-2 focus:ring-[#20BCED]/20 rounded-xl h-12 transition-all duration-300"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#B6E1F2] text-sm font-semibold">
              {t.workDialog.email}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t.workDialog.placeholder.email}
              className="bg-[#1a1a1a]/80 border-[#126AF9]/40 text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-2 focus:ring-[#20BCED]/20 rounded-xl h-12 transition-all duration-300"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="position" className="text-[#B6E1F2] text-sm font-semibold">
              {t.workDialog.position}
            </Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              placeholder={t.workDialog.placeholder.position}
              className="bg-[#1a1a1a]/80 border-[#126AF9]/40 text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-2 focus:ring-[#20BCED]/20 rounded-xl h-12 transition-all duration-300"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#B6E1F2] text-sm font-semibold">
              {t.workDialog.message}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={t.workDialog.placeholder.message}
              className="bg-[#1a1a1a]/80 border-[#126AF9]/40 text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-2 focus:ring-[#20BCED]/20 rounded-xl min-h-[120px] transition-all duration-300 resize-none"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#052699] hover:to-[#0d5a8a] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <Send className="h-5 w-5 mr-2" />
            {t.workDialog.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
