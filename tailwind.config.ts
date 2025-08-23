import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "home-image": "url('/welcome-ceremony.jpg')",
            },
            colors: {
                "background-primary": "#48212F",
                "text-primary": "#F7F7F7",
                "highlight-primary": "#8E6674",
                "highlight-secondary": "#e37f9656",
                "highlight-2-primary": "#FED03D",
                "highlight-2-secondary": "#9580A0",
            },
            animation: {
                dropDown: "dropDown 0.4s ease-in-out forwards",
            },
            keyframes: {
                dropDown: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "20%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
