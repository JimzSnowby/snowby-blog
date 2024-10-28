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
      'malibu': {
        '50': '#f1f8fd',
        '100': '#dfeffa',
        '200': '#c6e3f7',
        '300': '#9fd2f1',
        '400': '#88c4ec',
        '500': '#509de1',
        '600': '#3c82d4',
        '700': '#326ec3',
        '800': '#2f5a9e',
        '900': '#2a4d7e',
        '950': '#1e304d',
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(-155deg, #dfeffa, #2f5a9e 100%)',
    },
   },
   },
   plugins: [],
  }
  