import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Institutional Precision Theme
        dark: {
          bg: '#0F1115',      // Deep Charcoal
          surface: '#161920', // Lighter Charcoal
          elevated: '#1D2129', // Card Background
          border: '#2D3340',   // Slate Border
        },
        brand: {
          lime: '#CCFF00',    // Electric Lime (Primary Accent)
          slate: '#94A3B8',   // Secondary Text
          white: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#CCFF00', // Electric Lime
          hover: '#B3E600',
          light: '#E0FF66',
          text: '#000000',    // Text on primary
        },
        secondary: {
          DEFAULT: '#94A3B8', // Slate
          hover: '#FFFFFF',
        },
        success: {
          DEFAULT: '#CCFF00', // Using Lime for success too in this theme
        },
        danger: {
          DEFAULT: '#FF3333', // Sharp Red
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0F1115 0%, #161920 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'technical': '0 4px 0 0 rgba(0, 0, 0, 0.2)',
        'technical-hover': '0 6px 0 0 rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
export default config
