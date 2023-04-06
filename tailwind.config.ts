/** @type {import('tailwindcss').Config} */
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },

  
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'fill': '#f0f0f0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}