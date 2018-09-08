// ES6 只支持静态方法  不支持静态属性

class Parent {
  constructor() {
    this.name = 'parent';
    // return {};
  }

  static b() {
    return 2;
  }

  eat() {
    console.log('eat');
  }
}

class Child extends Parent {  // 要求继承父亲的私有和公有
  constructor() {
    super();    // 相当于Parent.call(this)
    this.age = 9; // 私有属性
    // return {};
  }

  static a() {    // 静态属于类上的方法
    return 1;
  }

  smoking() {
    console.log('smoking');
  }
}

let child = new Child();
console.log(child);
child.smoking();
console.log(Child.a());
console.log(Child.b());
child.eat();
console.log(child.name);

// 1. 类只能new
// Class constructor Child cannot be invoked without 'new'

// 2. 类可以继承公有、私有以及静态方法 
// 3. 父类的构造函数中返回了一个引用类型，会把这个引用类型作为子类的this