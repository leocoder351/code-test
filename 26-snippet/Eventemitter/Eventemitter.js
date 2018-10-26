class Event {
  constructor () {
    this._store = {};
  }

  on (type, fn) {
    let fns = this._store[type] = this._store[type] || [];

    if (fns.indexOf(fn) === -1) {
      fns.push(fn);
    }

    return this;
  }

  off (type, fn) {
    let fns = this._store[type];

    if (Array.isArray(fns)) {
      if (fn) {
        let index = fns.indexOf(fn);
        if (index !== -1) {
          fns.splice(index, 1);
        }
      } else {
        fns.length = 0;
      }
    }

    return this;
  }

  trigger (type, ...args) {
    let fns = this._store[type];

    if (Array.isArray(fns)) {
      fns.forEach(fn => {
        fn.apply(null, args);
      })
    }

    return this;
  }
}

// 测试用例

let e = new Event();

e.on('nameChange', function (a, b, c) {
  console.log('seq 1');
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
});

e.on('nameChange', function (a, b, c) {
  console.log('seq 2');
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
});

e.trigger('nameChange', 1, 2, 3);