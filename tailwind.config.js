/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#FFE4E0", // Cor principal (tons claros)
        secondary: "#C0908C", // Cor secundária (tons suaves)
        secondary2: "#0057AE", // Cor adicional (tons mais escuros)
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Fonte principal com fallback
      },
    },
  },
  plugins: [],
};