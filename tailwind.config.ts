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
                "background-primary": "#122524",
                "text-primary": "#F7F7F7",
                "highlight-primary": "#95AA8C",
                "highlight-secondary": "#2B4C4B",
                "highlight-2-primary": "#DAB3EE",
                "highlight-2-secondary": "#9580A0",
            },
        },
    },
    plugins: [],
};
export default config;
