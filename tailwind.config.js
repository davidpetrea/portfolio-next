/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <-- Add this line
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/mainBg.jpg')",
      },
      colors: {
        white: {
          DEFAULT: "#F7F6F3",
        },
        grey: {
          DEFAULT: "#BFBFBF",
        },
        gold: {
          DEFAULT: "#E1C440",
          soft: "#DFC777",
        },
        green: {
          '100': "#D8F3DC",
          '200': "#B7E4C7",
          '300': "#95D5B2",
          '400': "#74C69D",
          '500': "#52B788",
          '600': "#40916C",
          '700': "#2D6A4F",
          '800': "#1B4332",
          '900': "#081C15"
        },
      },
    },
  },
  plugins: [],
};
