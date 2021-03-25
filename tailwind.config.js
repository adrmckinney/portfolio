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
      },
      backgroundImage: theme => ({
        'coffee-shop': "url('./images/jonas-jacobsson-1iTKoFJvJ6E-unsplash.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut', 'animate__slow', 'animate__slower', 'animate__delay', 'animate__delay-1', 'animate__fast'],
      settings: {
        animatedSpeed: 5000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion']
    })
  ]
}
