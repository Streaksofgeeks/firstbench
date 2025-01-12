module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"], // Correct key for fonts is `fontFamily`
      },
      colors: {
        darkgreen: '#303947',
      },
    },
  },
  plugins: [],
};
