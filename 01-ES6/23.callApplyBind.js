// 实现call
Function.prototype.myCall = function(context, ...args) {
  context = context || window;
  context.fn = this;

  let result = context.fn(...args);  

  delete context.fn;

  return result;
};

var name = 'liu';
var obj = {
  name: 'wang'
};

function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
  console.log(this.name);
}


add(1,2,3);
add.myCall(obj, 1,2,3);

// 实现apply
Function.prototype.myApply = function(context, ...args) {
  context = context || window;

  context.fn = this;

  let result = context.fn(...args[0]);  

  delete context.fn;

  return result;
};

var name = 'liu';
var obj = {
  name: 'wang'
};

function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
  console.log(this.name);
}


add(1,2,3);
add.myApply(obj, [1,2,3]);


// 实现bind

Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window;
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
};

var name = 'liu';
var obj = {
  name: 'wang'
};

function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
  console.log(this.name);
}


add(1,2,3);
var add2 = add.myBind(obj, 1,2);
add2(3);
