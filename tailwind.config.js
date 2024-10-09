/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "verde": "#00BF63",
        "verde-escuro": "#105F39",
        "custom-transparent": "rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        'home': "url(/assets/home.jpg)"
      },
      height: {
        'screen-minus-header': 'calc(100vh - 5rem)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

