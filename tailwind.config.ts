import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5b9fc",
          400: "#8091f9",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        cyber: {
          blue: "#1e3a8a", // Navy blue - primary brand color
          purple: "#6366f1", // Indigo/purple accent
          pink: "#ec4899", // Keep pink accent
          dark: "#0a0e27", // Dark background
          darker: "#050814", // Darker background
          navy: "#1e3a8a", // Navy blue alias
          lightNavy: "#3b82f6", // Lighter navy for hover states
          light: "#f8fafc", // Light background
          lighter: "#ffffff", // Lighter background
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-gradient": "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(220,70%,30%,0.5) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(240,60%,40%,0.5) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,80%,35%,0.5) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
