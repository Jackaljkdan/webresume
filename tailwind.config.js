import { colors } from "./src/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                "sm": "690px",
            },
            colors,
        },
    },
    plugins: [],
};
