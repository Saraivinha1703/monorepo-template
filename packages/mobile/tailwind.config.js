/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@monorepo/shared/tailwind.config')],
  theme: {
    extend: {},
  },
  content: ['../shared/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('nativewind/tailwind/native')],
};
