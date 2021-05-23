const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#eacc8d',
          DEFAULT: '#cc9725',
          dark: '#664b12',
        },
        secondary: '#255acc'
      },
      fontFamily: {
        "source-serif-pro": ['Source Serif Pro', 'Georgia', 'serif']
      }
    },
    maxWidth: {
      '4/5': '80%'
    }
  },
  variants: {
    extend: {
      contrast: ['hover']
    },
  },
  plugins: [],
}
