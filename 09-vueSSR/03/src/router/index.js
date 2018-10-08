import Vue from 'vue';
import Router from 'vue-router';
import Comp1 from '../components/Comp1.vue';
import Comp2 from '../components/Comp2.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/comp1',
        component: Comp1
      },
      {
        path: '/comp2',
        component: Comp2
      },
      {
        path: '/',
        redirect: '/comp1'
      }
    ]
  });
}