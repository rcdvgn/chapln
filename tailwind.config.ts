import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",

        background: "var(--background)",

        "foreground-pri": "var(--foreground-pri)",
        "foreground-sec": "var(--foreground-sec)",
        "foreground-ter": "var(--foreground-ter)",

        "text-light": "var(--text-light)",
        text: "var(--text)",

        like: "var(--like)",
        comment: "var(--comment)",
        repost: "var(--repost)",

        "average-yellow": "var(--average-yellow)",
        "bad-red": "var(--bad-red)",
        "good-green": "var(--good-green)",
      },
      spacing: {
        "header-height": "4.375",
      },
    },
  },
  plugins: [],
};
export default config;
