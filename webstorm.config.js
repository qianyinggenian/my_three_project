'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

const resolveAlias = {
  '@': resolve('src'),
  '@api': resolve('src/api'),
  '@utils': resolve('src/utils'),
  '@mixin': resolve('src/mixin'),
  '@components': resolve('src/components'),
  '@core': resolve('src/core'),
  '@pages': resolve('src/pages'),
  '@static': resolve('src/static'),
  '@common': resolve('src/common'),
  '@views': resolve('src/views'),
  '@layout': resolve('src/layout')
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: resolveAlias
  }
}
