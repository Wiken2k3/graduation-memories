/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#FCFCF9",
        foreground: "#111827",

        primary: "#EA580C",

        secondary: "#6B7280",

        surface: "#FFFFFF",

        border: "#E5E7EB",
      },

      borderRadius: {
        xl: "20px",
        "2xl": "28px",
      },

      maxWidth: {
        content: "1200px",
      },
    },
  },

  plugins: [],
};