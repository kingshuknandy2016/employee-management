/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93c5fd", // Light blue
          DEFAULT: "#3b82f6", // Default blue
          dark: "#1e3a8a", // Dark blue
        },
      },
    },
  },
  plugins: [],
};
