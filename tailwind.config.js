/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      spacing: {
        29: "29px",
        30: "30px",
      },
      fontFamily: {
        primary: "Plus Jakarta Sans",
      },
    },
  },
  plugins: [],
};
