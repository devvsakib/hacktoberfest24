/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust if your files are in other directories
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#50da4c', // Your custom green color
        'font-green':'#183717'
      },
    },
  },
  plugins: [],
};
