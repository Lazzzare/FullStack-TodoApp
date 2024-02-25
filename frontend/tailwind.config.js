/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-light": "url('/bg-mobile-light.jpg')",
        "bg-mobile-dark": "url('/bg-mobile-dark.jpg')",
        "bg-desktop-light": "url('/bg-desktop-light.jpg')",
        "bg-desktop-dark": "url('/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
