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
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        value = newValue;
      }
    }
  });
};

