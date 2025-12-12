'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Chrome, Smartphone, ShieldCheck } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="section bg-dark-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark-surface border border-dark-border rounded-lg overflow-hidden"
        >
          {/* Top Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-lime" />
          
          <div className="p-8 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-brand-lime">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Production Ready v1.4.0</span>
                </div>
                
                <h2 className="heading-xl">
                  Secure Your Assets. <br />
                  <span className="text-brand-lime">Eliminate the Risk.</span>
                </h2>
                
              </div>

              {/* Download Options */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Browser Extension */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-dark-elevated border border-dark-border p-8 rounded-lg text-left hover:border-brand-lime/50 transition-colors relative"
                >
                  <div className="absolute top-4 right-4 bg-dark-bg border border-dark-border px-3 py-1 text-xs font-mono text-brand-white rounded-full">
                    STEP 1
                  </div>
                  
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <Chrome className="h-8 w-8 text-brand-white mb-4" />
                      <h3 className="text-xl font-bold font-mono text-brand-white">Extension</h3>
                      <p className="text-sm text-brand-slate font-mono mt-1">v1.4.0 (Stable)</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-sm text-brand-slate font-mono">
                    <li className="flex gap-2"><span className="text-brand-lime">✓</span> Chrome, Brave, Edge</li>
                    <li className="flex gap-2"><span className="text-brand-lime">✓</span> Generates Share #1</li>
                    <li className="flex gap-2"><span className="text-brand-lime">✓</span> Audited Protocol</li>
                  </ul>

                  <a
                    href="#cta"
                    className="btn-primary w-full justify-center"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Download Extension</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>

                {/* Mobile App */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-dark-elevated border border-dark-border p-8 rounded-lg text-left hover:border-brand-slate transition-colors relative"
                >
                  <div className="absolute top-4 right-4 bg-dark-bg border border-dark-border px-3 py-1 text-xs font-mono text-brand-white rounded-full">
                    STEP 2
                  </div>

                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <Smartphone className="h-8 w-8 text-brand-white mb-4" />
                      <h3 className="text-xl font-bold font-mono text-brand-white">Mobile Authenticator</h3>
                      <p className="text-sm text-brand-slate font-mono mt-1">v1.2.0 (Beta)</p>
                    </div>
                  </div>

                  <p className="text-sm text-brand-slate font-mono mb-8 h-[88px]">
                    Required to generate Share #2 and approve transactions. Your phone becomes your hardware wallet.
                  </p>

                  <a
                    href="#cta"
                    className="btn-primary w-full justify-center mb-8"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Download APK</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-12 pt-8 border-t border-dark-border">
                <div className="text-center">
                  <div className="text-lg font-bold font-mono text-brand-white">OPEN SOURCE</div>
                  <div className="text-xs font-mono text-brand-slate">MIT LICENSE</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-mono text-brand-white">NON-CUSTODIAL</div>
                  <div className="text-xs font-mono text-brand-slate">YOU HOLD THE SHARES</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold font-mono text-brand-white">EVM COMPATIBLE</div>
                  <div className="text-xs font-mono text-brand-slate">ALL CHAINS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
