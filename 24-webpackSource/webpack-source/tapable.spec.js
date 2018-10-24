/**
1. SyncHook，同步串行，不关心监听函数的返回值
2. SyncBailHook，同步串行，只要监听函数有一个函数的返回值不为null，跳过剩下所有
3. SyncWaterfallHook，同步串行，上一个监听函数的返回值可以传递给下一个函数
4. SyncLoopHook，同步循环，上一个监听函数返回true，就反复的执行
5+。 跟上面的是一样的，只不过是异步的
*/

const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require('tapable');

// 所有构造函数接收一个可选的参数 这个参数是一个字符串的数组
// 相当于compiler.hooks
let queue = new SyncHook(['name']);

// 订阅
// 标识我们的订阅函数
queue.tap('1', function(name) {
  console.log(name, 1);
});
queue.tap('2', function(name1, name2) {
  console.log(name1, name2, 2);
});

// 执行钩子
queue.call('webpack🍎');