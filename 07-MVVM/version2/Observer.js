function Observer(data) {
  this.observe(data);
}

// 劫持data
Observer.prototype.observe = function(data) {
  if (!data || Object.prototype.toString.call(data) !== '[object Object]') return ;

  Object.keys(data).forEach(key => {
    this.defineReactive(data, key, data[key]);
    this.observe(data[key]);  // 深度递归劫持
  });
};

// 设置getter和setter
Observer.prototype.defineReactive = function(obj, key, value) {
  let that = this;
  let dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      Dep.target && dep.addSub(Dep.target);
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        that.observe(newValue);
        value = newValue;
        dep.notify();
      }
    }
  });
};

