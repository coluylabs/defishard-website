'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Lock } from 'lucide-react'

export default function Problem() {
  const attacks = [
    {
      name: 'Ronin Network',
      date: 'MAR 2022',
      amount: '$625M',
      cause: 'COMPROMISED_KEYS',
    },
    {
      name: 'Slope Wallet',
      date: 'AUG 2022',
      amount: '$8M+',
      cause: 'PLAINTEXT_LOGGING',
    },
    {
      name: 'Atomic Wallet',
      date: 'JUN 2023',
      amount: '$100M+',
      cause: 'WALLET_VULNERABILITY',
    },
    {
      name: 'LastPass Breach',
      date: 'DEC 2022',
      amount: '$35M+',
      cause: 'MASTER_PASSWORD_THEFT',
    },
  ]

  return (
    <section id="problem" className="section bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-dark-border pb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-4 w-4 text-brand-lime" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-wider">
              System Critical Failure
            </span>
          </div>
          
          <h2 className="heading-lg mb-6">
            The Extension Wallet Crisis
          </h2>
          
          <p className="text-xl text-brand-slate max-w-3xl leading-relaxed">
            Standard wallets create a <span className="text-brand-white font-semibold">single point of failure</span>. 
            If your device is compromised, your private key is gone.
          </p>
        </motion.div>

        {/* Attacks Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-dark-border border border-dark-border mb-20">
          {attacks.map((attack, index) => (
            <motion.div
              key={attack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-surface p-8 hover:bg-dark-elevated transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold font-mono text-brand-white mb-1">{attack.name}</h3>
                  <p className="text-xs font-mono text-brand-slate uppercase">{attack.date}</p>
                </div>
                <div className="text-xl font-bold font-mono text-brand-white">{attack.amount}</div>
              </div>
              
              <div className="inline-block px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs font-mono text-brand-slate uppercase">
                ERROR: {attack.cause}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
