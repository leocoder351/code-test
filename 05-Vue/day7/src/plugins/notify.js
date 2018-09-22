import Notify from './notify.vue';

// 需要在此对象中拥有一个install方法
let notify = {

};

notify.install = function(Vue, options = {delay: 3000}) {
  Vue.prototype.$notify = function(message, opt = {}) {
    if (notify.el) return ;

    options = {...options, ...opt};   // 用自己调用插件时传递过来的属性覆盖掉默认设置好的
    let V = Vue.extend(Notify);   // 返回的是一个构造函数的子类，参数是包含组件选项的对象
    let vm = new V();
    let oDiv = document.createElement('div');   // 创建一个div，将实例挂载到元素上
    vm.value = message;
    vm.$mount(oDiv);
    document.body.appendChild(vm.$el);  // 把当前实例的这个真是对象放到页面上
    notify.el = vm.$el;

    // 延迟多少秒，将DOM元素移除掉
    setTimeout(() => {
      document.body.removeChild(vm.$el);    // 将实例上的元素删除掉
      notify.el = null;
    }, options.delay);
  };
};

// 导出这个包含install的对象，如果使用Vue.use(Notify)就会调用这个install方法
export default notify;