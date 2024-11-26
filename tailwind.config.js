/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        // dark color
        primary: "#0FF1F6",
        secondary: "#002228",
        tertiary: "#14BCB2",
        whitecolor: "#FFFFFF",

        // light color
        lightPrimary: "#F1F7FC",
        lightSecondary: "#F9F9FC",
        lightTertiary: "#E2E8F0",
        lightWhitecolor: "#F8F9FA",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        montserrot: ["Montserrat", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
