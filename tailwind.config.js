/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: {
      colors: {
        primary: '#FF6363', 
        secondary: {
          1: '#E2E2D5',
          2: '#888883', 
          3: '#FFFFFF'
        },
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
}
