const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        beer: '#BF8B3F',
        ice: '#ABC3C7',
        pink: '#FFE1E1',
        grayFigma: '#414535',

      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}