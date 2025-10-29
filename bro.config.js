const pkg = require('./package')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    'read-mind-mirror.main': '/read-mind-mirror',
  },
  features: {
    'ui-sample-project': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
  }
}
