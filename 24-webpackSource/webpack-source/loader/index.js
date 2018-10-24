// 1. use: ['xx1-loader', 'xx2-loader']
// 2. 最后的loader最先调用，传入原始的资源
// 3. 中间的loader执行的时候，传入的就是上一个loader的执行结果
// 4. loader需要异步， this.async() this.callback()

module.exports = function(content, sourcemap, meta) {
  console.log('🍎自定义loader');

  return content + this.data.value;
}

// 5. 前置钩子
module.exports.pitch = function(remainRequest, preRequest, data) {
  data.value = '哈哈';
};

// 6. 前置钩子的执行顺序
/*
xx1-loader pitch
xx2-loader pitch
xx2-loader
xx1-loader
*/

