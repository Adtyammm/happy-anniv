/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily : {
        centaury: ["Centaury Display"],
      },
      colors: {
        highlight: '#ff8ba7',
        primary: '#33272a',
        stroke: '#594a4e',
        secondary: '#ffc6c7',
        teriary: '#c3f0ca',
      },
      
    },
  },
  plugins: [],
}

