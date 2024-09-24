import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff',
          100: '#fafaf9',
          200: '#f5f5f4',
          300: '#e7e5e4',
          400: '#d6d3d1',
          500: '#a8a29e',
          600: '#78716c',
          700: '#57534e',
          800: '#44403c',
          900: '#292524',
          950: '#1c1917',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      ringWidth: ['focus-visible'],
    },
  },
};
export default config;
