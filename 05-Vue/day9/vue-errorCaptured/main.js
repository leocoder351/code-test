import Vue from 'vue';
import App from './src/App.vue';

// 异常处理
Vue.config.errorHandler = function(err, vm, info) {
  console.warn('main.js Vue.config.errorHandler');
  console.log(err);
  console.log(vm);
  console.log(info);
};

new Vue({
  el: '#app',
  components: {App},
  render: h => h(App)
});