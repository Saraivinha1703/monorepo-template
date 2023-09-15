/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@monorepo/shared/tailwind.config')],
  content: [
    '../../packages/shared/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('nativewind/tailwind/css'),
  ],
};
