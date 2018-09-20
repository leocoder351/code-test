import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Foo from '../components/Foo';
import Bar from '../components/Bar';
import User from '../components/User';
import UserHome from '../components/UserHome';
import UserPersonal from '../components/UserPersonal';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    name: 'user',
    path: '/user/:id',
    component: User,
    children: [
      {
        path: '',
        component: UserHome
      },
      {
        path: 'personal',
        component: UserPersonal
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;