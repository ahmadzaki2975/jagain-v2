/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#628FFE",
          secondary: "#769DFC",
        },
        grey: {
          primary: "#5D5D5D",
        },
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
