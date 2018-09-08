// ... 的作用，在函数形参中是剩余运算符，把剩下的结果转换成数组

// ... 在对象中或数组中，也可以用...
// 叫展开运算符  扩展运算符

// 数组
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// 对象
let name = {name:'aa'};
let age = {age: 8};

let obj = {...name, ...age};
console.log(obj);

let newObj = Object.assign({}, name, age);
console.log(newObj);

let school = {name: {name: 'aaa'}};
let newSchool = {...school};  // 浅拷贝
let newSchool2 = Object.assign({}, school);   // 浅拷贝
console.log(school);
console.log(newSchool);
console.log(school === newSchool);
school.name.name = 'bb';
console.log(newSchool);
console.log(newSchool2);

// 深拷贝，两个对象完全没关系 
// 浅拷贝，对象里存的是地址空间，另一个对象改变了空间，也会导致当前对象更改
// Object.assign()是浅拷贝
// {...obj}也是浅拷贝

// 深拷贝 - JSON.parse(JSON.stringify(obj))
let school = {name: {name: 'aaa', fn: function() {}}};
let newSchool3 = JSON.parse(JSON.stringify(school));
school.name.name = 'bbb';
console.log(school);
console.log(newSchool3);

// 缺点
// 1. JSON.stringify不转换函数、正则、undefined等
// 2. 无法处理循环引用，比如 let a = {}; a.a = a; 
// 执行JSON.stringify(a)时候会报错 VM95:1 Uncaught TypeError: Converting circular structure to JSON


// 深拷贝 - 递归拷贝deepClone(parent)
let school = {
  name: {
    name: 'aaa', 
    fn: function() {}
  }, 
  age: 8, 
  address: 'sadsa',
  arr: [1,2,3]
};

function deepClone(parent, cloneObj) {
  // parent是要拷贝的对象
  let child = cloneObj || {};

  for (let key in parent) {
    if (parent.hasOwnProperty(key)) {
      let val = parent[key];
      // TODO:
      // 这里要加上对于null和函数的判断
      if (typeof val === 'object') {
        child[key] = Object.prototype.toString.call(val) === '[object Array]' ? [] :{};
        deepClone(val, child[key]);
      } else {
        child[key] = val;   // 处理普通属性
      }
    }
  }

  return child;
}

let cloneObj = deepClone(school, {});
school.name.fn = function() {console.log(111)};
console.log(school);
console.log(cloneObj);

// 展开运算符作用
console.log(Math.min(1,2,3,4,5));

let arr = [1,2,3,4,5];
console.log(Math.min.apply(Math, arr))
console.log(Math.min(...arr));

function sum(a,b) {
  return a+b;
}

let fn = (n1,n2,n3,...args) => {
  // args = [4,5];
  console.log(sum(...args));
};

fn(1,2,3,4,5);

// ...在函数的参数叫做剩余运算符
// ...在数组或对象叫做展开运算符