'use client'

import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-brand-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Shield className="h-7 w-7 text-brand-lime" />
              <span className="text-xl font-bold text-brand-white">DeFiShard</span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-brand-slate hover:text-brand-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              DeFiShard <span className="text-brand-lime">Demo Video</span>
            </h1>
            <p className="text-brand-slate max-w-2xl mx-auto">
              Watch how DeFiShard's MPC technology protects your crypto assets with 
              distributed key generation and threshold signatures.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative">
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

            {/* Video */}
            <div className="relative aspect-video bg-black border border-dark-border border-t-0 rounded-b-lg overflow-hidden">
              <video
                src="/defishard-demo.mp4"
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Chapters */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { time: '0:00', title: 'Extension Setup', desc: 'Quick installation & device pairing' },
              { time: '0:45', title: 'Transaction Flow', desc: 'QR scan & mobile review process' },
              { time: '1:30', title: 'Secure Signing', desc: 'MPC threshold signature generation' },
            ].map((chapter) => (
              <div
                key={chapter.time}
                className="flex items-start gap-4 p-4 bg-dark-surface/50 border border-dark-border rounded-lg"
              >
                <div className="font-mono text-sm text-brand-lime bg-dark-bg px-2 py-1 rounded border border-dark-border">
                  {chapter.time}
                </div>
                <div>
                  <div className="font-semibold text-brand-white">
                    {chapter.title}
                  </div>
                  <div className="text-sm text-brand-slate font-mono">
                    {chapter.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-12 p-6 bg-dark-surface border border-dark-border rounded-lg">
            <h2 className="text-lg font-bold text-brand-white mb-4">Key Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-brand-lime">✓</span>
                <div>
                  <strong className="text-brand-white">No Single Point of Failure</strong>
                  <p className="text-brand-slate">Private key never exists in complete form</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-lime">✓</span>
                <div>
                  <strong className="text-brand-white">2-of-2 MPC Threshold</strong>
                  <p className="text-brand-slate">Both devices required to sign transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-lime">✓</span>
                <div>
                  <strong className="text-brand-white">Non-Custodial</strong>
                  <p className="text-brand-slate">You control both key shares</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-lime">✓</span>
                <div>
                  <strong className="text-brand-white">All EVM Chains</strong>
                  <p className="text-brand-slate">Ethereum, Polygon, BSC, Arbitrum, etc.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-brand-slate">
            <p>DeFiShard v1.0.0 • MPC Wallet Security</p>
            <p className="mt-2">
              <Link href="/" className="text-brand-lime hover:underline">defishard.com</Link>
              {' • '}
              <a href="mailto:info@defishard.com" className="text-brand-lime hover:underline">info@defishard.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

