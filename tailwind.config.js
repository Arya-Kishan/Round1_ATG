/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        'nav': '0 2px 12x 0px black',
      }
    },
  },
  plugins: [],
}