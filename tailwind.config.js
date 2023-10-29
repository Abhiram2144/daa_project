/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ], 
  darkMode:"class", 
  theme: {
    extend: {
      textColor: {
        'gfg-green': '#5d9e52',
        'gfg-dark': "#414341"
      },
      backgroundColor:{
        "gfg-green": '#5d9e52',
        "custom-grey" : '#d9d9d9',
        "custom-dark" : '#414341',
        "custom-dark-2" : '#242424'
      },
      fontFamily:{
        "custom-font":[ 'Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}

