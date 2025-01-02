/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#f9fafb",
        foreground: "#333333",
      },
    },
  },
  plugins: [],
};