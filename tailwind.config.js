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
          // Fondo Limpio: Pearl Mint Ice (sustituye a #F8FAFC)
          ice: '#F7FAF8',
          // Primario (Dark): Deep Emerald Forest (sustituye al #0F2442)
          forest: '#052E2B',
          dark: '#052E2B',
          navy: {
            DEFAULT: '#052E2B',
            50: '#F0F7F5',
            100: '#DCEEE9',
            200: '#B8DDD4',
            500: '#0D5C52',
            600: '#0B4F46',
            700: '#08423B',
            800: '#063630',
            900: '#052E2B',
            950: '#031E1C',
          },
          // Primario Medio: Teal Botánico / Jade Clínico
          teal: {
            DEFAULT: '#0D5C52',
            light: '#E2F3F0',
            hover: '#09463E',
            dark: '#063630',
          },
          // Acento / Highlights: Emerald Mint (sustituye al cian #00B4D8)
          cyan: {
            DEFAULT: '#10B981',
            light: '#ECFDF5',
            soft: '#6EE7B7',
            hover: '#059669',
            dark: '#0D5C52',
          },
          mint: {
            DEFAULT: '#10B981',
            soft: '#6EE7B7', // Acento Suave: Menta Bio iluminado para glows
            light: '#ECFDF5',
            hover: '#059669',
            dark: '#047857',
          },
          // Acento Secundario: Champagne Gold para insignias y estrellas de reseñas
          gold: {
            DEFAULT: '#D4AF37',
            light: '#FCF8EA',
            hover: '#BF9B2C',
            dark: '#9E7E1D',
            border: '#E9D58E',
          },
          // Texto / Contraste: Grafito Orgánico sobre fondos claros
          text: '#0F1F1D',
          graphite: '#0F1F1D',
          slate: {
            DEFAULT: '#4B5E5A',
            light: '#7D9490',
            dark: '#2D3D39',
            border: '#E2ECE8',
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
        'card': '0 4px 20px -2px rgba(5, 46, 43, 0.05), 0 2px 6px -1px rgba(5, 46, 43, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(5, 46, 43, 0.10), 0 4px 12px -2px rgba(5, 46, 43, 0.05)',
        'cyan-glow': '0 0 25px -2px rgba(110, 231, 183, 0.50)',
        'mint-glow': '0 0 25px -2px rgba(110, 231, 183, 0.50)',
        'gold-glow': '0 0 20px -2px rgba(212, 175, 55, 0.40)',
        'modal': '0 25px 50px -12px rgba(5, 46, 43, 0.30)',
      }
    },
  },
  plugins: [],
}
