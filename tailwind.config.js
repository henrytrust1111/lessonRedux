/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'phone' : {'max':'480px'},
      'tablet' : '1024px',
      'desktop' : '1280px',
      'smallphone': '351px'
    },
  },
  plugins: [],
}

