/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pop': ["Poppins",],
      
    },
    width: {
      'container': '1280px',
    },
    colors:{
      'primary':"#1C1E53",
      'secondary':"#ffff"
    }
  },
  plugins: [],
}

