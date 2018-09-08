// Javascript实现继承的6种方式


/* ----------------------------------------------------------------------
// 一. 原型链继承
// 基本思想：利用原型让一个引用类型继承另外一个引用类型的属性和方法
// 构造函数、原型、实例之间的关系：
// 每个构造函数都有一个原型对象prototype，原型对象包含一个指向构造函数的指针prototype.constructor，而实例都包含一个指向原型对象的内部指针__proto__

// 父类 SuperType
function SuperType () {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;  
};

// 子类 SubType
function SubType () {
  this.subProperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subProperty;
};

// 实例
var instance = new SubType();
console.log(instance);
console.log(instance.getSuperValue());                            // true
console.log(instance instanceof SubType);                         // true
console.log(instance instanceof SuperType);                       // true
console.log(instance instanceof Object);                          // true
console.log(SubType.prototype.isPrototypeOf(instance));           // true
console.log(SuperType.prototype.isPrototypeOf(instance));         // true
console.log(Object.prototype.isPrototypeOf(instance));            // true

// 缺点：
// 1. 来自原型对象的引用属性是所有实例共享的
// 2. 创建子类实例时，无法向父类构造函数传参

// 举例如下：
// 1. 来自原型对象的引用属性是所有实例共享的

// 父类
function SuperType () {
  this.colors = ['red', 'blue', 'green'];
}

// 子类
function SubType () {

}
SubType.prototype = new SuperType();

// 实例
var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors);        // ['red', 'blue', 'green', 'black']
var instance2 = new SubType();
console.log(instance2.colors);        // ['red', 'blue', 'green', 'black']

// 2. 新建子类实例时，无法向父类构造函数中传参
// 新建子类实例调用 new SubType()
// 但是调用父类是在 SubType.prototype = new SuperType()
// 所以无法再new SubType() 的时候给父类 SuperType() 传参

----------------------------------------------------------------------*/


/* ----------------------------------------------------------------------
// 二. 借用构造函数
// 基本思想：在子类构造函数的内部调用父类构造函数，通过使用call()、apply()方法可以在新创建的对象上执行构造函数

// 父类 SuperType
function SuperType (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
  
  this.getName = function () {
      return this.name;
  }
}

// 子类
function SubType (name) {
  // 继承了SuperType，同时还传递了参数
  SuperType.call(this, name);

  // 实例属性
  this.age = 20;
}

// 实例
var instance1 = new SubType('Tom');
instance1.colors.push('black');
console.log(instance1.name);               // "Tom"
console.log(instance1.getName());          // "Tom"
console.log(instance1.age);                // 20
console.log(instance1.colors);             // ['red', 'blue', 'green', 'black']
var instance2 = new SubType('Peter');
console.log(instance2.name);               // "Peter"
console.log(instance2.getName());          // "Peter"
console.log(instance2.age);                // 20
console.log(instance2.colors);             // ['red', 'blue', 'green']
----------------------------------------------------------------------*/


/* ----------------------------------------------------------------------
// 三. 组合继承
// 基本思想：将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种集成模式。使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

// 父类
function SuperType (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

// 子类
function SubType (name, age) {
  // 继承父类实例属性
  SuperType.call(this, name);
  
  // 子类实例属性
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

// 实例
var instance1 = new SubType('Tom', 20);
instance1.colors.push('black');
console.log(instance1.colors);                  // ['red', 'blue', 'green', 'black']
instance1.sayName();                            // "Tom"
instance1.sayAge();                             // 20

var instance2 = new SubType('Peter', 30);
console.log(instance2.colors);                  // ['red', 'blue', 'green']
instance2.sayName();                            // "Peter"
instance2.sayAge();                             // 30
----------------------------------------------------------------------*/


