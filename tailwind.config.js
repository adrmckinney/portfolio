const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        lime: colors.lime,
        green: colors.green,
        emarald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        blue: colors.blue,
        lightBlue: colors.lightBlue,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        rose: colors.rose,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        black: colors.black
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
