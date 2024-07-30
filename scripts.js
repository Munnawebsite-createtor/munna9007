

let mobile_icon = document.getElementById("mobile_icon");
let main_menu = document.getElementById("main_menu");
mobile_icon.addEventListener("click"; () =<> {
main_menu.classList.toggle('hidden');})

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
