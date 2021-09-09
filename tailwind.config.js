module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'primary': '#C490E4',
      'secondary': '#F6C6EA',
      'danger': '#890E6A',
      'back': '#FFF5F5',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
