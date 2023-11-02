import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "sm": "690px",
            },
            colors: {
                accent: colors.red[600],
                link: colors.cyan[500],
                "link-h": colors.cyan[800],
            },
        },
    },
    plugins: [],
};

