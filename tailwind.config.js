/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        h1Shadow: '0px 0px 8px rgba(255, 255, 255, 0.4)'
      },
      boxShadow: {
        containerShadow: '0px 113px 45px rgba(0, 0, 0, 0.02), 0px 64px 38px rgba(0, 0, 0, 0.08), 0px 28px 28px rgba(0, 0, 0, 0.13), 0px 7px 16px rgba(0, 0, 0, 0.15), 0px 0px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}

