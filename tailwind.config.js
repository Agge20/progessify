/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        theme: {
          dark: {
            100: "#18181B",
            200: "#09090B",
          },
          highlight: "#D81E5B",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated", "prettier-plugin-tailwindcss")],
};
