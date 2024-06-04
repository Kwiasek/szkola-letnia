/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
    theme: {
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
            serif: ["Merriweather", "serif"],
            kalam: ["Kalam", "serif"],
        },
        extend: {
            backgroundImage: {
                hero: "url(/close-up-woman-hand-put-topping-homemade-pizza.jpg)",
                background: "url(/garlic.jpg)",
            },
            colors: {
                orange: "#FF9800",
                green: {
                    200: "#D9EDBF",
                    500: "#90D26D",
                    800: "#2C7865",
                },
                gray: "#D9D9D9",
                coffee: {
                    // OLD
                    // 200: "#FFE6D6",
                    // 400: "#BCAAA4",
                    // 600: "#877670",

                    100: "#fff6f0",
                    200: "#faf0ea",
                    300: "#f1e4da",
                    400: "#E1CBBF",
                    500: "#c3aca4",
                    600: "#a8918a",
                    700: "#877670",
                    800: "#6f625d",
                    900: "#453d3a",
                },
            },
            aspectRatio: {
                "2/3": "2/3",
            },
        },
    },
    plugins: [],
};
