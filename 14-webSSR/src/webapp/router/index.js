import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Test from '../components/test/Test.vue'
import Topics from '../components/Topics'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    model: 'history',
    routes: [
      {
        path: '/',
        component: HelloWorld
      },
      {
        path: '/test',
        component: Test
      },
      {
        path: '/topics',
        component: Topics
      },
      {
        path: '/about',
        component: () => import('../components/About')
      }
    ]
  });

  return router;
}