/* ----------------------------------------------------------------------
// 四. 原型式继承
// 基本思想：不使用严格意义上的构造函数，借助原型可以基于已有的对象创建新的对象，同时还不必因此创建自定义类型。

// 来看这个函数

function object (o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 在object函数内部，先创建了一个临时的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回这个临时类型的一个新实例。
// 从本质上讲，object()对传入其中的对象执行了一次浅复制。

var person = {
  name: 'Tom',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = object(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');

var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');

console.log(anotherPerson.friends);               // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
console.log(yetAnotherPerson.friends);            // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
console.log(person.friends);                      // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']

// Object.create(prototype, descripter)
var person = {
  name: 'Tom',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = Object.create(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');

var yetAnotherPerson = Object.create(person, {
    name: {
        value: 'Linda',
        enumerable: true
    }
});
yetAnotherPerson.friends.push('Barbie');

console.log(anotherPerson.friends);               // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
console.log(yetAnotherPerson.friends);            // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
console.log(person.friends);                      // ['Shelby', 'Court', 'Van', 'Rob', 'Barbie']
----------------------------------------------------------------------*/

/* ----------------------------------------------------------------------
// 五. 寄生式继承
// 基本思想：寄生式继承是与原型式继承紧密相关的一种思路，创建一个仅用于封装继承过程的函数，该函数内部以某种形式来做增强对象，最后返回对象

function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

function createAnother(o) {
  var clone = object(o);
  clone.sayHi = function () {
    console.log('Hi');
  }
  return clone;
}

var person = {
  name: 'Tom',
  friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();                              // "Hi"
anotherPerson.friends.push('Rob');
console.log(anotherPerson.friends);                 // ['Shelby', 'Court', 'Van', 'Rob']
var yerAnotherPerson = createAnother(person);
console.log(yerAnotherPerson.friends);              // ['Shelby', 'Court', 'Van', 'Rob']
----------------------------------------------------------------------*/

/* ----------------------------------------------------------------------
// 六. 寄生组合式继承
// 基本思想：将寄生式继承和组合继承相结合，解决了组合式继承中会调用两次父类构造函数的缺点

function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

function inheritPrototype(SubType, SuperType) {
  var prototype = object(SuperType.prototype);        // 创建对象
  prototype.constructor = SubType;    // 增强对象
  SubType.prototype = prototype;      // 指定对象 
}

// 父类
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

// 子类
function SubType(name, age) {
  // 继承父类实例属性
  SuperType.call(this, name);

  // 子类实例属性
  this.age = age;
}

// 继承父类方法
inheritPrototype(SubType, SuperType);

// 子类方法
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

// 实例
var instance1 = new SubType('Tom', 20);
instance1.colors.push('black');
instance1.sayAge();                                   // 20
instance1.sayName();                                  // "Tom"
console.log(instance1.colors);                        // ["red", "blue", "green", "black"]

var instance2 = new SubType('Peter', 30);
instance2.sayAge();                                   // 30
instance2.sayName();                                  // "Peter"
console.log(instance2.colors);                        // ["red", "blue", "green"]
----------------------------------------------------------------------*/


// ES6继承
// 父类
class SuperType {
  constructor(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }

  sayName() {
    console.log(this.name);
  };
}

// 子类
class SubType extends SuperType {
  constructor(name, age) {
    // 继承父类实例属性和prototype上的方法
    super(name);
    // console.log('super');
    // super指向父类的原型对象 super === SuperType.prototype
    // console.log(super.sayName())
    
    // 子类实例属性
    this.age = age;
  }

  // 子类方法
  sayAge() {
    console.log(this.age);
  }
}

// 实例
var instance1 = new SubType('Tom', 20);
instance1.colors.push('black');
console.log(instance1)
instance1.sayAge();                                   // 20
instance1.sayName();                                  // "Tom"
console.log(instance1.colors);                        // ["red", "blue", "green", "black"]

var instance2 = new SubType('Peter', 30);
instance2.sayAge();                                   // 30
instance2.sayName();                                  // "Peter"
console.log(instance2.colors);                        // ["red", "blue", "green"]
