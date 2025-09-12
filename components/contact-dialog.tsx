"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, MessageCircle, Calendar } from "lucide-react"

interface ContactDialogProps {
  children: React.ReactNode
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    title: "Entre em Contato",
    subtitle: "Escolha a melhor forma de falar conosco",
    whatsapp: "Falar no WhatsApp",
    schedule: "Marcar Reunião",
    locations: {
      us: {
        title: "United States",
        company: "Ligiga LLC - 802754373",
        phone: "+1 (407) 680-7191",
        address: "3 Parklane Blvd, Suite 1005W\nDearborn, MI"
      },
      br: {
        title: "Brazil", 
        company: "Gargantua Technologies LTDA",
        cnpj: "57.873.343/0001-88",
        phone: "+55 (92) 98165-9541",
        address: "R, Pastor Oswald Hesse, 730\nBlumenau - SC (89015-100)"
      },
      ae: {
        title: "United Arab Emirates",
        company: "Ligiga LLC - 2111711.01",
        location: "Sharjah Media City (Shams)",
        phone: "+971 58 253 3528"
      }
    }
  },
  en: {
    title: "Get in Touch",
    subtitle: "Choose the best way to reach us",
    whatsapp: "Chat on WhatsApp",
    schedule: "Schedule Meeting",
    locations: {
      us: {
        title: "United States",
        company: "Ligiga LLC - 802754373",
        phone: "+1 (407) 680-7191",
        address: "3 Parklane Blvd, Suite 1005W\nDearborn, MI"
      },
      br: {
        title: "Brazil",
        company: "Gargantua Technologies LTDA", 
        cnpj: "57.873.343/0001-88",
        phone: "+55 (92) 98165-9541",
        address: "R, Pastor Oswald Hesse, 730\nBlumenau - SC (89015-100)"
      },
      ae: {
        title: "United Arab Emirates",
        company: "Ligiga LLC - 2111711.01",
        location: "Sharjah Media City (Shams)",
        phone: "+971 58 253 3528"
      }
    }
  }
}

export function ContactDialog({ children, currentLang }: ContactDialogProps) {
  const t = translations[currentLang]

  const handleWhatsApp = () => {
    const phoneNumber = "+971582533528"
    const message = encodeURIComponent("Olá! Gostaria de falar sobre os serviços da Gargantua Technologies.")
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[900px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-[#126AF9]/40 rounded-2xl shadow-2xl">
        <DialogHeader className="text-center pb-8">
          <DialogTitle className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#126AF9] to-[#20BCED] mb-3">
            {t.title}
          </DialogTitle>
          <p className="text-xl text-[#B6E1F2] max-w-2xl mx-auto">{t.subtitle}</p>
        </DialogHeader>

        <div className="space-y-8">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-base min-w-[180px]"
            >
              <MessageCircle className="h-5 w-5" />
              {t.whatsapp}
            </Button>
            
            <Button
              disabled
              className="flex items-center gap-3 bg-[#126AF9]/20 hover:bg-[#126AF9]/30 text-[#126AF9] border border-[#126AF9]/30 font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 opacity-50 cursor-not-allowed text-base min-w-[180px]"
            >
              <Calendar className="h-5 w-5" />
              {t.schedule}
            </Button>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 p-4 bg-[#126AF9]/10 rounded-lg border border-[#126AF9]/20 max-w-sm mx-auto">
              <Mail className="h-5 w-5 text-[#20BCED] flex-shrink-0" />
              <a 
                href="mailto:contact@gargantuatechnologies.com"
                className="text-[#20BCED] hover:text-[#126AF9] font-semibold text-sm transition-colors break-all"
              >
                contact@gargantuatechnologies.com
              </a>
            </div>
          </div>

          {/* Locations - Stacked Vertically */}
          <div className="space-y-6">
            {/* United States */}
            <div className="bg-[#126AF9]/5 rounded-lg p-6 border border-[#126AF9]/20 hover:border-[#20BCED]/30 transition-all duration-300">
              <h3 className="text-lg font-bold mb-4 text-white">{t.locations.us.title}</h3>
              <ul className="space-y-3 text-[#B6E1F2]">
                <li className="font-semibold text-[#20BCED] text-base">{t.locations.us.company}</li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#20BCED] flex-shrink-0" />
                  <span className="text-sm">{t.locations.us.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#20BCED] mt-0.5 flex-shrink-0" />
                  <span className="text-xs whitespace-pre-line leading-relaxed">{t.locations.us.address}</span>
                </li>
              </ul>
            </div>

            {/* Brazil */}
            <div className="bg-[#126AF9]/5 rounded-lg p-6 border border-[#126AF9]/20 hover:border-[#20BCED]/30 transition-all duration-300">
              <h3 className="text-lg font-bold mb-4 text-white">{t.locations.br.title}</h3>
              <ul className="space-y-3 text-[#B6E1F2]">
                <li className="font-semibold text-[#20BCED] text-base">{t.locations.br.company}</li>
                <li className="text-xs text-[#B6E1F2]/80">{t.locations.br.cnpj}</li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#20BCED] flex-shrink-0" />
                  <span className="text-sm">{t.locations.br.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#20BCED] mt-0.5 flex-shrink-0" />
                  <span className="text-xs whitespace-pre-line leading-relaxed">{t.locations.br.address}</span>
                </li>
              </ul>
            </div>

            {/* United Arab Emirates */}
            <div className="bg-[#126AF9]/5 rounded-lg p-6 border border-[#126AF9]/20 hover:border-[#20BCED]/30 transition-all duration-300">
              <h3 className="text-lg font-bold mb-4 text-white">{t.locations.ae.title}</h3>
              <ul className="space-y-3 text-[#B6E1F2]">
                <li className="font-semibold text-[#20BCED] text-base">{t.locations.ae.company}</li>
                <li className="text-xs text-[#B6E1F2]/80">{t.locations.ae.location}</li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#20BCED] flex-shrink-0" />
                  <span className="text-sm">{t.locations.ae.phone}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
