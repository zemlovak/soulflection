/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@fortawesome/fontawesome-free/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#f9f9f9',
      'black': '#000',
      'cyan-ultradark': '#042f2e',
      'cyan-dark': '#115e59',
      'cyan-light': '#0d9488',
    },
    fontFamily: {
      'rubik': 'Rubik',
      'sanbrainy': 'SanBrainy',
    },
    extend: {},
  },
  plugins: [],
}

