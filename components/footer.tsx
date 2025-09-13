"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"


interface FooterProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    tagline: "Alcançando a singularidade através da tecnologia",
    rights: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
  },
  en: {
    tagline: "Reaching singularity through technology",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
}

export function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang]

  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <Image
              src="/images/icon-white.png"
              alt="Gargantua Technologies"
              width={200}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-[#878EA0] leading-relaxed mb-4">{t.tagline}</p>
            <div className="flex items-center gap-2 mb-6">
              <Mail className="h-3 w-3 text-[#20BCED] flex-shrink-0" />
              <a 
                href="mailto:contact@gargantuatechnologies.com"
                className="text-[#20BCED] hover:text-[#126AF9] font-medium transition-colors text-sm"
              >
                contact@gargantuatechnologies.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/gargantua-tech/" target="_blank" rel="noopener noreferrer" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/gargantuatechnologies" target="_blank" rel="noopener noreferrer" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Addresses - Right Side */}
          <div className="md:w-2/3 flex flex-col md:flex-row gap-1">
            {/* United States */}
            <div className="flex-1">
              <h3 className="text-sm font-bold mb-2 text-white">United States</h3>
              <ul className="space-y-1 text-[#878EA0]">
                <li className="font-semibold text-xs">Ligiga LLC - 802754373</li>
                <li className="flex items-center gap-1.5">
                  <Phone className="h-3 w-3 text-[#20BCED]" />
                  <span className="text-xs">+1 (407) 680-7191</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="h-3 w-3 text-[#20BCED] mt-0.5" />
                  <span className="text-xs">3 Parklane Blvd, Suite 1005W<br />Dearborn, MI</span>
                </li>
              </ul>
            </div>

            {/* Brazil */}
            <div className="flex-1">
              <h3 className="text-sm font-bold mb-2 text-white">Brazil</h3>
              <ul className="space-y-1 text-[#878EA0]">
                <li className="font-semibold text-xs">Gargantua Technologies LTDA</li>
                <li className="text-xs">57.873.343/0001-88</li>
                <li className="flex items-center gap-1.5">
                  <Phone className="h-3 w-3 text-[#20BCED]" />
                  <span className="text-xs">+55 (92) 98165-9541</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="h-3 w-3 text-[#20BCED] mt-0.5" />
                  <span className="text-xs">R, Pastor Oswald Hesse, 730<br />Blumenau - SC (89015-100)</span>
                </li>
              </ul>
            </div>

            {/* United Arab Emirates */}
            <div className="flex-1">
              <h3 className="text-sm font-bold mb-2 text-white">United Arab Emirates</h3>
              <ul className="space-y-1 text-[#878EA0]">
                <li className="font-semibold text-xs">Ligiga LLC - 2111711.01</li>
                <li className="text-xs">Sharjah Media City (Shams)</li>
                <li className="flex items-center gap-1.5">
                  <Phone className="h-3 w-3 text-[#20BCED]" />
                  <span className="text-xs">+971 58 253 3528</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#878EA0] text-sm">© 2025 Gargantua Technologies. {t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-[#878EA0] hover:text-[#20BCED] text-sm transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="text-[#878EA0] hover:text-[#20BCED] text-sm transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
