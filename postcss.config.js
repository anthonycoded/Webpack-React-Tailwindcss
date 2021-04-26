const tailwindcss = require("tailwindcss");
const purgeCSS = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgeCSS({
      content: ["./src/**/*.js"],
      css: ["./src/**/*.css"],
      safelist: [
        "html",
        "body",
        "img",
        "button",
        "padding",
        "margin",
        "width",
        "xl",
        "sm",
        "md",
        "lg",
        "xl",
      ],
    }),
  ],
};
