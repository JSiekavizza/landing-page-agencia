/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#3dbeff",
      white: "#ffffff",
      black: "#21252a",
      gray: "#94929d",
      subrayado: "#fdf2b8",
      green: "#1e5749",
      greenClaro: "#90d4c5",
      blueTexto: "#104c66",
    },
    extend: {
      fontFamily: {
        display: ["Barlow", "sans-serif"],
        titulo: ["Fraunces", "serif"],
      },
    },
  },

  plugins: [],
};
