const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterWebpackPlugin = require('./config/htmlAfterWebpackPlugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const files = glob.sync('./src/webapp/views/**/*.entry.js');
const _mode = argv.mode || 'development';
const _modeflag = _mode === 'production';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
let _entry = {};    // webpack 公用入口
let _plugins = [];  // webpack 公用插件

for (let item of files) {
  // index.entry.js -> index.index.js
  let reg = /.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g;

  if (reg.test(item)) {
    const entryKey = RegExp.$1;
    _entry[entryKey] = item;
    const [dist, template] = entryKey.split('-');
    _plugins.push(new HtmlWebpackPlugin({
      filename: `views/${dist}/pages/${template}.html`,
      template: `src/webapp/views/${dist}/pages/${template}.html`,
      minify: {
        collapseWhitespace: _modeflag,
        removeAttributeQuotes: _modeflag
      },
      inject: false
    }));
  }
}


let webpackConfig = {
  entry: _entry,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minmize: _modeflag  // 是否开启压缩
            }
          }, 'postcss-loader']
        })
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  watch: _modeflag,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [
    ..._plugins,
    new HtmlAfterWebpackPlugin()
  ]
};

let config = merge(webpackConfig, _mergeConfig);

module.exports = config;