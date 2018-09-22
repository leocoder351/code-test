// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from 'vue-lazyload';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

// 使用轮播图插件
Vue.use(VueAwesomeSwiper);
// 使用图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537165011856&di=d28cdececd47c55f115adf4021da0cd4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb3b7d0a20cf431adebe131044036acaf2edd98df.jpg',
  loading: 'http://www.sucaijishi.com/uploadfile/2015/0210/20150210104952902.gif',
  attempt: 1
});
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
