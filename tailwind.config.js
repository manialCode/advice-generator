/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neonGreen: 'rgb(var(--neon-green))',
      lightCyan: 'rgb(var(--light-cyan))',
      grayishBlue: 'rgb(var(--grayish-blue))',
      darkGrayishBlue: 'rgb(var(--dark-grayish-blue))',
      darkBlue: 'rgb(var(--dark-blue))',
    },
    fontSize: {
      quote: 'var(--quote-font-size)',
    },

    extend: {

    },


  },
  plugins: [],
}

