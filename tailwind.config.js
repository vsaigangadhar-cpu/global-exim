/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1360px' } },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 5.5vw, 5.25rem)', { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl':  ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.028em', fontWeight: '700' }],
        'display-lg':  ['clamp(1.875rem, 3.5vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '700' }],
      },
      colors: {
        border: 'hsl(214 32% 91%)',
        input: 'hsl(214 32% 91%)',
        ring: '#2B7DE9',
        background: '#F8FAFC',
        foreground: '#0F172A',
        ink: { 900: '#0B1B30', 800: '#102A47', 700: '#1F2937', 500: '#475569', 400: '#64748B' },
        brand: {
          blue: '#0A4D8C',
          'blue-deep': '#06325E',
          'blue-light': '#2B7DE9',
          green: '#2E8B57',
          'green-light': '#4CAF50',
          gold: '#C8A862',
          bg: '#F8FAFC',
          paper: '#FAFBFC',
        },
        primary: { DEFAULT: '#2E8B57', foreground: '#FFFFFF' },
        secondary: { DEFAULT: '#0A4D8C', foreground: '#FFFFFF' },
        destructive: { DEFAULT: '#EF4444', foreground: '#FFFFFF' },
        muted: { DEFAULT: '#F1F5F9', foreground: '#64748B' },
        accent: { DEFAULT: '#F0F6FF', foreground: '#0A4D8C' },
        popover: { DEFAULT: '#FFFFFF', foreground: '#0F172A' },
        card: { DEFAULT: '#FFFFFF', foreground: '#0F172A' },
      },
      borderRadius: { lg: '0.75rem', md: '0.5rem', sm: '0.375rem' },
      keyframes: {
        'accordion-down': { from: { height: 0 }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: 0 } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        shimmer: { '100%': { backgroundPosition: '-200% 0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 40s linear infinite',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(10, 77, 140, 0.18)',
        card: '0 1px 2px rgba(15,23,42,0.04), 0 12px 40px -16px rgba(15, 23, 42, 0.18)',
        elev: '0 30px 80px -30px rgba(10, 77, 140, 0.35)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
