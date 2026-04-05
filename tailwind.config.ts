import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-oswald)", "Impact", "Arial Narrow", "sans-serif"],
        accent: ["var(--font-anton)", "Impact", "sans-serif"],
        serif: ["var(--font-crimson)", "Georgia", "serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      colors: {
        cream: "#FAFAF8",
        sand: "#DBC19C",
        brown: "#735748",
        blue: "#0976B2",
      },
    },
  },
  plugins: [],
};

export default config;
