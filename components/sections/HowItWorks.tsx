'use client'

import { motion } from 'framer-motion'
import { Smartphone, Shield, QrCode, Check, ArrowRight, MousePointer2, Download } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Install Both',
      description: 'Download the browser extension AND the mobile app. Both are required for the MPC vault.',
      status: 'SETUP_REQUIRED',
    },
    {
      number: '02',
      icon: QrCode,
      title: 'Pair Devices',
      description: 'Scan the extension QR code with your mobile app to create your distributed key shares.',
      status: 'CHANNEL_SECURE',
    },
    {
      number: '03',
      icon: Shield,
      title: 'Generate Shares',
      description: 'Your private key is generated as split shares. It never exists in full on any single device.',
      status: 'KEY_DISTRIBUTED',
    },
    {
      number: '04',
      icon: Check,
      title: 'Sign Securely',
      description: 'Initiate on desktop, approve on mobile. Both devices sign without ever revealing the key.',
      status: 'SIGNATURE_VALID',
    },
  ]

  return (
    <section id="how-it-works" className="section bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-dark-border pb-8"
        >
          <div className="text-xs font-mono text-brand-lime mb-4 uppercase tracking-wider">
            // Protocol Flow
          </div>
          <h2 className="heading-lg mb-4">
            Four Steps to Security
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl">
            Bank-grade cryptography, simplified for daily use.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-dark-border z-0" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                {/* Step Marker */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-24 h-24 bg-dark-surface border border-dark-border rounded-full flex items-center justify-center relative group hover:border-brand-lime transition-colors">
                    <step.icon className="h-8 w-8 text-brand-slate group-hover:text-brand-lime transition-colors" />
                    <div className="absolute -top-2 -right-2 bg-dark-bg text-brand-slate border border-dark-border text-xs font-mono px-2 py-1 rounded-full">
                      {step.number}
                    </div>
                  </div>
                  {/* Arrow for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden">
                      <ArrowRight className="h-5 w-5 text-dark-border" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3 pr-4">
                  <h3 className="text-lg font-bold font-mono text-brand-white uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-slate leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-brand-lime/5 border border-brand-lime/20 rounded text-[10px] font-mono text-brand-lime uppercase tracking-wide mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    STATUS: {step.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

