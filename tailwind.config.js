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
        "glow-next-door":"glow-next-door 5s ease infinite"
      },
      keyframes: {
        "glow-next-door":{"0%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"100% 100%","backgroundPosition":"0% 60%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"20%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"105% 105%","backgroundPosition":"10% 50%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"40%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"110% 300%","backgroundPosition":"20% 40%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"60%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"115% 115%","backgroundPosition":"30% 30%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"80%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"250% 120%","backgroundPosition":"40% 20%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"100%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"100% 100%","backgroundPosition":"0% 60%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"}},
      },
    },
  },
  plugins: [],
}

