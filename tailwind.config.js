/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1D", 
        secondary: "#242427", 
        highlight: "#B3FF00", 
        textPrimary: "#FFFFFF",
        textSecondary: "#C4C4C4",
      },
    },
  },
  plugins: [],
}

