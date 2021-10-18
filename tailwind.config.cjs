// tailwind.config.cjs
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  // you dont need `purge: enabled: production` because you are using jit
  purge: [ 
    "./src/**/*.svelte",
    // may also want to include HTML files
    "./src/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'gray-lighter': '#F7F7F7',
      'text-color': '#65646A',
      'text-color-dark': '#575757',
      'white': colors.white,
    },
    backgroundImage: {
      'fold-background': "url('/enkoder-hero-img.jpg')",
    },
    // fontFamily: {
    //   'body': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
    // },
    extend: {},
  },
  variants: {},
  plugins: [],
}