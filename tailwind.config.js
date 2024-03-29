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
        emarald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        blue: colors.blue,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        black: colors.black,
        vermilion: '#D14126',
        lightVermilion: '#E5816F',
        mustard: '#CFB026',
        offBlue: '#665794',
        anitiqueFuchsia: '#93578D',
        softFuchsia: '#D3B5D0',
        dimGray: '#5c5f85'

      },
      backgroundImage: theme => ({
        'coffee-shop': "url('./images/jonas-jacobsson-1iTKoFJvJ6E-unsplash.jpg')",
        computer: "url('./images/clement-helardot-95YRwf6CNw8-unsplash.jpg')",
        'close-computer': "url('./images/tianyi-ma-WiONHd_zYI4-unsplash.jpg')",
        openMic: "url('./images/openMicTwo.png')",
        moon: "url('./images/abed-ismail-_jhUrn9o8yM-unsplash.jpg')",
        greetly: "url('./images/greetly-title.png')",
        trivia: "url('./images/triviaFour.png')",
        snippet: "url('./images/snippetDate.png')",
        covid: "url('./images/covid.png')",
        whiteTalk: "url('./images/white-talk.png')",
        juniousBrickhouse: "url('./images/juniousBrickhouse.png')",
        handAndFoot: "url('./images/hand_and_foot.png')",
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // { '@tailwindcss/jit': {} },
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__slow', 'animate__slower', 'animate__delay', 'animate__delay-5'],
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
