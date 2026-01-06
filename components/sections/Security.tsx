'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react'

export default function Security() {
  const securityFeatures = [
    // Row 1: Live features
    {
      icon: Shield,
      title: 'MPC Architecture',
      description: 'Multi-Party Computation ensures your private key never exists as a single entity. Two independent shares—neither reveals the key alone.',
      id: 'SEC_01',
      comingSoon: false
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All communication between devices uses bank-grade encryption. Zero-knowledge architecture means we never see your keys.',
      id: 'SEC_02',
      comingSoon: false
    },
    {
      icon: CheckCircle,
      title: 'Biometric Protection',
      description: 'Mobile signing requires biometric authentication (Face ID, Touch ID). Physical device access is mandatory.',
      id: 'SEC_03',
      comingSoon: false
    },
    // Row 2: Coming soon features
    {
      icon: Eye,
      title: 'Transaction Verification',
      description: 'Detailed transaction breakdown displayed on your mobile device for review before signing. Catch phishing attempts before they execute.',
      id: 'SEC_04',
      comingSoon: true
    },
    {
      icon: RefreshCw,
      title: 'Security Audits',
      description: 'Security assessments by top-tier blockchain security firms. Open-source components available for community review.',
      id: 'SEC_05',
      comingSoon: true
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection',
      description: 'Real-time monitoring for suspicious activity. Automatic alerts for high-risk transactions and known malicious contracts.',
      id: 'SEC_06',
      comingSoon: true
    },
  ]

  return (
    <section id="security" className="section bg-dark-surface">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-dark-border pb-8"
        >
          <div className="text-xs font-mono text-brand-lime mb-4 uppercase tracking-wider">
            // Security Architecture
          </div>
          <h2 className="heading-lg mb-4">
            Bank-Grade Security
          </h2>
          
          <p className="text-xl text-brand-slate max-w-3xl">
            Built from the ground up with institutional-grade security standards. Your assets are protected by cutting-edge cryptographic protocols.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border border border-dark-border">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-dark-bg p-8 group hover:bg-dark-elevated transition-colors relative ${feature.comingSoon ? 'opacity-70' : ''}`}
            >
              {/* Technical ID & Coming Soon Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                {feature.comingSoon && (
                  <span className="text-xs font-mono bg-brand-slate/20 text-brand-slate px-2 py-0.5 rounded">
                    SOON
                  </span>
                )}
                <span className="text-xs font-mono text-dark-border group-hover:text-brand-lime transition-colors">
                  {feature.id}
                </span>
              </div>

              {/* Icon */}
              <div className={`mb-6 inline-flex p-3 rounded-md bg-dark-surface border border-dark-border ${!feature.comingSoon ? 'group-hover:border-brand-lime/50' : ''} transition-colors`}>
                <feature.icon className={`h-6 w-6 ${feature.comingSoon ? 'text-brand-slate/50' : 'text-brand-slate group-hover:text-brand-lime'} transition-colors`} />
              </div>

              {/* Content */}
              <h3 className={`text-lg font-bold mb-3 ${feature.comingSoon ? 'text-brand-white/70' : 'text-brand-white group-hover:text-brand-lime'} transition-colors`}>
                {feature.title}
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed font-mono">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-dark-bg border border-dark-border"
        >
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-brand-lime flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-brand-white mb-2">
                Security-First Philosophy
              </h3>
              <p className="text-brand-slate leading-relaxed">
                We believe security shouldn't be sacrificed for convenience. DefiShard combines hardware wallet-level security with the seamless experience of software wallets. Your private key is never whole, never transmitted, and never stored—it exists only as distributed mathematical shares that come together momentarily to sign transactions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



