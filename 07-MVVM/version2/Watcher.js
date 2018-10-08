function Watcher(vm, expr, cb) {
  this.vm = vm;
  this.expr = expr;
  this.cb = cb;

  this.oldVal = this.get();
}

Watcher.prototype.getVal = function(vm, expr) {
  expr = expr.split('.');
  return expr.reduce((prev, next) => {
    return prev[next];
  }, vm.$data);
};

Watcher.prototype.get = function() {
  Dep.target = this;
  let value = this.getVal(this.vm, this.expr)
  Dep.target = null;
  return value;
};

Watcher.prototype.update = function() {
  let newVal = this.getVal(this.vm, this.expr);
  let oldVal = this.oldVal;

  if (this.oldVal !== newVal) {
    this.cb(newVal);
  }
};