/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fd',
          400: '#36a6f9',
          500: '#0f87ed',
          600: '#006ad2',
          700: '#0055ab',
          800: '#00468c',
          900: '#003c74',
          950: '#00254a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dbe5',
          300: '#adbccf',
          400: '#8198b4',
          500: '#617a9a',
          600: '#4c6280',
          700: '#3e4f68',
          800: '#354257',
          900: '#2d3848',
          950: '#1a2233',
        },
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};