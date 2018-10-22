const path = require('path');
const glob = require('glob');
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;
// const PurifyCSSPlugin = require('purifycss-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');

console.log(argv);

const _mode = argv.mode || 'development';
const _devFlag = _mode === 'development';
const _mergeConfig = require(path.resolve(__dirname, `./config/webpack.${_mode}.js`));

module.exports = merge(_mergeConfig, {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]-[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WebpackDeepScopePlugin(),
    // new PurifyCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, './dist/*.html'))
    // }),
    new MiniCssExtractPlugin({
      filename: _devFlag ? 'styles/[name].css' : 'styles/[name].[hash:5].css',
      chunkFilename: _devFlag ? 'styles/[id].css' : 'styles/[id].[hash:5].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
});