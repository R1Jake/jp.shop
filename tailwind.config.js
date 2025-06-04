/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#8e44ad"
      }
    },
  },
  plugins: [],
}