/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js, html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Poppins', sans-serif"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cool-gray': '#e1e8f1',
      'white': '#ffffff',
      'light-green': '#35D399',
      'metal': {
        400: '#F4F4F5',
        600: '#52525B'
      }
    },
  },
  plugins: [],
}
