const path = require('path')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: __dirname + '/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'nuxt.scroll.module.js',
    libraryTarget: 'umd'
  }
}
