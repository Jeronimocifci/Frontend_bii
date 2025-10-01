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
          DEFAULT: "#1B5E20",
          light: "#66BB6A",
        },
        highlight: {
          yellow: "#FDD835",
          orange: "#FF9800",
        },
        neutral: {
          white: "#FFFFFF",
          dark: "#212121",
        },
      },
    },
  },
  plugins: [],
}

