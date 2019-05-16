Function.prototype.myApply = function (context, ...args) {
  context = context || window;

  context.fn = this;

  let result = context.fn(...args[0]);

  delete context.fn;

  return result;
}

Function.prototype.myCall = function (context, ...args) {
  context = context || window;

  context.fn = this;

  let result = context.fn(...args);

  delete context.fn;

  return result;
}

Function.prototype.myBind = function (context, ...args) {
  context = context || window;

  var initialArgs = args;
  var _this = this;

  return function F () {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }

    return _this.apply(context, initialArgs.concat(...arguments))
  }
}

function currying (fn) {
  let allArgs = [];

  return function next (...args) {
    if (args.length > 0) {
      allArgs = allArgs.concat(args);
      return next;
    } else {
      return fn.apply(null, allArgs);
    }
  }
}