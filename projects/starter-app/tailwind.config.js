/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
const { themes } = require('./src/styles/themes');
const fontFamily = require('tailwindcss/defaultTheme').fontFamily;

module.exports = {
  content: ["./projects/***/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.serif],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    createThemes(themes, {
      produceCssVariable: (colorName) => `--rtwc-${colorName}`,
      defaultTheme: 'light',
    }),
  ],
};