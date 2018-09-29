class Observer {
  constructor(data) {
    this.observe(data);
  }

  observe(data) {
    // 要对这个data数据将原有的属性改成getter和setter
    if (!data || Object.prototype.toString.call(data) !== '[object Object]') {
      return ;
    }

    // 要将数据一一劫持
    Object.keys(data).forEach(key => {
      // 劫持
      this.defineReactive(data, key, data[key]);
      this.observe(data[key]);    // 深度递归劫持
    });
  }

  defineReactive(obj, key, value) {
    let that = this;
    let dep = new Dep();  // 每个变化的数据 都会对应一个数组 这个数组是存放所有更新的操作

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {   // 当取值时调用的方法
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set(newValue) {   // 设置值时调用的方法
        if (newValue !== value) {
          that.observe(newValue);
          value = newValue;
          dep.notify();   // 通知所有人 数据更新了
        }
      }
    });
  }
}