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
        'brand-dark': '#EC3131',
        'brand-dark-100': '#EA5353',
        'brand-dark-200': '#F17272',
      },
    },
  },
  plugins: [],
}
