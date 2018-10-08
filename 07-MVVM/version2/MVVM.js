function MVVM(options) {
  // this是MVVM的实例 vm
  this.$el = options.el;
  this.$data = options.data;

  if (this.$el) {
    // 1. 数据劫持
    new Observer(this.$data);

    // 2. 数据代理
    this.proxyData(this.$data);

    // 3. 编译模板
    new Compile(this.$el, this);
  }
}

MVVM.prototype.proxyData = function(data) {
  Object.keys(data).forEach(key => {
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: true,
      get() {
        return data[key];
      },
      set(newVal) {
        return data[key] = newVal;
      }
    })
  }) 
}