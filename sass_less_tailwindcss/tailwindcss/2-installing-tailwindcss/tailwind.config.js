/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src//*.html', './src//*.js'], 
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: '#ff6347', 
        secondary: '#4a90e2',
      }, 
      fontFamily: {
        body: ['Roboto', 'sans-serif'], 
      }, 
    },
  },
  variants: {
    extend: [],
  }, 
  plugins: [],
}

