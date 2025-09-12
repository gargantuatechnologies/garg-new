"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useEffect } from "react"

interface ScheduleMeetingDialogProps {
  children: React.ReactNode
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Agendar Reunião",
    subtitle: "Escolha o melhor horário para conversarmos sobre seu projeto"
  },
  en: {
    title: "Schedule Meeting", 
    subtitle: "Choose the best time to discuss your project"
  }
}

export function ScheduleMeetingDialog({ children, currentLang }: ScheduleMeetingDialogProps) {
  const t = translations[currentLang]

  useEffect(() => {
    // Load Google Calendar script
    const loadGoogleCalendar = () => {
      if (typeof window !== 'undefined' && !document.querySelector('script[src*="calendar.google.com"]')) {
        // Load CSS
        const link = document.createElement('link')
        link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)

        // Load JS
        const script = document.createElement('script')
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js'
        script.async = true
        document.head.appendChild(script)

        script.onload = () => {
          if (window.calendar && window.calendar.schedulingButton) {
            const target = document.getElementById('google-calendar-button')
            if (target) {
              window.calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1nxGMr3hEjDt0doXHOXfUgFZcjCN9FVjX_ybSKrQrGkMu6YWv-Tf98us7SvAjlcEegty5Op2nb?gv=true',
                color: '#126AF9',
                label: "Agendar uma Reunião",
                target,
              })
            }
          }
        }
      }
    }

    loadGoogleCalendar()
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-[#126AF9]/40 rounded-2xl shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-2">
            {t.title}
          </DialogTitle>
          <p className="text-lg text-[#B6E1F2]">{t.subtitle}</p>
        </DialogHeader>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3 p-6 bg-[#126AF9]/10 rounded-xl border border-[#126AF9]/20 mb-6">
            <Calendar className="h-6 w-6 text-[#20BCED]" />
            <span className="text-[#20BCED] font-semibold text-lg">Google Calendar</span>
          </div>
          
          <div id="google-calendar-button" className="min-h-[400px] flex items-center justify-center">
            <div className="text-[#B6E1F2] text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#126AF9] mx-auto mb-4"></div>
              <p>Carregando calendário...</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
