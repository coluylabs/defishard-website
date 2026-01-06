import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'DefiShard - Institutional Grade DeFi Security',
  description: 'MPC technology with distributed key generation. Eliminate single points of failure.',
  keywords: ['DeFi security', 'MPC wallet', 'distributed key generation', 'threshold signatures', 'Web3 security', 'crypto wallet'],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-dark-bg text-brand-white antialiased`}>
        <div className="relative min-h-screen bg-dark-bg">
          {/* Subtle Grid Background */}
          <div className="fixed inset-0 bg-[linear-gradient(rgba(45,51,64,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,51,64,0.05)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />
          
          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  )
}
