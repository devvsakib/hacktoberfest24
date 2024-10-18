/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#50da4c', // Your custom green color
        'bg-color': 'var(--bg-color)',
        'text-color': 'var(--text-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'border-color': 'var(--border-color)',
      },
      backgroundColor: {
        gColor: 'var(--gradColor)'
      }
    },
  },
  plugins: [require('daisyui')],
}

