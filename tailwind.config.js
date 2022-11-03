// const { urlObjectKeys } = require('next/dist/next-server/lib/utils')
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-text-indent')()],
};
