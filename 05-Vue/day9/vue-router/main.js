import Vue from 'vue';
import store from './src/store';
import router from './src/router';
import App from './src/App.vue';

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  render: h => h(App)
});