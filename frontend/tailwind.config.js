/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-light": "url('./src/assets/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
