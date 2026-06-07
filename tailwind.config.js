/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(214 32% 91%)',
        input: 'hsl(214 32% 91%)',
        ring: '#2B7DE9',
        background: '#F8FAFC',
        foreground: '#1F2937',
        brand: {
          blue: '#0A4D8C',
          'blue-light': '#2B7DE9',
          green: '#2E8B57',
          'green-light': '#4CAF50',
          bg: '#F8FAFC',
          text: '#1F2937',
        },
        primary: {
          DEFAULT: '#2E8B57',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#0A4D8C',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        accent: {
          DEFAULT: '#ECFDF5',
          foreground: '#0A4D8C',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      keyframes: {
        'accordion-down': { from: { height: 0 }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: 0 } },
        'fade-in-up': { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(10, 77, 140, 0.12)',
        card: '0 8px 30px -12px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
