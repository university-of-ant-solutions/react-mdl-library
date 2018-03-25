// const merge = require('webpack-merge')
// const common = require('./webpack.common.js')

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            importer: function(url, prev) {
              if(url.indexOf('@material') === 0) {
                var filePath = url.split('@material')[1]
                var nodeModulePath = `./node_modules/@material/${filePath}`
                return { file: require('path').resolve(nodeModulePath) }
              }
              return { file: url }
            }
          }
        },
      ]
    }]
  }
}
