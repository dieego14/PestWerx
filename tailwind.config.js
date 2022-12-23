/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myFont: ['Bebas Neue'],
        Vollkorn: ['Vollkorn'],
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [],
}