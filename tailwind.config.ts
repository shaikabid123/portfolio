import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-fira-code)", "ui-monospace", "monospace"],
        sans: ["var(--font-antic)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        "network-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-14px, 10px)" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.5)" },
        },
      },
      animation: {
        "network-drift": "network-drift 22s ease-in-out infinite",
        "node-pulse": "node-pulse 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
