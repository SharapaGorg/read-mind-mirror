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
    'ui-sample-project.main': '/ui-sample-project',
    'ui-sample-project.analytics': '/ui-sample-project/analytics',
    'link.ui-sample-project.auth': '/auth'
  },
  features: {
    'ui-sample-project': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'ui-sample-project.api': '/api',
    'ui-sample-project.analytic-api': '/api/analytics'
  }
}
