module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: "Rubik, sans-serif",
        body: "Roboto, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
