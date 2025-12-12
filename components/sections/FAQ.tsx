'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Why do I need to download BOTH the extension and the app?',
      answer: 'DefiShard uses a 2-of-2 security model. One key share lives on your browser extension (Device A) and the other on your mobile phone (Device B). To sign any transaction, both devices must cryptographically cooperate. This ensures that if one device is hacked or stolen, your funds remain safe because the attacker only has one useless share.',
    },
    {
      question: 'How is this different from a hardware wallet?',
      answer: 'Hardware wallets are secure but inconvenient for active DeFi use. DefiShard provides hardware wallet-level security with software wallet convenience through MPC. You don\'t need to physically connect anything—just scan a QR code.',
    },
    {
      question: 'What if I lose my phone?',
      answer: 'We provide a method to backup the key shares. You only need to store it on your personal cloud (Google Drive, iCloud) during setup to ensure you can recover access anytime.',
    },
    {
      question: 'Does this work with all DeFi apps?',
      answer: 'Yes! DefiShard is fully compatible with any dApp that supports standard wallet connections—Uniswap, Aave, Compound, OpenSea, and thousands more. We support Ethereum and all major EVM chains.',
    },
    {
      question: 'How fast is the transaction process?',
      answer: 'Typically 5-10 seconds from scanning the QR code to confirmation. The process is optimized for speed without compromising cryptographic security.',
    },
    {
      question: 'Is my private key ever stored anywhere?',
      answer: 'No, never. Using distributed key generation, your complete private key never exists—not during setup, not during signing, not ever. This is fundamentally different from wallets that store encrypted keys.',
    },
  ]

  return (
    <section id="faq" className="section bg-dark-bg">
      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-dark-border pb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-4 w-4 text-brand-lime" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-wider">
              Knowledge Base
            </span>
          </div>
          
          <h2 className="heading-lg mb-6">
            Technical FAQ
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full bg-dark-surface border ${openIndex === index ? 'border-brand-lime' : 'border-dark-border'} p-6 text-left hover:bg-dark-elevated transition-all group`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-lg font-bold font-mono ${openIndex === index ? 'text-brand-lime' : 'text-brand-white group-hover:text-brand-lime'} transition-colors`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-brand-lime" />
                    ) : (
                      <Plus className="h-5 w-5 text-brand-slate group-hover:text-brand-lime" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-brand-slate mt-4 leading-relaxed font-mono text-sm border-t border-dark-border pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-dark-border"
        >
          <p className="text-brand-slate font-mono text-sm">
            Need more details?{' '}
            <a href="#" className="text-brand-lime hover:underline uppercase">
              Read Documentation &gt;
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
