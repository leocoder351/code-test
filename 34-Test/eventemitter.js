class Event {
  constructor () {
    this._cache = [];
  }

  on (type, callback) {
    let fns = this._cache[type] = this._cache[type] || [];
    if (fns.indexOf(callback) === -1) {
      fns.push(callback);
    }
    return this;
  }

  off (type, callback) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      if (callback) {
        let index = fns.indexOf(callback);
        if (index !== -1) {
          fns.splice(index,1);
        }
      } else {
        // 全部清空
        fns.length = 0;
      }
    }
    return this;
  }

  trigger (type, data) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(data);
      });
    }
    return this;
  }
}

// 测试用例
const event = new Event();
event.on('test', (a) => {
  console.log('第1个回调');
  console.log(a);
});
event.on('test', (a) => {
  console.log('第2个回调');
  console.log(a);
});

event.trigger('test', 'liu');
event.off('test');
event.trigger('test', 'liu');