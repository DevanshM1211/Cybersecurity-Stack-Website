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
          50: "#e6f5ff",
          100: "#b3e0ff",
          200: "#80ccff",
          300: "#4db8ff",
          400: "#1aa3ff",
          500: "#008fff", // Brand primary
          600: "#0077cc",
          700: "#005ab2", // Brand secondary
          800: "#004d99",
          900: "#00397c", // Brand tertiary
          950: "#002855",
        },
        cyber: {
          blue: "#008fff", // Brand primary color
          purple: "#005ab2", // Brand secondary accent
          pink: "#008fff", // Using brand primary
          dark: "#0a0e27", // Dark background
          darker: "#050814", // Darker background
          navy: "#00397c", // Brand tertiary - darkest
          lightNavy: "#008fff", // Brand primary for hover states
          light: "#f8fafc", // Light background
          lighter: "#ffffff", // Lighter background
        },
        // Light mode optimized colors
        light: {
          bg: {
            primary: "#ffffff",
            secondary: "#f8fafc",
            tertiary: "#f1f5f9",
          },
          text: {
            primary: "#0f172a", // slate-900
            secondary: "#475569", // slate-600
            tertiary: "#64748b", // slate-500
          },
          border: {
            primary: "#e2e8f0", // slate-200
            secondary: "#cbd5e1", // slate-300
          },
        },
        // Dark mode optimized colors
        dark: {
          bg: {
            primary: "#0a0e27",
            secondary: "#050814",
            tertiary: "#1e293b",
          },
          text: {
            primary: "#ffffff",
            secondary: "#e2e8f0", // slate-200
            tertiary: "#cbd5e1", // slate-300
          },
          border: {
            primary: "#334155", // slate-700
            secondary: "#475569", // slate-600
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-gradient": "linear-gradient(135deg, #00397c 0%, #008fff 100%)",
        "cyber-gradient-light":
          "linear-gradient(135deg, #008fff 0%, #1aa3ff 100%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(200,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210,100%,35%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(205,100%,25%,0.3) 0px, transparent 50%)",
        "mesh-gradient-light":
          "radial-gradient(at 40% 20%, hsla(200,100%,50%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210,100%,35%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(205,100%,25%,0.1) 0px, transparent 50%)",
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
