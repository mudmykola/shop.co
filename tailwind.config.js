/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      'c100': '#000000',
      'c101': '#F0F0F0',
      'c102': '#FFC633',
      'default': '#ffff',

    },
    extend: {

    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    }
  },
  plugins: [],
}

