const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    // views 里面的 layout.html
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/webapp/views/common/layout.html'),
      to: 'views/common/layout.html'
    }]),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/webapp/widgets/'),
      to: 'widgets'
    }],{
      copyUnmodified: true,
      ignore: ['*.js', '*.css']
    }),
    new ExtractTextWebpackPlugin({
      filename: 'styles/[name].css'
    })
  ]
}