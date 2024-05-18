/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#E30613",
        secondary: "#005247",
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
        content: ["115rem"],
      },

      fontSize: {
        h1: ["4rem"],
        h3: ["2.2rem"],
        title_paragraph: ["2rem"],
      },

      screens: {
        sm: "800px",
      },
    },
  },
  plugins: [],
};
