// 函数可以赋默认值，一般情况下，和对象的解构一起用
function ajax({url=new Error('url不能为空'), method='get'}) {
  let self = this;
  // this.method = method || 'get';
  console.log(url);
  console.log(method);
}

ajax({
  url: '/test'
});

ajax({
  method: 'get'
});

// ... 将函数剩下的参数，变成数组，只能放到参数最后面
function sum(currency, ...args) {
  return currency + eval(args.join('+'));
}

console.log(sum('￥',1,2,3,4,5,6));

// 箭头函数
a();
function a() {
  console.log(100);
  return {};
}
console.log(a());

let a = () => {

}
console.log(a());

// 函数柯里化
function fn(a) {
  return function(b) {
    return a+b;
  }
}

console.log(fn(1)(2));

let fn = a => b => a+b;
console.log(fn(1)(2));

// 箭头函数 特点
// 1. 没有function 关键字，不会预编译
// 2. 没有this指向
// 3. 没有arguments

// 谁调用的this就是谁，箭头函数中没有this，就会向上找，找到谁就是谁

let name = 2;
let obj = {
  name: 1,
  fn: function() {
    setTimeout(function() {
      console.log(this.name);
    })
  }
};
let fn = obj.fn;
fn();   // undefined 这里去找window.name，但是let声明的变量不会挂在window上

let name = 2;
let obj = {
  name: 1,
  fn: function() {
    setTimeout(() => {
      console.log(this.name);
    })
  }
};
let fn = obj.fn;
fn();   // undefined 这里也去找window.name，let声明的变量不会挂在window上


let name = 2;
let obj = {
  name: 1,
  fn: function() {
    setTimeout(() => {
      console.log(this.name);
    })
  }
};
obj.fn();   // 1 这里找obj.name

// 对象不是作用域，作用域只有函数作用域和全局作用域
let name = 1;
let obj = {
  name: 2,
  fn: () => {
    console.log(this.name);
  }
};
obj.fn();   // undeifned

function sum(...numbers) {
  return numbers.reduce((a,b)=>{
    console.log(a)
    console.log(b)
    return a+b
  })
}

console.log(sum([1,2,3]))