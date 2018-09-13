// 发布订阅 publish/subscribe
// 发布 emit
// 订阅 on

function Girl() {
  this._events = {};
}

Girl.prototype.on = function(eventName, callback) {
  if (!this._events[eventName]) {
    this._events[eventName] = [];
    this._events[eventName].push(callback);
  } else {
    this._events[eventName].push(callback);
  }
};

Girl.prototype.emit = function(eventName, ...args) {
  if (!this._events[eventName]) throw new Error('no event');
  this._events[eventName].forEach(callback => callback(...args));
};

var girl = new Girl();

girl.on('失恋', function(who) {
  console.log(who + '哭');
});
girl.on('失恋', function(who) {
  console.log(who + '吃');
});
girl.on('失恋', function(who) {
  console.log(who + '购物');
});

girl.emit('失恋', '我', '你', '他');
girl.emit('失');