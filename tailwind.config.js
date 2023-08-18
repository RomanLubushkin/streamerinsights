/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitch: {
          100: '#6441A5',
          200: '#402A6A',
        }
      }
    },
  },
  plugins: [],
}

