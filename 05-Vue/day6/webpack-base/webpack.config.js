// webpack必须采用commonjs写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 打包的入口文件，webpack会自动查找相关的依赖进行打包
  entry: './src/main.js',

  output: {
    // 打包后的名字
    filename: 'bundle.js',
    // 必须是一个绝对路径，path.resolve('')，传入一个相对路径，给出一个绝对路径
    path: path.resolve(__dirname, './dist')
  },

  // 模块的解析规则
  // - js 匹配所有的js 用babel-loader转译 排除掉node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // use时从右往左写
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        // 转换base64图片，只在8192Byte，即8K，下转换，其他不转换为base64
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.(eot|svg|woff|woff2|wtf)/,
        use: 'url-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({   // 自动插入到dist目录中
      template: './src/index.html',   // 使用的模板
      filename: 'index.html'    // 产出的文件名字
    }),
  ]
};