/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // keyframes: {
      //   fadeOut: {
      //     '0%': { opacity: 1 },
      //     '100%': { opacity: 0 },
      //   },
      // },
      animation: {
        'spin-slow': 'spin 3s linear infinite',   // Slow rotation
        'spin-fast': 'spin 0.5s linear infinite',  // Fast rotation
        // fadeOut: 'fadeOut 1s ease-out forwards', // 1s fade-out animation
       
      },
      fontFamily:{
        suse:['SUSE']
      }
    },
  },
  plugins: [],
}
