"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

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
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image
              src="/images/icon-white.png"
              alt="Gargantua Technologies"
              width={200}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-[#878EA0] leading-relaxed mb-6">{t.tagline}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* United States */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">United States</h3>
            <ul className="space-y-2 text-[#878EA0]">
              <li className="font-semibold">Ligiga LLC - 802754373</li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#20BCED]" />
                <span>+1 (407) 680-7191</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#20BCED] mt-1" />
                <span>3 Parklane Blvd, Suite 1005W<br />Dearborn, MI</span>
              </li>
            </ul>
          </div>

          {/* Brazil */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Brazil</h3>
            <ul className="space-y-2 text-[#878EA0]">
              <li className="font-semibold">Gargantua Technologies LTDA</li>
              <li className="text-sm">57.873.343/0001-88</li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#20BCED]" />
                <span>+55 (92) 98165-9541</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#20BCED] mt-1" />
                <span>R, Pastor Oswald Hesse, 730<br />Blumenau - SC (89015-100)</span>
              </li>
            </ul>
          </div>

          {/* United Arab Emirates */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">United Arab Emirates</h3>
            <ul className="space-y-2 text-[#878EA0]">
              <li className="font-semibold">Ligiga LLC - 2111711.01</li>
              <li className="text-sm">Sharjah Media City (Shams)</li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#20BCED]" />
                <span>+971 58 253 3528</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#878EA0] text-sm">© 2025 Gargantua Technologies. {t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#878EA0] hover:text-[#20BCED] text-sm transition-colors">
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
