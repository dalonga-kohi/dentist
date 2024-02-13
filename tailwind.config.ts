import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { m } from "framer-motion";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#161616",
        foreground: "#fafafa",
        primary: {
          DEFAULT: "#1758fc",
          foreground: "#fafafa",
        },
        secondary: {
          DEFAULT: "#ee33ff",
        },
        focus: "#1758fc",
      }, 
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
