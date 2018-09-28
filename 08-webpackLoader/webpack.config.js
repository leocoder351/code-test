const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {  // 解析loader的规则
    modules: [
      path.resolve(__dirname, 'loaders'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',   // @babel/core @babel/preset-env
          options: {
            "presets": ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.less$/,
        // loader的执行顺序，由后往前
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',   // url-loader内部可能会调用file-loader
          options: {
            // limit: 800*1024   // 800KB
            limit: 8   // 8Byte
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};