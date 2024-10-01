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
      fontSize: {
        'title': 'var(--fs-title)',
        'subtitle': 'var(--fs-subtitle)',
        'body': 'var(--fs-body)',
      },
      screens: {
        mobile: 'var(--breakpoint-mobile)',
        tablet: 'var(--breakpoint-tablet)',
        laptop: 'var(--breakpoint-laptop)',
        desktop: 'var(--breakpoint-desktop)',
        tv: 'var(--breakpoint-tv)',
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