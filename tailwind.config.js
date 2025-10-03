/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#111F4D',
        'brand-light': '#F2F4F7',
        'brand-accent': '#E43A19',
        'brand-dark': '#020205',
      },
    },
  },
  plugins: [],
}
