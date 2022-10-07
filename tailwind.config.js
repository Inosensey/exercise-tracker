/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Modules/**/*.{js,ts,jsx,tsx}",
    "./src/Common/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: "260px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      'poppins': ['Poppins']
    },
    extend: {
      colors: {
        GrayishColor: '#343634',
        PinkishColor: '#ff7777',
        DarkBlueColor: '#1e292b',
        GrayColor: "#4f6c6b",
        Overlay: "rgba(0, 0, 0, 0.7)"
      }
    },
  },
  plugins: [],
}
