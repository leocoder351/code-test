import Vue from 'vue';
import store from './src/store';
import App from './src/App.vue';

console.log('Store', store)

new Vue({
  el: '#app',
  store,
  components: {App},
  render: h => h(App)
});