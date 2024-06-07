/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#70A4C8",
      },
      colors: {
        'cblue': '#064789',
      }
    },
  },
  plugins: [],
};
