import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@namelessdev/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          "background-1": "var(--color-base-1)",
          "background-2": "var(--color-base-2)",
          "interactive-1": "var(--color-base-3)",
          "interactive-2": "var(--color-base-4)",
          "interactive-3": "var(--color-base-5)",
          "border-1": "var(--color-base-6)",
          "border-2": "var(--color-base-7)",
          "border-3": "var(--color-base-8)",
          "solid-1": "var(--color-base-9)",
          "solid-2": "var(--color-base-10)",
          "text-1": "var(--color-base-11)",
          "text-2": "var(--color-base-12)",
          contrast: "var(--color-base-contrast)",
          surface: "var(--color-base-surface)",
          indicator: "var(--color-base-indicator)",
          track: "var(--color-base-track)",
        },
        accent: {
          "background-1": "var(--color-accent-1)",
          "background-2": "var(--color-accent-2)",
          "interactive-1": "var(--color-accent-3)",
          "interactive-2": "var(--color-accent-4)",
          "interactive-3": "var(--color-accent-5)",
          "border-1": "var(--color-accent-6)",
          "border-2": "var(--color-accent-7)",
          "border-3": "var(--color-accent-8)",
          "solid-9": "var(--color-accent-9)",
          "solid-10": "var(--color-accent-10)",
          "text-11": "var(--color-accent-11)",
          "text-12": "var(--color-accent-12)",
          contrast: "var(--color-accent-contrast)",
          surface: "var(--color-accent-surface)",
          indicator: "var(--color-accent-indicator)",
          track: "var(--color-accent-track)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
