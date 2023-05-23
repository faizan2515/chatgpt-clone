/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#8e8ea0",
          700: "#40414f",
          800: "#343541",
          900: "#202123",
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
