/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        black: "#191624",
      },
      animation: {
        slideup: "slideup 1s ease-in-out",
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
