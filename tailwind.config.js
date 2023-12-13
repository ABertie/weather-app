/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary': {
        light: '#000000',
        dark: '#ffffff',
      },
      'secondary': {
        light: 'rgba(60, 60, 67, 0.6)',
        dark: 'rgba(235, 235, 245, 0.6)',
      },
      'tertiary': {
        light: 'rgba(60, 60, 67, 0.3)',
        dark: 'rgba(235, 235, 245, 0.3)',
      },
      'quaternary': {
        light: 'rgba(60, 60, 67, 0.18)',
        dark: 'rgba(235, 235, 245, 0.18)',
      },
      'denim': {
        dark: '#1c1b33',
        DEFAULT: '#1f1d47',
        light: '#2e335a',
      },
      'blue': {
        dark: '#083072',
        mid: '#3658b1',
        light: '#aec9ff',
      },
      'indigo': {
        dark: '#362a84',
        DEFAULT: '#48319d',
        mid: '#5936b4',
        light: '#7758d1',
      },
      'lavender': {
        angular: '#612fab',
        DEFAULT: '#e0d9ff',
      },
      'pink': {
        DEFAULT: '#c427fb',
        mid: '#c159ec',
        light: '#f7cbfd',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'night-sky':  "url('/night-sky.png')",
      },
    },
  },
  plugins: [],
}
