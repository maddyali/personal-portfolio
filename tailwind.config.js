/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f9f9",
        "primary-dark": "#2d2e32",
        "secondary-dark": "#555",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
