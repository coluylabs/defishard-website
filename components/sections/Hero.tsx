'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, ArrowRight, Check, Chrome } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-40 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/20 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-brand-lime/10 rounded-full blur-[100px]" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-lime/10 border border-brand-lime/20 px-4 py-2 rounded-full"
            >
              <Shield className="h-4 w-4 text-brand-lime" />
              <span className="text-sm font-mono font-medium text-brand-lime">
                MPC Wallet Security
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Key Never Exists.{' '}
                <span className="text-gradient">
                  Your Assets Always Safe.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-slate leading-relaxed max-w-xl">
                DefiShard splits your key into secure shares across devices. 
                Sign transactions with <span className="text-brand-white font-semibold">both devices together</span>—your complete key never exists anywhere.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://chromewebstore.google.com/search/DeFiShard%20Wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-6 py-3"
              >
                <Chrome className="h-5 w-5" />
                <span>Add to Chrome</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#cta"
                className="btn-secondary text-base px-6 py-3"
              >
                <Smartphone className="h-5 w-5" />
                <span>Get Mobile App</span>
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                'No single point of failure',
                'Bank-grade security',
                '2FA-style experience',
                'All EVM chains supported',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4 text-brand-lime flex-shrink-0" />
                  <span className="text-sm text-brand-slate">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Bright glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-brand-lime/30 rounded-full blur-[100px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-white/20 rounded-full blur-3xl" />
            </div>
            
            {/* Product Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/hero-devices.png"
                alt="DefiShard - Mobile App and Browser Extension working together"
                width={600}
                height={500}
                className="w-full max-w-lg lg:max-w-xl h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Stats - Below hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-dark-border"
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-lime">v1.0.0</div>
              <div className="text-xs md:text-sm text-brand-slate font-mono mt-1">Public Release</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-white">2-of-2</div>
              <div className="text-xs md:text-sm text-brand-slate font-mono mt-1">MPC Threshold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-lime">Zero</div>
              <div className="text-xs md:text-sm text-brand-slate font-mono mt-1">Key Exposure</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
