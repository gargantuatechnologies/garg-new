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


  console.log('Dialog state:', { isOpen, mounted })

  return (
    <>
      <div onClick={() => {
        console.log('Button clicked!')
        setIsOpen(true)
      }}>
        {children}
      </div>
      
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div className="bg-white text-black p-8 rounded-lg max-w-md">
            <h2>Teste do Dialog</h2>
            <p>Este é um teste simples do dialog.</p>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}