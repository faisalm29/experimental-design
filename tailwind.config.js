/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      heading: ["Eczar", "serif"],
      body: ["Fira Sans", "sans-serif"],
    },
    colors: {
      black: "#2C3639",
      "lighter-black": "#384448",
      white: "#F7F7F7",
      "darker-light": "#EBEBEB",
      blue: "#5800FF",
      yellow: "#FFD369",
    },
    extend: {},
  },
  plugins: [],
};
