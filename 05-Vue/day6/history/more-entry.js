// webpack必须采用commonjs写法
let path = require('path');

module.exports = {
  // 打包的入口文件，webpack会自动查找相关的依赖进行打包
  entry: {
    main: './src/main.js',
    main1: './src/main1.js'
  },

  output: {
    // 打包后的名字
    filename: '[name].js',
    // 必须是一个绝对路径，path.resolve('')，传入一个相对路径，给出一个绝对路径
    path: path.resolve(__dirname, './dist')
  }
};