/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baseball-green': '#1a472a',
        'dirt-brown': '#8b4513',
        'baseball-red': '#dc143c',
        'off-white': '#fafaf9',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
