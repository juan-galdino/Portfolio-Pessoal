/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        72: '18rem',
        100: '25rem'
      },

      spacing: {
        75: '18.75rem',
        100: '25rem'
      },
      screens: {
        '2md': '56.5em'
      }
    }
  },
  plugins: []
}
