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
        mukta: ['Mukta'],
        unbounded: ['Unbounded']
      },
      colors:{
        myColor: '#efeff0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}