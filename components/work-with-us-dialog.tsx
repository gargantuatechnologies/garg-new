"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, X } from "lucide-react"
import emailjs from '@emailjs/browser'

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
      portfolio: "Link do Portfolio (opcional)",
      resume: "Link do Currículo (opcional)",
      submit: "Enviar Candidatura",
      cancel: "Cancelar",
      placeholder: {
        name: "Digite seu nome completo",
        phone: "+55 (11) 99999-9999",
        email: "seu@email.com",
        position: "Ex: Desenvolvedor Full Stack",
        message: "Conte-nos sobre sua experiência e interesse na vaga...",
        portfolio: "https://seuportfolio.com",
        resume: "https://linkedin.com/in/seuperfil"
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
      portfolio: "Portfolio Link (optional)",
      resume: "Resume Link (optional)",
      submit: "Submit Application",
      cancel: "Cancel",
      placeholder: {
        name: "Enter your full name",
        phone: "+1 (555) 123-4567",
        email: "your@email.com",
        position: "Ex: Full Stack Developer",
        message: "Tell us about your experience and interest in the position...",
        portfolio: "https://yourportfolio.com",
        resume: "https://linkedin.com/in/yourprofile"
      }
    }
  }
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_i2g8p9w'
const EMAILJS_TEMPLATE_ID = 'template_5tcl2qn'
const EMAILJS_PUBLIC_KEY = 'PlupCASH8dHVwaSPX'

export function WorkWithUsDialog({ currentLang, children }: WorkWithUsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    message: "",
    portfolio: "",
    resume: ""
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
    let processedValue = value

    // Validações específicas por campo
    switch (field) {
      case 'name':
        // Apenas letras, espaços e acentos
        processedValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
        break
      case 'phone':
        // Apenas números, +, -, (, ), e espaços
        processedValue = value.replace(/[^0-9+\-()\s]/g, '')
        break
      case 'portfolio':
      case 'resume':
        // Apenas URLs válidas
        if (value && !value.match(/^https?:\/\/.+/)) {
          processedValue = value.startsWith('http') ? value : `https://${value}`
        }
        break
      case 'message':
        // Limite de 300 caracteres
        processedValue = value.slice(0, 300)
        break
      case 'position':
        // Limite de 50 caracteres
        processedValue = value.slice(0, 50)
        break
    }

    setFormData(prev => ({ ...prev, [field]: processedValue }))
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const showErrorToast = (message: string) => {
    setErrorMessage(message)
    setShowError(true)
    setTimeout(() => setShowError(false), 5000)
  }

  const showSuccessToast = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      showErrorToast(currentLang === 'pt' ? 'Nome é obrigatório' : 'Name is required')
      return false
    }
    if (!formData.email.trim()) {
      showErrorToast(currentLang === 'pt' ? 'Email é obrigatório' : 'Email is required')
      return false
    }
    if (!validateEmail(formData.email)) {
      showErrorToast(currentLang === 'pt' ? 'Email inválido' : 'Invalid email')
      return false
    }
    if (!formData.phone.trim()) {
      showErrorToast(currentLang === 'pt' ? 'Telefone é obrigatório' : 'Phone is required')
      return false
    }
    if (!formData.position.trim()) {
      showErrorToast(currentLang === 'pt' ? 'Vaga de interesse é obrigatória' : 'Position is required')
      return false
    }
    if (!formData.message.trim()) {
      showErrorToast(currentLang === 'pt' ? 'Mensagem é obrigatória' : 'Message is required')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        message: formData.message,
        portfolio: formData.portfolio || 'Não informado',
        curriculo: formData.resume || 'Não informado'
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // Success - show toast and reset form
      showSuccessToast()
      setIsOpen(false)
      setFormData({ name: "", phone: "", email: "", position: "", message: "", portfolio: "", resume: "" })
      
    } catch (error) {
      console.error('Error sending email:', error)
      showErrorToast(currentLang === 'pt' ? 'Erro ao enviar candidatura. Tente novamente.' : 'Error sending application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
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
            className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] text-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md w-full mx-2 sm:mx-4 my-4 sm:my-8 relative shadow-2xl border border-[#126AF9]/20 glass-floating-enhanced max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-[#8b9bb3] hover:text-[#20BCED] transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.workDialog.title}
                <span className="text-[#20BCED] block">{t.workDialog.titleHighlight}</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
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
                  {t.workDialog.position} <span className="text-xs text-[#8b9bb3]">({formData.position.length}/50)</span>
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
                  {t.workDialog.message} <span className="text-xs text-[#8b9bb3]">({formData.message.length}/300)</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder={t.workDialog.placeholder.message}
                  className="mt-1 min-h-[80px] sm:min-h-[100px] bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20 resize-none"
                  required
                />
              </div>

              <div>
                <Label htmlFor="portfolio" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.portfolio}
                </Label>
                <Input
                  id="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                  placeholder={t.workDialog.placeholder.portfolio}
                  className="mt-1 bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                />
                {formData.portfolio && !formData.portfolio.match(/^https?:\/\/.+/) && (
                  <p className="text-xs text-red-400 mt-1">Digite uma URL válida (ex: https://exemplo.com)</p>
                )}
              </div>

              <div>
                <Label htmlFor="resume" className="text-sm font-medium text-[#c5d4e6]">
                  {t.workDialog.resume}
                </Label>
                <Input
                  id="resume"
                  type="url"
                  value={formData.resume}
                  onChange={(e) => handleInputChange('resume', e.target.value)}
                  placeholder={t.workDialog.placeholder.resume}
                  className="mt-1 bg-[#1a1a1a] border-[#4a5568] text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-[#20BCED]/20"
                />
                {formData.resume && !formData.resume.match(/^https?:\/\/.+/) && (
                  <p className="text-xs text-red-400 mt-1">Digite uma URL válida (ex: https://exemplo.com)</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeDialog}
                  className="flex-1 border-[#4a5568] text-[#c5d4e6] hover:bg-[#4a5568] hover:text-white bg-transparent py-2 sm:py-3"
                >
                  {t.workDialog.cancel}
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#0F5CD1] hover:to-[#1A9BC7] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 py-2 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} className="mr-1 sm:mr-2" />
                  <span className="text-sm sm:text-base">
                    {isSubmitting 
                      ? (currentLang === 'pt' ? 'Enviando...' : 'Sending...') 
                      : t.workDialog.submit
                    }
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-[10000] bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right-5 duration-300">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">
              {currentLang === 'pt' ? 'Candidatura enviada!' : 'Application sent!'}
            </p>
            <p className="text-sm text-green-100">
              {currentLang === 'pt' ? 'Entraremos em contato em breve.' : 'We will contact you soon.'}
            </p>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {showError && (
        <div className="fixed top-4 right-4 z-[10000] bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right-5 duration-300">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">
              {currentLang === 'pt' ? 'Erro ao enviar' : 'Error sending'}
            </p>
            <p className="text-sm text-red-100">{errorMessage}</p>
          </div>
        </div>
      )}
    </>
  )
}
