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

        subtext: "var(--subtext)",
        text: "var(--text)",

        like: "var(--like)",
        comment: "var(--comment)",
        repost: "var(--repost)",

        "average-yellow": "var(--average-yellow)",
        "bad-red": "var(--bad-red)",
        "good-green": "var(--good-green)",
      },
      spacing: {
        "header-height": "var(--header-height)",
        "picture-md": "var(--picture-md)",
      },
    },
  },
  plugins: [],
};
export default config;
