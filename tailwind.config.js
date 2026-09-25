/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          white: '#FFFFFF',
          ice: '#F8FAFC',
          navy: {
            DEFAULT: '#0F2442',
            50: '#F0F5FA',
            100: '#E1EBF5',
            200: '#C4D7EB',
            700: '#1A365D',
            800: '#132C4F',
            900: '#0F2442',
            950: '#09172A',
          },
          cyan: {
            DEFAULT: '#00B4D8',
            light: '#E0F7FC',
            hover: '#0096B4',
            dark: '#0077B6',
          },
          slate: {
            DEFAULT: '#64748B',
            light: '#94A3B8',
            dark: '#475569',
            border: '#E2E8F0',
          },
          whatsapp: {
            DEFAULT: '#25D366',
            hover: '#20BA5A',
            light: '#DCF8C6',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 36, 66, 0.05), 0 2px 6px -1px rgba(15, 36, 66, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(15, 36, 66, 0.1), 0 4px 12px -2px rgba(15, 36, 66, 0.05)',
        'cyan-glow': '0 0 25px -3px rgba(0, 180, 216, 0.35)',
        'modal': '0 25px 50px -12px rgba(15, 36, 66, 0.25)',
      }
    },
  },
  plugins: [],
}
