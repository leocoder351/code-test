const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const _mode = argv.mode || 'development';
const _modeflag = _mode === 'production';
let _mergeConfig;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

if (argv.env === 'server') {
  _mergeConfig = require(`./config/webpack.server.js`);
} else {
  _mergeConfig = require(`./config/webpack.${_mode}.js`);
}

console.log(111);
console.log(path.resolve(__dirname, './src/webapp'))

let _plugins = [
  new VueLoaderPlugin(),
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, './src/webapp/index.html'),
    to: 'index.html'
  }]),
];

let webpackConfig = {
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100
          }
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {

          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src/webapp')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  // watch: _modeflag,
  // watchOptions: {
  //   ignored: /node_modules/,
  //   aggregateTimeout: 300,
  //   poll: 1
  // },
  plugins: [
    ..._plugins
  ]
};

let config = merge(webpackConfig, _mergeConfig);

module.exports = config;