const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Adelle Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FC7B07",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
