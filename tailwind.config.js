module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#131223',
        green: '#569F73',
        greenDark: '#173B23'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
