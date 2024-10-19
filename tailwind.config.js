/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
   extend: {
    colors: {
      'cobalt-blue': '#161a1f',
      'cobalt-blue-text': '#e1e5eb',
    },
   },
   },
   plugins: [],
  }
  