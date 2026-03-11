/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0A',
        starlight: '#F5F5F5',
        nebula: '#3B82F6',
        'nebula-dim': '#1d4ed8',
        'nebula-glow': '#60a5fa',
        membrane: '#1a2744',
        dust: '#8B7355',
        'dust-dim': '#6B5B45',
        signal: '#4ECDC4',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        drift: 'drift 120s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1.1)' },
          '50%': { transform: 'translate(-2%, -1%) scale(1.15)' },
          '100%': { transform: 'translate(0, 0) scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '100%': {
            boxShadow:
              '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
};
