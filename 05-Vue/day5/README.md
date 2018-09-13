## 路由

- 访问不同的路径，就可以返回不同的结果

## 多页面（SPA）

- Single Page Application（单页应用，只有一个html文件）

```
(function (global, factory) {
  // 先判断是否为commonJS规范
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  // 再判断是否为AMD规范
  typeof define === 'function' && define.amd ? define(factory) :
  // 最后是浏览器规范，挂在当前立即函数执行所在环境的this上
  (global.VueRouter = factory());
})(this, function () {
  // ...
});
```