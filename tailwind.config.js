
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
        },
        accent: "#22D3EE"
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.35)"
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, rgba(79,79,79,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,79,79,0.18) 1px, transparent 1px)",
        "radial-mask": "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.12), transparent 60%)"
      },
      backgroundSize: {
        grid: "18px 24px"
      }
    },
  },
  plugins: [],
};
