import Vue from 'vue';  // runtime，不支持template，只支持render，render将虚拟DOM渲染成真实DOM，可以渲染组件
import router from './router';  // 默认找当前文件夹的index.js
import App from './App.vue';
import Notify from './plugins/notify.js';

// 使用带有install的对象
Vue.use(Notify, {
  delay: 2000
});  

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});