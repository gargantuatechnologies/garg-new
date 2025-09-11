import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gargantua Technologies | Alcance a Singularidade",
  description:
    "Softwarehouse especializada em soluções de pagamento, BaaS, aplicativos mobile e sistemas ERP complexos. Alcance a singularidade tecnológica conosco.",
  keywords: "pagamentos, BaaS, desenvolvimento mobile, ERP, software house, tecnologia, singularidade",
  authors: [{ name: "Gargantua Technologies" }],
  creator: "Gargantua Technologies",
  publisher: "Gargantua Technologies",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gargantua.tech",
    title: "Gargantua Technologies | Alcance a Singularidade",
    description:
      "Softwarehouse especializada em soluções de pagamento, BaaS, aplicativos mobile e sistemas ERP complexos.",
    siteName: "Gargantua Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gargantua Technologies | Alcance a Singularidade",
    description:
      "Softwarehouse especializada em soluções de pagamento, BaaS, aplicativos mobile e sistemas ERP complexos.",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
