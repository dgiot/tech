const _ = require('lodash')
const path = require('path')
const head =  require('./config/head.config')
const plugins =  require('./config/plugins.config')
const themeConfig = require('./config/theme.config')
const locales = require('./config/locales.config')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  locales,
  head,
  themeConfig,
  plugins,
}