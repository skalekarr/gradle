module.exports = {
  plugins: [
    require("postcss-import")({}),
    require("postcss-cssnext")({}),
    require("postcss-prefix")({}),
    require("postcss-nested")({})
  ]
};