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
        100: '25rem',
        // only needs 17% to margin salutations at home section.
        '17/100': '17%'
      },
      screens: {
        '0sm': '20.25em',
        '2md': '56.5em'
      },
      backgroundImage: {
        'hero-pattern': "url('./src/images/hello-hand.webp')",
        'form-hand': "url('./src/images/hand-at-forms.webp')"
      }
    }
  },
  plugins: []
}
