// 1. 创建一个 Vue 实例
const Vue = require('vue');
const app = new Vue({
  template: `
    <div>Hello World</div>
  `
});

// 2. 创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer();

// 3. 将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log('html', html);
  // => <div data-server-rendered="true">Hello World</div>
});

// 在 2.5.0+ 如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
  console.log('html', html);
}).catch(err => {
  console.log('err', err);
});
