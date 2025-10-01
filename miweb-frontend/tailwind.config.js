// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1B5E20", // Verde Oscuro
          light: "#66BB6A",   // Verde Claro
        },
        highlight: {
          yellow: "#FDD835", // Amarillo Cítrico
          orange: "#FF9800", // Naranja Fruta
        },
        neutral: {
          white: "#FFFFFF",  // Blanco Puro
          dark: "#212121",   // Negro Suave
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // <- usamos la fuente de next/font
      },
    },
  },
  plugins: [],
};

