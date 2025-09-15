"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_i2g8p9w'
const EMAILJS_TEMPLATE_ID = 'template_5tcl2qn'
const EMAILJS_PUBLIC_KEY = 'PlupCASH8dHVwaSPX'

export default function WorkWithUsPage() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validações
    if (!formData.name.trim()) {
      showErrorToast('Nome é obrigatório')
      return
    }
    if (!formData.email.trim()) {
      showErrorToast('Email é obrigatório')
      return
    }
    if (!validateEmail(formData.email)) {
      showErrorToast('Email inválido')
      return
    }
    if (!formData.phone.trim()) {
      showErrorToast('Telefone é obrigatório')
      return
    }
    if (!formData.position.trim()) {
      showErrorToast('Vaga de interesse é obrigatória')
      return
    }
    if (!formData.message.trim()) {
      showErrorToast('Mensagem é obrigatória')
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        message: formData.message,
        portfolio: formData.portfolio || 'Não informado',
        curriculo: formData.resume || 'Não informado'
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      showSuccessToast()
      setFormData({ name: "", phone: "", email: "", position: "", message: "", portfolio: "", resume: "" })
      
    } catch (error) {
      console.error('Error sending email:', error)
      showErrorToast('Erro ao enviar candidatura. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} currentPage="about" />
      
      <div className="pt-32 pb-16 px-4 sm:px-8 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#126AF9] to-[#20BCED] bg-clip-text text-transparent">
              Trabalhe Conosco
            </h1>
            <p className="text-lg sm:text-xl text-[#8b9bb3] max-w-2xl mx-auto">
              Junte-se à nossa equipe e faça parte do futuro da tecnologia
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                    Vaga de Interesse ({formData.position.length}/50)
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    placeholder="Desenvolvedor Frontend"
                    required
                    className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                  Conte-nos um pouco sobre você ({formData.message.length}/300)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Conte-nos sobre sua experiência e por que quer trabalhar conosco..."
                  required
                  rows={5}
                  className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                    Link do Portfolio (Opcional)
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    placeholder="https://seuportfolio.com"
                    className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20"
                  />
                  {formData.portfolio && !formData.portfolio.match(/^https?:\/\/.+/) && (
                    <p className="text-red-400 text-xs mt-1">Digite uma URL válida (ex: https://exemplo.com)</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c5d4e6] mb-2">
                    Link do Currículo (Opcional)
                  </label>
                  <input
                    type="url"
                    value={formData.resume}
                    onChange={(e) => handleInputChange('resume', e.target.value)}
                    placeholder="https://seucurriculo.com"
                    className="w-full p-3 bg-[#0a0a0a] border border-[#4a5568] rounded-lg text-white placeholder:text-[#8b9bb3] focus:border-[#20BCED] focus:ring-1 focus:ring-[#20BCED]/20"
                  />
                  {formData.resume && !formData.resume.match(/^https?:\/\/.+/) && (
                    <p className="text-red-400 text-xs mt-1">Digite uma URL válida (ex: https://exemplo.com)</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#126AF9] to-[#20BCED] hover:from-[#0F5CD1] hover:to-[#1A9BC7] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Candidatura'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer currentLang={currentLang} />

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-[10000] bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-right-5 duration-300">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Candidatura enviada!</p>
            <p className="text-sm text-green-100">Entraremos em contato em breve.</p>
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
            <p className="font-semibold">Erro ao enviar</p>
            <p className="text-sm text-red-100">{errorMessage}</p>
          </div>
        </div>
      )}
    </main>
  )
}