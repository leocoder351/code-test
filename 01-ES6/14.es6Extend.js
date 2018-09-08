class Parent {
  static fn() {
    return 'asdc';
  }
}

class Child extends Parent {
  constructor() {
    super();  // 只要有父类，子类有constructor，就要写super
  }
}

console.log(Child.fn());

