/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'bodyBackground': '#F5F6FA',
      'darkGrayBackground': '#19353E',
      'textMain': '#19353E',
      'disabled': '#989898',
      'primary': '#27B3B8',
      'primaryLight': '#CCEAE9', 
      'secondary': '#009892',
      'tertiary': '#F4704D',
      'tertiary-light': '#FDF0ED',
      'warning': '#F39131',
      'borderColor': '#CCEAE9',
      'warning': '#F39131',
      'creatingStatus': '#CCEAE9',
      'createdStatus': '#27B3B8',
      'modificatingStatus': '#F3C431',
      'archivedStatus': '#DB4943',
    },
    fontFamily: {
      regular: ['Poppins-regular', 'sans-serif'],
      bold: ['Poppins-bold', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
