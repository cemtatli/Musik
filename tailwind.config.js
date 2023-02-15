/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        12.5: "3.125rem",
        15: "3.75rem",
        30: "7.5rem",
        50: "12.5rem",
        90: "22.5rem",
      },
      colors: {
        "musik-blue": " #381DDB",
        "musik-orange": " #FC5252;",
        "musik-light-red": " #FFA3A3;",
        "musik-light-purple": " #ae00ff;",
      },
      fontSize: {
        heading: ["72px", "88px"],
        time: ["144px", "176px"],
      },
    },
  },
  plugins: [],
};
