const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const entryPath = path.resolve(__dirname, './main.js');
const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'development',
  // entry: ['@babel/polyfill', entryPath],
  entry: entryPath,
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  devServer: {
    port: 9000,
    inline: true,   // 监听文件变化，默认为true
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192   // 单位byte，也就是8K，小于8K会被编译成base64，大于8K会直接通过图片路径引入
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),

    new ExtractTextPlugin('style.css'),

    new webpack.HotModuleReplacementPlugin()
  ]
};