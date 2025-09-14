import type React from "react";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gargantua Technologies | Alcance a Singularidade",
  description:
    "Softwarehouse especializada em soluções de pagamento, BaaS, aplicativos mobile e sistemas ERP complexos. Alcance a singularidade tecnológica conosco.",
  keywords: "pagamentos, BaaS, desenvolvimento mobile, ERP, software house, tecnologia, singularidade",
  authors: [{ name: "Gargantua Technologies" }],
  creator: "Gargantua Technologies",
  publisher: "Gargantua Technologies",
  robots: "index, follow",
  icons: {
    icon: "/images/icon-blue.png",
    shortcut: "/images/icon-blue.png",
    apple: "/images/icon-blue.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gargantua.tech",
    title: "Gargantua Technologies | Alcance a Singularidade",
    description: "Softwarehouse especializada em soluções de pagamento, BaaS, aplicativos mobile e sistemas ERP complexos.",
    siteName: "Gargantua Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gargantua Technologies | Alcance a Singularidade",
    description: "Softwarehouse especializada em soluções de pagamento, BaaS, aplicativos mobile e sistemas ERP complexos.",
  },
  generator: "Next.js",
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#126AF9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#126AF9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimized cleanup function
              function cleanupGoogleCalendarButtons() {
                const buttons = document.querySelectorAll('button');
                let duplicateCount = 0;
                
                for (let i = 6; i < buttons.length; i++) {
                  const button = buttons[i];
                  if (button.textContent && button.textContent.includes('Agendar uma Reunião')) {
                    button.remove();
                    duplicateCount++;
                  }
                }
                
                if (duplicateCount > 0) {
                  console.log('Removed', duplicateCount, 'duplicate Google Calendar buttons');
                }
              }
              
              // Run cleanup on page load
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', cleanupGoogleCalendarButtons);
              } else {
                cleanupGoogleCalendarButtons();
              }
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
