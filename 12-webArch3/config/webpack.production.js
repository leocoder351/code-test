const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlMinify = require('html-minifier').minify;

module.exports = {
  output: {
    filename: '[name]-[hash:5].bundle.js'
  },
  plugins: [
    // views 里面的 layout.html
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/webapp/views/common/layout.html'),
      to: 'views/common/layout.html'
    }]),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/webapp/views/widgets/'),
      to: 'views/widgets',
      transform(content, path) {
        return HtmlMinify(content.toString('utf-8'), {
          collapseWhitespace: true
        })
      }
    }],{
      copyUnmodified: true,
      ignore: ['*.js', '*.css']
    }),
    new ExtractTextWebpackPlugin({
      filename: 'styles/[name]-[hash:5].css'
    })
  ]
}