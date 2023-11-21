/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'general': "url('/src/assets/bg.jpg')"
      }
    },
  },
  plugins: [],
}
