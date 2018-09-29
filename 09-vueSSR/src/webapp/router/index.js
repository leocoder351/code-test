import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';

let routes = [
  {
    path: '/',
    component: HelloWorld
  }
];

let router = new VueRouter({
  routes
});

export default router;