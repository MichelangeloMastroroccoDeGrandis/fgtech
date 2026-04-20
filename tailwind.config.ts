import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3B24',
        accent: '#00E676',
      },
    },
  },
  plugins: [],
} satisfies Config;
