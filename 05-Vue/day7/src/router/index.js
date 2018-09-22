import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';

// 注册一些全局的内容
Vue.use(VueRouter); // 和以前不一样的地方，引入router必须使用use

let router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    }
  ]
});

export default router;