const path = require('path')

module.exports = {
  target: 'web',
  mode: 'production',
  entry: __dirname + '/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'nuxt.scroll.plugin.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  }
}
