// 在ES5中没有类的概念 构造函数
// es6 class
// 如何实现一个类
// 类的继承 三种属性
// 公有属性__proto__
// 私有属性
// 静态属性 静态方法

function Parent() {
  // 构造函数中的this 通过new调用 this指代的是实例
  this.name = 'parent';
}

Parent.prototype.eat = function() {
  console.log('eat');
};

function Child() {
  this.age = 9;
  // 1. 继承私有属性
  Parent.call(this);
}

Child.prototype.smoking = function() {
  console.log('smoking');
}

// 2. 继承公有属性
// 第一种方法：
Child.prototype.__proto__ = Parent.prototype;
// 第二种方法：
Object.setPrototypeOf(Child.prototype, Parent.prototype);
// 第三种方法：
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child
  }
});

// function create(parentPrototype) {
//   function Fn() {}
//   Fn.prototype = parentPrototype;
//   return new Fn();
// }
// Child.prototype.constructor = Child;

let child = new Child();

console.log(child.__proto__.constructor === Child);
console.log(child.name);
console.log(child.eat());

let a = {};

Object.defineProperty(a, 'name', {
  enumerable: true,   // 表示这个属性是否可被配置
  configurable: true, // 表示这个属性是否可被删除
  writable: true,
  value: 'czx'
});

console.log(a.name);


let a = {};
Object.defineProperty(a, 'name', {
  enumerable: true,   // 表示这个属性是否可被配置
  configurable: true, // 表示这个属性是否可被删除
  get() {   // 加了get和set就不能写value和writable了
    console.log('get');
    return 1;
  },
  set(value) {
    console.log('set');
    return 100;
  }
});

console.log(a.name);
a.name = 'sad';
console.log(a.name);


// new.target 判断是否通过new调用函数
function A() {
  console.log(new.target);
}

A();        // undefined
new A();    // A函数

// 第二种方法
function A() {
  if (!(this instanceof A)) {
    // 没有通过new调用
    throw new Error('no new'); 
  }
}
A();