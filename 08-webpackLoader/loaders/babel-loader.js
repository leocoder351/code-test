// 实现babel-loader
// loader加载器 转化的 过滤 loader职责非常单一
// loader必须返回一个字符串 或者buffer

let babel = require('@babel/core');   // babel的核心包
let loaderUtils = require('loader-utils');  // loader工具类

function loader(source) {
  // 获取loader的选项方法
  console.log(this.request);  // 指的是当前loader加载的文件是哪一个
  let options = loaderUtils.getOptions(this);
  // 用babel进行转化
  let result = babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: this.request.split('/').pop()
  });
  this.callback(null, result.code, result.map);
}

module.exports = loader;