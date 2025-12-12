'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { value: '$1B+', label: 'LOST_SINCE_2022' },
    { value: '9,000+', label: 'WALLETS_DRAINED' },
    { value: '$625M', label: 'RONIN_LOSS' },
    { value: '0', label: 'DEFISHARD_BREACHES' },
  ]

  return (
    <section className="section bg-dark-bg border-y border-dark-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Header */}
          <div className="md:w-1/3">
            <h2 className="heading-lg mb-4">
              The Reality of <span className="text-brand-white">Extension Vulnerabilities</span>
            </h2>
            <p className="text-brand-slate leading-relaxed">
              Standard browser wallets are architecturally vulnerable. The data proves it.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="md:w-2/3 w-full">
            <div className="grid grid-cols-2 gap-px bg-dark-border border border-dark-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-surface p-6 hover:bg-dark-elevated transition-colors"
                >
                  <div className={`text-3xl md:text-4xl font-bold font-mono mb-2 ${index === 3 ? 'text-brand-lime' : 'text-brand-white'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-brand-slate uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
