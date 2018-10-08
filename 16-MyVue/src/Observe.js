function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get: function() {
      return val;
    },
    set: function() {

    }
  })
}

function observe(obj, vm) {
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  })
}