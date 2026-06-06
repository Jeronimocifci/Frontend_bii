/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1B5C28",
          medium:  "#2E7D32",
          light:   "#66BB6A",
        },
        accent: {
          mango:    "#FF8F00",
          citrus:   "#F9A825",
          mora:     "#C62828",
          maracuya: "#F06292",
        },
        neutral: {
          dark:  "#212121",
          mid:   "#616161",
          light: "#F5F5F5",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}
