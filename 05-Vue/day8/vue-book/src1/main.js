// 平级组件交互 - 找共同的父级解决
// 跨组件交互 - EventBus（发布订阅） 混乱

// vuex 主要借鉴了 flux redux 
// vuex 只能在vue中使用（单独为vue开发的）

// vuex为了大型项目，主要是（状态）管理，将数据统一管理

import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.devtools = true;

new Vue({
  el: '#app',
  store,  // store 被注册到了实例上，所有组件都会有一个属性 this.$store
  render: h => h(App)
});