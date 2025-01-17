/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averta: ["Averta", "sans-serif"],
      },
      colors: {
        primary: "#00d563",
      },
      transitionProperty: {
        transform: "transform",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
};
