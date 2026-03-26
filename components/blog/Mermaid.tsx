'use client'

import { useEffect, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

let initialized = false

export default function Mermaid({ chart }: MermaidProps) {
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#CCFF00',
          primaryTextColor: '#FFFFFF',
          primaryBorderColor: '#2D3340',
          lineColor: '#94A3B8',
          secondaryColor: '#161920',
          tertiaryColor: '#1D2129',
          background: '#0F1115',
          mainBkg: '#161920',
          nodeBorder: '#2D3340',
          clusterBkg: '#1D2129',
          titleColor: '#FFFFFF',
          edgeLabelBackground: '#161920',
        },
        fontFamily: 'JetBrains Mono, monospace',
      })
      initialized = true
    }

    const renderChart = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`
        const { svg } = await mermaid.render(id, chart)
        setSvg(svg)
        setError('')
      } catch (err) {
        console.error('Mermaid render error:', err)
        setError('Failed to render diagram')
      }
    }

    renderChart()
  }, [chart])

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 my-6 text-red-400 font-mono text-sm">
        {error}
      </div>
    )
  }

  return (
    <div
      className="my-6 p-4 bg-dark-surface border border-dark-border rounded-lg overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
