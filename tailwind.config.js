/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        athletic: ['"Athletic Pro Variable"', 'sans-serif'],
        courier:['"Courier New"', 'monospace'] // Make sure the name matches
      },
    },
  },
  plugins: [],
}