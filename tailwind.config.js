/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDCF73",
        secondary: "#F8F1E3",
        teal: "#2dd4bf",
        navy: "#003366",
        gold: "#FDCF73",
        cream: "#F8F1E3",
        dark: {
          bg: "#06060e",
          card: "#0c0c1d"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-funky': 'linear-gradient(135deg, #7c3aed, #ff6b35)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
