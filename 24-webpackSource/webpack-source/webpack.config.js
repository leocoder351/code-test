const path = require('path');
const FirstPlugin = require('./plugin/first-plugin.js');

module.exports = {
  entry: {
    index: './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, './loader/index.js')
        }
      }
    ]
  },

  plugins: [
    new FirstPlugin()
  ]
};