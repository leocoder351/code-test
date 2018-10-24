const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterWebpackPlugin = require('./html-after-webpack-plugin');

module.exports = {
  entry: {
    'index-index': './project/src/views/index.entry.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'project/src/views/index.html'),
      inject: false
    }),
    new HtmlAfterWebpackPlugin()
  ]
};