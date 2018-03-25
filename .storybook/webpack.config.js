const webpack = require('webpack')
const { DEBUG } = process.env
const merge = require('webpack-merge')
const dev = require('../webpack.dev.js')

/**
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: 'bundle.css',
          //   },
          // },
          // { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              importer: function(url, prev) {
                if(url.indexOf('@material') === 0) {
                  var filePath = url.split('@material')[1];
                  var nodeModulePath = `./node_modules/@material/${filePath}`;
                  return { file: require('path').resolve(nodeModulePath) };
                }
                return { file: url };
              }
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEBUG': JSON.stringify(DEBUG),      
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
*/
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig = merge(storybookBaseConfig, dev)

  // Return the altered config
  return storybookBaseConfig
}
