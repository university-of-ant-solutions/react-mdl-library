const webpack = require('webpack');
const { DEBUG } = process.env

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEBUG': JSON.stringify(DEBUG),      
    }),
  ],
}
