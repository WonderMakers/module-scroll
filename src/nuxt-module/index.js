const defaultOptions = require('./options')
const path = require('path')

export default function (moduleOptions = {}) {
  const options = Object.assign({}, defaultOptions, this.options.scroll, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'nuxt.scroll.plugin.js'),
    fileName: 'scroll.plugin.js',
    options,
    mode: 'client'
  })
}
