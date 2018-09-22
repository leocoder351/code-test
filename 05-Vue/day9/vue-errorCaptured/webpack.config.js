const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
  resolve: {
    extensions: ['.js', '.vue']
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
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),

    new ExtractTextPlugin('style.css'),

    // 这个插件是必须的，它的职责是将你定义过的其他规则复制并应用到.vue文件里相应语言的块，
    // 例如如果你又一条匹配/\.js$/的规则，那么它会应用到.vue文件里的<script>块
    new VueLoaderPlugin()   
  ]
};