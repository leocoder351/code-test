const path = require('path');

module.exports = {
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};