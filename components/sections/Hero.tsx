'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, ArrowRight, Check, Chrome } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-48 relative overflow-hidden bg-dark-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-brand-lime/30 bg-brand-lime/10 px-4 py-1.5 rounded-full">
              <Shield className="h-4 w-4 text-brand-lime" />
              <span className="text-sm font-mono text-brand-lime uppercase tracking-wider">
                MPC Technology v2.0
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="heading-xl">
                Your Key Never Exists.
                <br />
                <span className="text-brand-lime">Your Assets Safe.</span>
              </h1>
              
              <p className="text-xl text-brand-slate leading-relaxed max-w-2xl">
                DefiShard uses distributed key generation with threshold signatures. 
                Your private key <span className="text-brand-white font-semibold">never exists anywhere</span>—not during setup, not during signing.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Chrome className="h-5 w-5" />
                  <span>Download Extension</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#cta"
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Smartphone className="h-5 w-5" />
                  <span>Get Mobile App</span>
                </a>
              </div>
              
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-12 pt-8 border-t border-dark-border">
              <div>
                <div className="text-3xl font-bold font-mono text-brand-white">50K+</div>
                <div className="text-xs font-mono text-brand-slate uppercase mt-1">Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-brand-white">$100M+</div>
                <div className="text-xs font-mono text-brand-slate uppercase mt-1">Secured</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-brand-lime">0</div>
                <div className="text-xs font-mono text-brand-slate uppercase mt-1">Breaches</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main card */}
              <div className="card-technical bg-dark-elevated p-8">
                {/* Header Line */}
                <div className="flex items-center justify-between mb-8 border-b border-dark-border pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-brand-slate">SECURE_SIGNING_PROTOCOL</div>
                </div>

                <div className="relative space-y-6">
                  {/* Mobile Device */}
                  <div className="border border-dark-border bg-dark-surface rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-5 w-5 text-brand-slate" />
                        <span className="font-mono text-sm text-brand-white">Device A (Mobile)</span>
                      </div>
                      <div className="text-xs font-mono text-brand-lime">ONLINE</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-1.5 bg-dark-border rounded-full w-3/4" />
                      <div className="h-1.5 bg-dark-border rounded-full w-1/2" />
                      <div className="mt-4 p-3 bg-dark-bg border border-dark-border rounded text-xs font-mono text-brand-slate">
                        <span className="text-brand-lime">&gt;</span> PARTIAL_SIG_1 GENERATED
                      </div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="flex justify-center -my-2 relative z-0">
                     <div className="h-8 w-px bg-brand-lime/50 dashed-line"></div>
                  </div>

                  {/* Browser Extension */}
                  <div className="border border-dark-border bg-dark-surface rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-brand-slate" />
                        <span className="font-mono text-sm text-brand-white">Device B (Extension)</span>
                      </div>
                      <div className="text-xs font-mono text-brand-lime">ONLINE</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-1.5 bg-dark-border rounded-full w-2/3" />
                      <div className="h-1.5 bg-dark-border rounded-full w-3/4" />
                      <div className="mt-4 p-3 bg-dark-bg border border-dark-border rounded text-xs font-mono text-brand-slate">
                        <span className="text-brand-lime">&gt;</span> PARTIAL_SIG_2 GENERATED
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-brand-lime">
                      <Check className="h-5 w-5" />
                      <span className="font-mono font-bold text-sm">TRANSACTION BROADCASTED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decor - Grid instead of blobs */}
            <div className="absolute -inset-4 bg-[linear-gradient(45deg,transparent_25%,rgba(204,255,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] -z-0 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
