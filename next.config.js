// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const name = '/'

module.exports = {
  assetPrefix: !debug ? `${name}` : '',
}