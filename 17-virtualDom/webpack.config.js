const path = require('path');

module.exports = {
  mode: 'development',

  entry: './example/ex1.js',

  module: {

  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};