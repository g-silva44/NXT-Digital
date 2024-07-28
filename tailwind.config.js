/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#E30613",
        secondary: "#F97316",
        neutral: "#252525",
        text: "#333",
        white: "#fff",
        dark_gray: "#161616",
      },

      fontFamily: {
        sans: ["Poppins"],
        serif: ["Raleway"],
      },

      spacing: {
        content: ["130rem"],
      },

      fontSize: {
        h1: ["4rem"],
        h3: ["2.2rem"],
        title_paragraph: ["2rem"],
      },

      screens: {},
    },
  },
  plugins: [],
};
