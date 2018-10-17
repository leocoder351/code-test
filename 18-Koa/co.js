function co(gen) {
  var ctx = this;
  var args = Array.prototype.slice.call(arguments, 1);

  // 统一返回一个整体的Promise
  return new Promise(function (resolve, reject) {
    // 如果是函数，调用并取得generator对象
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    // 如果根本不是generator对象，（没有next方法），直接resolve并返回
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    // 入口函数
    onFulfilled();

    function onFulfilled(res) {
      var ret;
      try {
        // 拿到 yield 的返回值
        ret = gen.next(res);
      } catch (e) {
        // 如果执行发生错误，直接将promise reject 掉
        return reject(e);
      }

      // 延续调用链
      next(ret);
    }

    function onRejected(err) {
      var ret;
      try {
        // 如果promise被reject了就直接抛出错误
        ret = gen.throw(err);
      } catch (e) {
        // 如果执行发生错误，直接将promise reject掉
        return reject(e);
      }

      // 延续调用链
      next(ret);
    }

    function next(ret) {
      // generator 函数执行完毕，resolve 掉 promise
      if (ret.done) return resolve(ret.value);
      // 将 value 统一转换为 promise
      var value = toPromise.call(ctx, ret.value);
      // 将 promise 添加 onFulfilled、onRejected，这样当新的promise 状态变成成功或失败，就会调用对应的回调。整个 next 链路就执行下去了
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      // 没法转换为 promise，直接 reject 掉 promise
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}