/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0c',
          dark: '#121216',
          card: '#181820',
          border: '#2a2a36',
          muted: '#8e8e9e',
          ivory: '#faf7f2',
          cream: '#f3eee4',
          gold: {
            DEFAULT: '#d4af37',
            light: '#f3d368',
            dark: '#a8841b',
            hover: '#e5be48',
          },
          green: {
            DEFAULT: '#1c3a2b',
            accent: '#2d5a43',
            light: '#eaf2ec',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f3d368 0%, #d4af37 50%, #a8841b 100%)',
        'dark-gradient': 'linear-gradient(180deg, #121216 0%, #0a0a0c 100%)',
        'card-gradient': 'linear-gradient(145deg, #181820 0%, #121216 100%)',
      }
    },
  },
  plugins: [],
}
