/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        background: '#fff',
        primary: '#6f4e37',
        secondary: '#F5F5DC',
        beige: '#d7ccc8',
        accent: '#be8b66',
      },
      screens: {
        xm: '480px',
        xl: '1200px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
