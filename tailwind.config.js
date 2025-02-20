/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffcc00",
        secondary: "#ff5733",
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [],
}

