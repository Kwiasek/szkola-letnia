/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    colors: {
      orange: "#FF9800",
      green: {
        200: "#D9EDBF",
        500: "#90D26D",
        800: "#2C7865",
      },
      gray: "#D9D9D9",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url(/close-up-woman-hand-put-topping-homemade-pizza.jpg)",
      },
    },
  },
  plugins: [],
};
