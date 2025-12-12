'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-brand-lime transition-transform group-hover:scale-110" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold font-mono tracking-tighter text-brand-white">DEFISHARD</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-mono text-brand-slate hover:text-brand-lime transition-colors relative group uppercase tracking-wide"
              >
                <span className="text-brand-lime opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="btn-primary"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Download</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-white hover:text-brand-lime transition-colors border border-dark-border rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-surface border-b border-dark-border overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-brand-slate hover:text-brand-lime font-mono uppercase tracking-wide py-2 border-b border-dark-border last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-brand-lime mr-2">&gt;</span>
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4">
                <button className="btn-primary w-full">
                  Download App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
