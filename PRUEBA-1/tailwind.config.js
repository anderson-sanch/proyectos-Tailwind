/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {colors: {
      'red': 'hsl(1,90%,64%)',
      'blue': 'hsl(219,85%,26%)',
      'white': '#ffffff',
      'very-light-grayish-blue': '#f7fafd',
      'light-grayish-blue-1': '#e5effa',
      'light-grayish-blue-2': '#dde7ee',
      'grayish-blue': '#939dae',
      'dark-grayish-blue': '#5e6778',
      'very-dark-blue': '#1c202b',
    },},
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'custom': ['Plus-Jakarta-Sans' , 'sans-serif']
    },
    screens : {
      'mobile': {'max': '375px'},
      'desktop': {'max': '1440px'},
      'edit': '768px'
    }
  },
  plugins: [],
}

