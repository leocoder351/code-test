const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const os = require('os');

module.exports = {
  output: {
    filename: 'scripts/[name].[hash:5].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  // optimization: {
  //   minimizer: [new UglifyJsPlugin({
  //     // parallel: true    // 默认是 os.cpus().length - 1
  //     parallel: os.cpus().length
  //   })]
  // },
  plugins: [
    new ParallelUglifyPlugin({
      exclude: /\.min\.js$/,
      workerCount: os.cpus().length,
      // uglifyJS: {

      // },
      uglifyES: {
        output: {
          beautify: false,
          comments: false
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true
        }
      }
    })
  ]
};