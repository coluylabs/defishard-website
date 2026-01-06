'use client'

import { motion } from 'framer-motion'
import { Play, Monitor, Smartphone, Shield } from 'lucide-react'
import { useState, useRef } from 'react'

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  return (
    <section id="demo" className="section bg-dark-bg relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(208, 255, 0, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(208, 255, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-mono text-brand-lime mb-4 uppercase tracking-wider">
            // See It In Action
          </div>
          <h2 className="heading-lg mb-4">
            Watch How DefiShard{' '}
            <span className="text-gradient">Protects Your Assets</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            A 2-minute walkthrough showing the complete signing flow—from transaction 
            initiation to mobile approval.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
            {/* Terminal-style header */}
            <div className="bg-dark-surface border border-dark-border border-b-0 rounded-t-lg px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-mono text-brand-slate">
                  defishard_demo.mp4
                </span>
              </div>
              <div className="text-xs font-mono text-dark-border">
                HD 1080p
              </div>
            </div>

            {/* Video Player Area */}
            <div className="relative aspect-video bg-dark-elevated border border-dark-border border-t-0 rounded-b-lg overflow-hidden">
              {isPlaying ? (
                <video
                  ref={videoRef}
                  src="/defishard-demo.mp4"
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  {/* Placeholder/Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-surface via-dark-bg to-dark-elevated">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Decorative circles */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute w-96 h-96 border border-brand-lime/20 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        className="absolute w-64 h-64 border border-brand-lime/30 rounded-full"
                      />
                      
                      {/* Device mockups */}
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="absolute left-[15%] top-1/2 -translate-y-1/2"
                      >
                        <div className="glass-strong rounded-xl p-4 border border-dark-border">
                          <Monitor className="w-12 h-12 text-brand-slate" />
                          <div className="text-xs font-mono text-brand-slate mt-2">Extension</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute right-[15%] top-1/2 -translate-y-1/2"
                      >
                        <div className="glass-strong rounded-xl p-4 border border-dark-border">
                          <Smartphone className="w-12 h-12 text-brand-slate" />
                          <div className="text-xs font-mono text-brand-slate mt-2">Mobile</div>
                        </div>
                      </motion.div>

                      {/* Center shield */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <Shield className="w-16 h-16 text-brand-lime/50" />
                      </motion.div>
                    </div>

                    {/* Scan lines effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(208, 255, 0, 0.5) 2px, rgba(208, 255, 0, 0.5) 4px)'
                      }}
                    />
                  </div>

                  {/* Play Button */}
                  <motion.button
                    onClick={handlePlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 flex items-center justify-center z-20 group/play"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-lime rounded-full blur-xl"
                      />
                      
                      {/* Play button */}
                      <div className="relative w-20 h-20 rounded-full bg-brand-lime flex items-center justify-center shadow-technical group-hover/play:shadow-technical-hover transition-shadow">
                        <Play className="w-8 h-8 text-primary-text ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Click to play text */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                      <span className="text-sm font-mono text-brand-slate bg-dark-surface/80 px-4 py-2 rounded-full border border-dark-border">
                        Click to play demo
                      </span>
                    </motion.div>
                  </motion.button>
                </>
              )}
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-brand-lime/50 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-brand-lime/50 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-brand-lime/50 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-brand-lime/50 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Video Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { time: '0:00', title: 'Extension Setup', desc: 'Quick installation & pairing' },
            { time: '0:45', title: 'Transaction Flow', desc: 'QR scan & mobile review' },
            { time: '1:30', title: 'Secure Signing', desc: 'MPC signature generation' },
          ].map((chapter, index) => (
            <motion.div
              key={chapter.time}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-dark-surface/50 border border-dark-border rounded-lg hover:border-brand-lime/30 transition-colors cursor-pointer group"
              onClick={handlePlay}
            >
              <div className="font-mono text-sm text-brand-lime bg-dark-bg px-2 py-1 rounded border border-dark-border group-hover:border-brand-lime/50 transition-colors">
                {chapter.time}
              </div>
              <div>
                <div className="font-semibold text-brand-white group-hover:text-brand-lime transition-colors">
                  {chapter.title}
                </div>
                <div className="text-sm text-brand-slate font-mono">
                  {chapter.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

