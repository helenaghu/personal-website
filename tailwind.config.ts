import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
} satisfies Config;
