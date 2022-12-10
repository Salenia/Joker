/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#242424',
        'dark-fg': '#F5F9FD',
        'brand-darker': '#AF1818',
        'brand-dark': '#EC3131',
        'brand-dark-50': '#DF3030',
        'brand-dark-100': '#EA5353',
        'brand-dark-150': '#ED6868',
        'brand-dark-200': '#F17272',
        'brand-dark-300': '#F39E9E',
      },
    },
  },
  plugins: [],
}
