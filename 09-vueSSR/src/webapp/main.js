import Vue from 'vue';
import App from './App';
import router form './router';

new Vue({
  el: '#app',
  router,
  components: [App],
  template: `<App/>`
})