const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const glob = require('glob');
const files = glob.sync('./src/webapp/views/**/*.entry.js');
console.log(argv);
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
let _entry = {};

console.log(11111);

for (let item of files) {
  // index.entry.js -> index.index.js
  let reg = /.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g;

  if (reg.test(item)) {
    const entryKey = RegExp.$1;
    _entry[entryKey] = item;
  }
}


let webpackConfig = {
  entry: _entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};

let config = merge(webpackConfig, _mergeConfig);


console.log('config', config);

module.exports = config;