function Vue(options) {
  this.$data = options.data;
  this.$el = document.querySelector(options.el);

  observe(this.$data, this);

  let dom = new Compile(this.$el, this);

  // 编译完成后，将 dom 插回到 app 中
  this.$el.appendChild(dom);
}