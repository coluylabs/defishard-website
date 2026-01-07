'use client'

import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export default function LegalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-7 w-7 text-brand-lime group-hover:text-brand-lime/80 transition-colors" />
            </div>
            <span className="text-xl font-bold text-brand-white">DeFiShard</span>
          </Link>

          {/* Back to Home */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-brand-slate hover:text-brand-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Home</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

