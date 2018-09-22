// 这样引用vue，并不是引用的vue.js，引用的是vue的runtime
// vue = compiler + runtime
// compiler 可以编译模板 template
// compiler 有6k
import Vue from 'vue';
import App from './App.vue';
console.log(App)
new Vue({
  // render函数的作用是将虚拟DOM渲染成真实DOM
  // createElement返回的是虚拟DOM
  // render: function(createElement) {
  //   let node = createElement('h1', [
  //     'hello',
  //     createElement('span', '一则头条')
  //   ]);

  //   console.log(node);
  //   return node;
  // }

  render: (h) => h(App)
}).$mount('#app');