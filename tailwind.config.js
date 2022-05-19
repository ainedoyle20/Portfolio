module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'md2': '700px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
