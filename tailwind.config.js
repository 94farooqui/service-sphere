/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Pending':'#eab308',
        'Resolved':'#10b981',
        'Open' : '#ef4444'
      }
    },
  },
  plugins: [],
}