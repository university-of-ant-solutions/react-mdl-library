const os = require('os')
const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./webpack.common.js')

const extractSass = new ExtractTextPlugin({
  // filename: "mdl.[contenthash].min.css",
  filename: "mdl.min.css",
  disable: process.env.NODE_ENV === "development"
})

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: httpDirAbsolutePath,
    filename: `mdl.min.js`, // Webpack 3.x emits CSS wrapped in a JS file (cssExtractorPlugin unwraps it)
    library: `mdl`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            // {
            //   loader: 'file-loader',
            //   options: {
            //     name: 'mdl.min.css',
            //   },
            // },
            // { loader: 'extract-loader' },
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            },
            { loader: 'postcss-loader', options: {
              plugins: [
                require('autoprefixer')
              ]}
            },
            {
              loader: 'sass-loader',
              options: {
                importer: function(url, prev) {
                  if(url.indexOf('@material') === 0) {
                    const filePath = url.split('@material')[1]
                    const nodeModulePath = `./node_modules/@material/${filePath}`
                    return { file: require('path').resolve(nodeModulePath) }
                  }
                  return { file: url }
                }
              }
            },
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, 'report.html'),
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // https://bitbucket.org/atlassian/atlaskit-mk-2/src/f2856940b3f79482750f3972928b9352ccf1b678/build/webpack-config/config/index.js?at=master&fileviewer=file-view-default
    new UglifyJsPlugin({
      parallel: Math.max(os.cpus().length - 1, 1),
      uglifyOptions: {
        compress: {
          // Disabling following options speeds up minimization by 20 – 30s
          // without any significant impact on a bundle size.
          arrows: false,
          booleans: false,
          collapse_vars: false,
  
          // https://product-fabric.atlassian.net/browse/MSW-436
          comparisons: false,
  
          computed_props: false,
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_infinity: true,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          top_retain: false,
          toplevel: false,
          typeofs: false,
          unused: false,
  
          // Switch off all types of compression except those needed to convince
          // react-devtools that we're using a production build
          conditionals: true,
          dead_code: true,
          evaluate: true,
        },
        mangle: true,
      },
    })
  ]
})
