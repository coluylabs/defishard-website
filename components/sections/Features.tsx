'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, Globe, Zap, Eye, RotateCcw } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'MPC 2-of-2 Security',
      description: 'Threshold signatures with secret sharing. Your private key never exists—anywhere, ever.',
      id: '01'
    },
    {
      icon: Smartphone,
      title: 'Mobile Review',
      description: 'Review every detail on your phone. Catch scams before signing. Screenshot transactions.',
      id: '02'
    },
    {
      icon: Globe,
      title: 'Universal Compat',
      description: 'Works with Uniswap, Aave, Compound, and all your favorite DeFi protocols.',
      id: '03'
    },
    {
      icon: Zap,
      title: 'Seamless UX',
      description: 'Quick QR code scanning. Transactions complete in seconds. Familiar 2FA-style workflow.',
      id: '04'
    },
    {
      icon: Eye,
      title: 'Active Protection',
      description: 'Real-time threat detection. Warning system for suspicious transactions. Auto updates.',
      id: '05'
    },
    {
      icon: RotateCcw,
      title: 'Easy Recovery',
      description: 'Secure backup options and social recovery available. Never lose access to your assets.',
      id: '06'
    },
  ]

  return (
    <section id="features" className="section bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-dark-border pb-8"
        >
          <div className="text-xs font-mono text-brand-lime mb-4 uppercase tracking-wider">
            // Core Capabilities
          </div>
          <h2 className="heading-lg mb-4">
            Everything You Need
          </h2>
          
          <p className="text-xl text-brand-slate max-w-3xl">
            Powerful features designed for the security-conscious DeFi user.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border border border-dark-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-surface p-8 group hover:bg-dark-elevated transition-colors relative"
            >
              {/* Technical Marker */}
              <div className="absolute top-4 right-4 text-xs font-mono text-dark-border group-hover:text-brand-lime transition-colors">
                {feature.id}
              </div>

              {/* Icon */}
              <div className="mb-6 inline-flex p-3 rounded-md bg-dark-bg border border-dark-border group-hover:border-brand-lime/50 transition-colors">
                <feature.icon className="h-6 w-6 text-brand-slate group-hover:text-brand-lime transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 text-brand-white group-hover:text-brand-lime transition-colors">
                {feature.title}
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed font-mono">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
