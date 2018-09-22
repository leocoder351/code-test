import Vue from 'vue'
import Router from 'vue-router'

// import Add from '../components/Add';
// import Collect from '../components/Collect';
// import Detail from '../components/Detail';
// import Home from '../components/Home';
// import List from '../components/List';

const Add = () => import('../components/Add');
const Collect = () => import('../components/Collect');
const Detail = () => import('../components/Detail');
const Home = () => import('../components/Home');
const List = () => import('../components/List');

Vue.use(Router)

let router = new Router({
  // base: '/vue-book/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home, 
      meta: {
        // 通过this.$route.mata.keepAlive
        keepAlive: true,
        title: '首页'
      }
    },
    {
      path: '/add',
      component: Add,
      meta: {
        title: '添加'
      }
    },
    {
      path: '/collect',
      component: Collect,
      meta: {
        title: '收藏'
      }
    },
    {
      path: '/detail/:bid',
      name: 'detail',
      component: Detail,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/list',
      component: List,
      meta: {
        keepAlive: true,
        title: '列表'
      }
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
});

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  next();
});

export default router;
