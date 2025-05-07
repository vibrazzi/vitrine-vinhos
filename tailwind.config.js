/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#4E2A2E", // Vinho profundo (riqueza e intensidade)
        secondary: "#2E1515", // Cinza escuro ou preto (luxo e modernidade)
        secondary2: "#F5F5F5", // Branco gelo (leveza e sofisticação)
        accent: "#C5A880", // Dourado discreto (detalhes elegantes)
        background: "#FFFFFF", // Branco puro para fundo
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Fonte principal com fallback
      },
    },
  },
  plugins: [],
};