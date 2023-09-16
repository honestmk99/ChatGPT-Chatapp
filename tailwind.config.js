/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      spacing: {
        29: "29px",
        30: "30px",
        100: "100px",
      },
      fontFamily: {
        primary: "Plus Jakarta Sans",
      },
      colors: {
        blue: "#253C6E",
        blackblue: "#182b54",
        rightblue: "#16629C",
        white: "#E1E9FD",
        gray: "#b8bfd1",
      },
    },
  },
  plugins: [],
};
