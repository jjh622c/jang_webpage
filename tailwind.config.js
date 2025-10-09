/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        'korean-red': '#E63946',
        'korean-blue': '#457B9D',
        'korean-green': '#2A9D8F',
        'korean-yellow': '#F4A261',
      }
    },
  },
  plugins: [],
}
