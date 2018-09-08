// setPrototypeOf
let obj = {name: 'za'};
let age = {age: 9};
obj.__proto__ = age;
console.log(obj.age);

// 对象上没有prototype
let obj = {name: 'za'};
let age = {age: 9};
Object.setPrototypeOf(obj, age);
console.log(obj.age);
console.log(Object.getPrototypeOf(obj));

let name = 'dsa';
let obj = {
  name,
  fn() {
    return 'fn';
  }
};

console.log(obj.name);
console.log(obj.fn());

// Object.assign  浅拷贝
let name = {name:'zz'};
let age = {age: 9};
let obj = {};
Object.assign(obj, name, age);
console.log(obj);

let obj2 = Object.assign(name, age);
console.log(obj2);


let obj1 = {
  age: 9,
  name: 'aa'
};

let obj2 = {
  name: 'bb',
  getPName() {  // 可以通过super关键字获取到父属性
    return super.name;
  },
  getPName2() {
    return this.__proto__.name;
  },
  __proto__: obj1
};

console.log(obj2.getPName());
console.log(obj2.getPName2());