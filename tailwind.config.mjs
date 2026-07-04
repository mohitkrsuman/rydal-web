/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hero-accent': '#2F6BFF',
        'success': '#1DB954',
        'warning': '#F0A500',
        'danger': '#C23B22',
        'info': '#4A90D9',
        'dark-bg': '#0A0A0A',
        'dark-surface': '#111111',
        'dark-elevated': '#1A1A1A',
        'dark-border': '#242424',
        'dark-text-primary': '#F0EEE8',
        'dark-text-secondary': '#888580',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
