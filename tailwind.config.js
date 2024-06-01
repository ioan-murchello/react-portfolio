/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 0px 10px  #575757',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      scrollbar: ['hidden'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none' /* Firefox */,
          '-ms-overflow-style': 'none' /* Internet Explorer 10+ */,
          '&::-webkit-scrollbar': {
            display: 'none' /* Safari and Chrome */,
          },
        },
      });
    },
  ],
};

