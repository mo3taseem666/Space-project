/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'font1' : ['"Barlow Condensed"'],
        'font2' : ['Barlow'],
        'font3' : ['Bellefair'],
        'font4' : ["Bellefair"]
      },
      screens: {
        'sm': {'min': '10px', 'max': '700px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '701px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'cus': {'min': '701px', 'max': '930px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

