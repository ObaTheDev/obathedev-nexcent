/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGrey: "#4D4D4D",
        lightGrey: "#717171",
        themeGreen: "#4CAF4F",
        silver: "#F5F7FA"
        },
    },
  },
}
