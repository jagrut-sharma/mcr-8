/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Libre: ["Libre Franklin", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
      },
      gridTemplateColumns: {
        colLayout: "2fr 1fr",
      },
    },
  },
  plugins: [],
};
