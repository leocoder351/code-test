// 类的调用检测 检测实例是不是new出来的
function _classCallCheck(instance, constructor) {
  if (!(instance instanceof constructor)) {
    throw new Error('Class constructor Child cannot be invoked without new');
  }
}

// constructor 是构造函数
// protoProperties 是原型方法的描述
// staticProperties 是静态方法的描述
function defineProperties(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    Object.defineProperty(target, arr[i].key, {
      ...arr[i],
      configurable: true,
      enumerable:true,
      writable: true
    })
  }
}

function _createClass(constructor, protoProperties, staticProperties) {
  if (protoProperties.length > 0) {
    defineProperties(constructor.prototype, protoProperties)
  }
  
  if (staticProperties.length > 0) {
    defineProperties(constructor, staticProperties)
  }
}

let Parent = (function() {
  // 写逻辑
  function P() {
    _classCallCheck(this, P);
    this.name = 'parent';
  }

  _createClass(P,
    [
      {
        key: 'eat',
        value () {
          console.log('吃')
        }
      }
    ],
    [
      {
        key: 'b',
        value () {
          return 2
        }
      }
    ]
  );

  return P;
})();

// Parent();
let p = new Parent();
p.eat();
console.log(Parent.b());


// 子类继承父类
function _inherits(SubClass, SuperClass) {
  // 继承公有方法
  SubClass.prototype = Object.create(SuperClass.prototype, {
    constructor: {
      value: SubClass
    }
  });
  console.log(SubClass.prototype);
  // 继承静态方法
  Object.setPrototypeOf(SubClass, SuperClass);
  console.log(SubClass.prototype);
}

let Child = (function(Parent) {
  // 先实现继承父类的公有属性和静态方法
  _inherits(C, Parent);
  function C() {
    _classCallCheck(this, C);
    let obj = Parent.call(this);
    let that = this;
    // 解决了父类返回一个引用类型的问题
    if (typeof obj === 'object') {
      that = obj;
    }
    that.age = 9;
    return that;
  }

  return C;
})(Parent);

console.log(111);
console.log(Child.b())