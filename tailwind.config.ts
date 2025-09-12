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
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "home-image": "url('/welcome-ceremony.jpg')",
                "animated-noise": "url('data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence id='turbulence'%3E%3Canimate attributeName='baseFrequency' dur='8s' values='0.9 0.9;0.8 0.8; 0.9 0.9' repeatCount='indefinite'%3E%3C/animate%3E%3C/feTurbulence%3E%3CfeDisplacementMap in='SourceGraphic' scale='60'%3E%3C/feDisplacementMap%3E%3C/filter%3E%3C/svg%3E');",
                "noise": "url('/generated-html.svg')",
                "gradient": "linear-gradient(90deg,rgba(242, 47, 115, 0.5) 0%, rgba(239, 156, 115, 0.5) 50%, rgba(242, 47, 115, 0.5) 100%), url('/noise.svg'), linear-gradient(90deg,rgba(242, 47, 115, 1) 0%, rgba(239, 156, 115, 1) 50%, rgba(242, 47, 115, 1) 100%)",
                "gradient-radial": "radial-gradient(circle,rgba(239, 156, 115, 0.5) 0%, rgba(242, 47, 115, 0.5) 50%), url('/noise.svg'), radial-gradient(circle,rgba(239, 156, 115, 1) 0%, rgba(242, 47, 115, 1) 50%);",
                "about": `linear-gradient(90deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0) 75%,rgba(255,255,255,1) 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 1422 1422'%3E%3Cg stroke-width='2.5' stroke='%23ffcd09' fill='none' stroke-linecap='round'%3E%3Cpath d='M 0 972 Q 355.5 -100 711 400 Q 1066.5 900 1422 972' opacity='0.39'%3E%3C/path%3E%3Cpath d='M 0 954 Q 355.5 -100 711 400 Q 1066.5 900 1422 954' opacity='0.69'%3E%3C/path%3E%3Cpath d='M 0 936 Q 355.5 -100 711 400 Q 1066.5 900 1422 936' opacity='0.82'%3E%3C/path%3E%3Cpath d='M 0 918 Q 355.5 -100 711 400 Q 1066.5 900 1422 918' opacity='0.93'%3E%3C/path%3E%3Cpath d='M 0 900 Q 355.5 -100 711 400 Q 1066.5 900 1422 900' opacity='1.00'%3E%3C/path%3E%3Cpath d='M 0 882 Q 355.5 -100 711 400 Q 1066.5 900 1422 882' opacity='0.99'%3E%3C/path%3E%3Cpath d='M 0 864 Q 355.5 -100 711 400 Q 1066.5 900 1422 864' opacity='0.40'%3E%3C/path%3E%3Cpath d='M 0 846 Q 355.5 -100 711 400 Q 1066.5 900 1422 846' opacity='0.94'%3E%3C/path%3E%3Cpath d='M 0 828 Q 355.5 -100 711 400 Q 1066.5 900 1422 828' opacity='0.89'%3E%3C/path%3E%3Cpath d='M 0 810 Q 355.5 -100 711 400 Q 1066.5 900 1422 810' opacity='0.34'%3E%3C/path%3E%3Cpath d='M 0 792 Q 355.5 -100 711 400 Q 1066.5 900 1422 792' opacity='0.45'%3E%3C/path%3E%3Cpath d='M 0 774 Q 355.5 -100 711 400 Q 1066.5 900 1422 774' opacity='0.63'%3E%3C/path%3E%3Cpath d='M 0 756 Q 355.5 -100 711 400 Q 1066.5 900 1422 756' opacity='0.65'%3E%3C/path%3E%3Cpath d='M 0 738 Q 355.5 -100 711 400 Q 1066.5 900 1422 738' opacity='0.82'%3E%3C/path%3E%3Cpath d='M 0 720 Q 355.5 -100 711 400 Q 1066.5 900 1422 720' opacity='0.74'%3E%3C/path%3E%3Cpath d='M 0 702 Q 355.5 -100 711 400 Q 1066.5 900 1422 702' opacity='0.11'%3E%3C/path%3E%3Cpath d='M 0 684 Q 355.5 -100 711 400 Q 1066.5 900 1422 684' opacity='0.40'%3E%3C/path%3E%3Cpath d='M 0 666 Q 355.5 -100 711 400 Q 1066.5 900 1422 666' opacity='0.74'%3E%3C/path%3E%3Cpath d='M 0 648 Q 355.5 -100 711 400 Q 1066.5 900 1422 648' opacity='0.23'%3E%3C/path%3E%3Cpath d='M 0 630 Q 355.5 -100 711 400 Q 1066.5 900 1422 630' opacity='0.55'%3E%3C/path%3E%3Cpath d='M 0 612 Q 355.5 -100 711 400 Q 1066.5 900 1422 612' opacity='0.59'%3E%3C/path%3E%3Cpath d='M 0 594 Q 355.5 -100 711 400 Q 1066.5 900 1422 594' opacity='0.28'%3E%3C/path%3E%3Cpath d='M 0 576 Q 355.5 -100 711 400 Q 1066.5 900 1422 576' opacity='0.89'%3E%3C/path%3E%3Cpath d='M 0 558 Q 355.5 -100 711 400 Q 1066.5 900 1422 558' opacity='0.39'%3E%3C/path%3E%3Cpath d='M 0 540 Q 355.5 -100 711 400 Q 1066.5 900 1422 540' opacity='0.64'%3E%3C/path%3E%3Cpath d='M 0 522 Q 355.5 -100 711 400 Q 1066.5 900 1422 522' opacity='0.44'%3E%3C/path%3E%3Cpath d='M 0 504 Q 355.5 -100 711 400 Q 1066.5 900 1422 504' opacity='0.15'%3E%3C/path%3E%3Cpath d='M 0 486 Q 355.5 -100 711 400 Q 1066.5 900 1422 486' opacity='0.88'%3E%3C/path%3E%3Cpath d='M 0 468 Q 355.5 -100 711 400 Q 1066.5 900 1422 468' opacity='0.26'%3E%3C/path%3E%3Cpath d='M 0 450 Q 355.5 -100 711 400 Q 1066.5 900 1422 450' opacity='0.71'%3E%3C/path%3E%3Cpath d='M 0 432 Q 355.5 -100 711 400 Q 1066.5 900 1422 432' opacity='0.45'%3E%3C/path%3E%3Cpath d='M 0 414 Q 355.5 -100 711 400 Q 1066.5 900 1422 414' opacity='0.91'%3E%3C/path%3E%3Cpath d='M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396' opacity='0.17'%3E%3C/path%3E%3Cpath d='M 0 378 Q 355.5 -100 711 400 Q 1066.5 900 1422 378' opacity='0.76'%3E%3C/path%3E%3Cpath d='M 0 360 Q 355.5 -100 711 400 Q 1066.5 900 1422 360' opacity='0.49'%3E%3C/path%3E%3Cpath d='M 0 342 Q 355.5 -100 711 400 Q 1066.5 900 1422 342' opacity='0.74'%3E%3C/path%3E%3Cpath d='M 0 324 Q 355.5 -100 711 400 Q 1066.5 900 1422 324' opacity='0.45'%3E%3C/path%3E%3Cpath d='M 0 306 Q 355.5 -100 711 400 Q 1066.5 900 1422 306' opacity='0.10'%3E%3C/path%3E%3Cpath d='M 0 288 Q 355.5 -100 711 400 Q 1066.5 900 1422 288' opacity='0.78'%3E%3C/path%3E%3Cpath d='M 0 270 Q 355.5 -100 711 400 Q 1066.5 900 1422 270' opacity='0.10'%3E%3C/path%3E%3Cpath d='M 0 252 Q 355.5 -100 711 400 Q 1066.5 900 1422 252' opacity='0.99'%3E%3C/path%3E%3Cpath d='M 0 234 Q 355.5 -100 711 400 Q 1066.5 900 1422 234' opacity='0.46'%3E%3C/path%3E%3Cpath d='M 0 216 Q 355.5 -100 711 400 Q 1066.5 900 1422 216' opacity='0.14'%3E%3C/path%3E%3Cpath d='M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198' opacity='0.15'%3E%3C/path%3E%3Cpath d='M 0 180 Q 355.5 -100 711 400 Q 1066.5 900 1422 180' opacity='0.13'%3E%3C/path%3E%3Cpath d='M 0 162 Q 355.5 -100 711 400 Q 1066.5 900 1422 162' opacity='0.95'%3E%3C/path%3E%3Cpath d='M 0 144 Q 355.5 -100 711 400 Q 1066.5 900 1422 144' opacity='0.79'%3E%3C/path%3E%3Cpath d='M 0 126 Q 355.5 -100 711 400 Q 1066.5 900 1422 126' opacity='0.46'%3E%3C/path%3E%3Cpath d='M 0 108 Q 355.5 -100 711 400 Q 1066.5 900 1422 108' opacity='0.21'%3E%3C/path%3E%3Cpath d='M 0 90 Q 355.5 -100 711 400 Q 1066.5 900 1422 90' opacity='0.09'%3E%3C/path%3E%3Cpath d='M 0 72 Q 355.5 -100 711 400 Q 1066.5 900 1422 72' opacity='0.58'%3E%3C/path%3E%3Cpath d='M 0 54 Q 355.5 -100 711 400 Q 1066.5 900 1422 54' opacity='0.25'%3E%3C/path%3E%3Cpath d='M 0 36 Q 355.5 -100 711 400 Q 1066.5 900 1422 36' opacity='0.76'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");`,
            },
            backgroundColor: {
                "lighten": "rgba(156, 45, 45, 0.2)",
            },
            colors: {
                "background-primary": "#FFFFFF",
                "text-primary": "#000000",
                "highlight-primary": "#F22F73",
                "highlight-secondary": "#EF9C73",
                "highlight-2-primary": "#FFCD09",
                "highlight-2-secondary": "#F2B6AF",
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
