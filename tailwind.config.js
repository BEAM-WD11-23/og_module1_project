/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {

      mob: {'min': '300px', 'max': '499px'},

      sm: {'min': '500px', 'max': '767px'},

      md: {'min': '768px', 'max': '1023px'},

      lg: {'min': '1024px', 'max': '1279px'},

      xl: {'min': '1280px', 'max': '1400px'},
  
      xxl: {'min': '1401px'}
    },

    extend: {

      colors: {
        headerBlack: 'rgb(15 15 18)',
        cardsBlack: 'rgb(20 19 26)',
        cjViolet: 'rgb(102 0 172)',
        cjBrightViolet: 'rgb(183 0 202)',
        cjHover: 'rgb(59 59 61)',
        cjWhite: 'rgb(211 203 232)'
      },

      fontFamily: {
        nunito: ['"Nunito"']
      },

      boxShadow: {
        '3xl': '6px 6px 20px 0px rgba(0,0,0,0.57)',
      }


    },
  },
  plugins: [],
}


