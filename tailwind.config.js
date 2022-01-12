module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#1d582f'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
