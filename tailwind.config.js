/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "0px",
      xs: '479px',
      sm: '624px',
      md: '768px',
      lg: '1062px',
      xl: '1350px',
      xxl: '1590px'
    },
    extend: {
      fontFamily :{
        vastShadow: ["vastShadow-regular","sans-serif"],
        shojumaru: ["shojumaru-regular","sans"],
        martianMono: ["martianMono-regular", "mono"]
      },
      backgroundImage: {
        'gradient-conic-tr': 'conic-gradient(at top right, var(--gradient-color-stops))',
        'gradient-conic-tl': 'conic-gradient(at top left, var(--gradient-color-stops))',
        'gradient-conic-br': 'conic-gradient(at bottom right, var(--gradient-color-stops))',
        'gradient-conic-bl': 'conic-gradient(at bottom left, var(--gradient-color-stops))',
      }
    },
  },
  plugins: [],
}

