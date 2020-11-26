module.exports = {
  purge: {
    mode:"layers",
    content:['./public/**/*.html/']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      fontSize: ['responsive', 'hover']
    },
  },
  plugins: [],
}
