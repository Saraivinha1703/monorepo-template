/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('@monorepo/shared/tailwind.config')],
  content: [
    '../../packages/shared/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('nativewind/tailwind/native')],
};
