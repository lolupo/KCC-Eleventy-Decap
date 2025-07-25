module.exports = {
  content: ["./src/**/*.{html,js,njk,md}", "./_site/**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
