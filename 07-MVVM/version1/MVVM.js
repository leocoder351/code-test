class MVVM {
  constructor(options) {
    // 一上来，先把可用的东西挂载在实例上
    this.$el = options.el;
    this.$data = options.data;

    // 如果有要编译的模板，就开始编译
    if (this.$el) {
      // 数据劫持，把对象的所有属性 改成getter和setter
      new Observer(this.$data);

      // 数据代理
      this.proxyData(this.$data);

      // 用数据和元素进行编译
      new Compile(this.$el, this);
    }
  }

  proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          data[key] = newValue;
        }
      });
    });
  }
}