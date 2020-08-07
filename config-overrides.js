// config-overrides.js
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  webpack: function (config) {
    config.plugins.push(
      new StylelintPlugin({
        configFile: 'stylelint.config.js',
        context: 'src',
        files: '**/*.scss',
        failOnError: false,
        quiet: false,
        emitErrors: true
      })
    )
    return config
  }
}
