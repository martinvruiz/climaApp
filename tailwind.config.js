/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    'App.js',
    './screens/**/*.{html,js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        montserratRegular: ['Montserrat_Regular', 'sans-serif'],
        montserratBold: ['Montserrat_Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
