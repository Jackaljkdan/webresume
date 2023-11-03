import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    define: {
        BUILD_DATE: JSON.stringify(new Date().toISOString()),
    },
    plugins: [react({
        babel: {
            plugins: [
                ["@babel/plugin-transform-react-jsx", {
                    runtime: "automatic",
                }],
                "jsx-control-statements",
            ],
        },
    })],
});
