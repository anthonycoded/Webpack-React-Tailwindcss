const tailwindcss = require("tailwindcss");
const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
