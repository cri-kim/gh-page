// nextjs에서  webpack 설정
// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const name = '/'

module.exports = {
  assetPrefix: !debug ? `${name}` : '',
}