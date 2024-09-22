/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend:{
    width: {
      'container': '1280px',
    },
    fontFamily: {
      'pop': ["Poppins",],
      
    },
    padding: {
      '5px': '5px',
    }
  ,
    colors:{
      'primary':"#1C1E53",
      'secondary':"#ffff"
    },
    spacing: {
      'p128': '128px',
    }

   }  },
  plugins: [],
}

