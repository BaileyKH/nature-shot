/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        "diagonal-galaxy":"diagonal-galaxy 2s ease infinite"
      },
      keyframes: {
        "diagonal-galaxy":{"0%":{"background-size":"200% 200%","background-position":"top left","background-image":"linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(135, 206, 250, 0.8))"},"50%":{"background-size":"200% 200%","background-position":"bottom right","background-image":"linear-gradient(to bottom right, rgba(135, 206, 250, 0.8), rgba(0, 0, 0, 0.8))"},"100%":{"background-size":"200% 200%","background-position":"top left","background-image":"linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(135, 206, 250, 0.8))"}},
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

