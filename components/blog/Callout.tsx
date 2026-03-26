'use client'

import { ReactNode } from 'react'
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'danger'
  title?: string
  children: ReactNode
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  danger: XCircle,
}

const styles = {
  info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  success: 'bg-brand-lime/10 border-brand-lime/30 text-brand-lime',
  danger: 'bg-red-500/10 border-red-500/30 text-red-400',
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type]

  return (
    <div className={`${styles[type]} border rounded-lg p-4 my-6`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          {title && (
            <p className="font-bold text-brand-white mb-2">{title}</p>
          )}
          <div className="text-brand-slate [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
