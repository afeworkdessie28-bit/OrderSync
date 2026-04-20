import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#111827",
        surface2: "#0f172a",
        accent: "#8b5cf6",
        accentSoft: "#7c3aed22",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(99, 102, 241, 0.16)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(99,102,241,0.18), transparent 30%), radial-gradient(circle at right, rgba(236,72,153,0.16), transparent 20%)",
      },
    },
  },
  plugins: [],
};

export default config;
