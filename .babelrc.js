// .babelrc.js
const env = require("./env-config")

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["transform-define", env],
    ["babel-plugin-root-import"
    ,{"rootPathPrefix":"@/","rootPathSuffix":"./"}]
  ]
}