/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-light": "url('./src/assets/bg-mobile-light.jpg')",
        "bg-mobile-dark": "url('./src/assets/bg-mobile-dark.jpg')",
        "bg-desktop-light": "url('./src/assets/bg-desktop-light.jpg')",
        "bg-desktop-dark": "url('./src/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
