export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0f172a', card: '#1e293b', border: '#334155' },
        violet: { DEFAULT: '#8b5cf6', light: '#a78bfa' },
        ind: { DEFAULT: '#6366f1' },
        sky: { DEFAULT: '#06b6d4' }
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] }
    }
  },
  plugins: []
}
