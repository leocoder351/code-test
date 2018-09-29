function MVVM(options) {
  // this是MVVM的实例 vm
  this.$el = options.el;
  this.$data = options.data;

  if (this.$el) {
    // 1. 数据劫持
    new Observer(this.$data);

    // 2. 数据代理

    // 3. 编译模板
    new Compile(this.$el, this);
  }
}