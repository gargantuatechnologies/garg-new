"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

interface FooterProps {
  currentLang: "pt" | "en"
}

const translations = {
  pt: {
    tagline: "Alcançando a singularidade através da tecnologia",
    company: "Empresa",
    about: "Sobre Nós",
    services: "Serviços",
    portfolio: "Portfólio",
    contact: "Contato",
    solutions: "Soluções",
    payments: "Pagamentos",
    baas: "Banking as a Service",
    mobile: "Aplicativos Mobile",
    erp: "Sistemas ERP",
    bi: "Business Intelligence",
    audit: "Auditoria Imersiva",
    contactInfo: "Informações de Contato",
    address: "São Paulo, SP - Brasil",
    rights: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
  },
  en: {
    tagline: "Reaching singularity through technology",
    company: "Company",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    solutions: "Solutions",
    payments: "Payments",
    baas: "Banking as a Service",
    mobile: "Mobile Apps",
    erp: "ERP Systems",
    bi: "Business Intelligence",
    audit: "Immersive Audit",
    contactInfo: "Contact Information",
    address: "São Paulo, SP - Brazil",
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
              src="/images/logo-light.png"
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

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.portfolio}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.solutions}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.payments}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.baas}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.mobile}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.erp}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.bi}
                </a>
              </li>
              <li>
                <a href="#" className="text-[#878EA0] hover:text-[#20BCED] transition-colors">
                  {t.audit}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#878EA0]">
                <Mail className="h-4 w-4 text-[#20BCED]" />
                <span>contato@gargantua.tech</span>
              </li>
              <li className="flex items-center gap-2 text-[#878EA0]">
                <Phone className="h-4 w-4 text-[#20BCED]" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-[#878EA0]">
                <MapPin className="h-4 w-4 text-[#20BCED]" />
                <span>{t.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#878EA0] text-sm">© 2024 Gargantua Technologies. {t.rights}</p>
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
