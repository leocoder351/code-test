const EventEmitter = require('events').EventEmitter;

class Store extends EventEmitter {
  constructor() {
    super();
    this._list = [];
  }

  add(item) {
    this._list.push(item);
    this.emit('change', this.list);   // 触发 change 事件
  }

  list() {
    return this._list;
  }
}

module.exports = Store;