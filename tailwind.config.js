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
    backgroundImage: {
      'custom-gradient': 'linear-gradient(-155deg, #351C75, #000 100%)',
    },
   },
   },
   plugins: [],
  }
  