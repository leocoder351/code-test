import Vue from 'vue';
import VueRouter from 'vue-router';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Default from '../components/Default';
import User from '../components/User';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    components: {
      default: Default,
      sidebar: Sidebar,
      main: Main
    }
  },
  {
    path: '/user/:id',
    component: User,
    beforeEnter: (to, from, next) => {
      console.warn('/user/:id beforeEnter');
      console.log(to)
      console.log(from)
      next();
    },
    // 第一种，props为布尔值，会将params变为props传入组件内部
    // props: true
    // 第二种，props为对象，会把该对象作为props传入组件内部
    // props: {
    //   name: 'liu' 
    // }
    // 第三种，pros为函数，可以综合处理上面两种情况
    props: (route) => {
      console.log(route);
      return {
        id: route.params.id,
        name: 'liu'
      }
    }
  }
];

const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  console.log(to);
  console.log(from);
  console.log(next);
  next();
}); 

export default router;