/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1e293b',
        'navy-600': '#0f172a',
        'slate-500': '#64748b',
        'slate-700': '#334155',
        'electric-blue': '#3b82f6',
        'cyan': '#06b6d4',
        'cyan-light': '#22d3ee',
        'emerald': '#10b981',
        'emerald-light': '#d1fae5',
        'surface': '#f8fafc',
        'border-muted': '#e2e8f0',
        'muted': '#94a3b8',
        'off-white': '#f8fafc',
      },
      fontFamily: {
        'sans': ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
