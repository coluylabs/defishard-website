'use client'

import { Shield, Twitter, Send, Github } from 'lucide-react'
import EmailForm from './EmailForm'

export default function Footer() {
  const footerLinks = {
    PRODUCT: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
    ],
    LEGAL: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
    SOCIAL: [
      { label: 'Twitter', href: '#', icon: Twitter },
      { label: 'Telegram', href: '#', icon: Send },
      { label: 'GitHub', href: '#', icon: Github },
    ],
  }

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg border-t border-dark-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-6 w-6 text-brand-lime" />
              <span className="text-lg font-bold font-mono tracking-tighter text-brand-white">DEFISHARD</span>
            </div>
            <p className="text-sm font-mono text-brand-slate mb-8 max-w-xs leading-relaxed">
              Institutional grade MPC security infrastructure for the decentralized web.
            </p>

            {/* Waitlist */}
            <div className="max-w-xs">
              <p className="text-xs font-mono text-brand-slate mb-4 uppercase tracking-wider">
                Waitlist for iOS
              </p>
              <EmailForm />
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold font-mono text-brand-white uppercase mb-6 tracking-wider">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link: any) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-mono text-brand-slate hover:text-brand-lime transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-brand-slate">
            © 2025 DEFISHARD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
