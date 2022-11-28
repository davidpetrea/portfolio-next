/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 theme: {
  fontFamily: {
   mcore: ['Raleway', 'sans-serif'],
   header: ['Raleway-thin', 'sans-serif'],
  },
  extend: {
   colors: {
    primary: {
     DEFAULT: '#d3ac9b',
    },
    secondary: {
     DEFAULT: '#c38165',
    },
    surface: {
     light: '#504748',
     dark: '#2c2c2c',
    },
    grey: {
     DEFAULT: '#BFBFBF',
    },
    white: {
     DEFAULT: '#E0E0E0',
     medium: '#A0A0A0',
     disabled: '#6C6C6C',
    },
   },
  },
 },
 plugins: [],
};
