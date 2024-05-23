/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit' : 'Outfit Variable, sans-serif',
    },
    extend: {
      backgroundImage: {
        'icon-view': "src/assets/images/icon-view.svg",
      }
    },
    boxShadow: {
      'custom': '0 0px 50px 0 hsla(0, 0%, 0%, 0.15)',
    },
  },
  plugins: [],
}