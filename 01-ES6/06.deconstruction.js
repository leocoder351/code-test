// 对象解构
// 起别名用冒号 默认值用等号
let obj = {name: 'aa', age: 20};
let {name:n, age, address='回龙观'} = obj;
console.log(n, age, address);

// 复杂的解构 省略解构
let arr = [{name: 'aa', age: 9}, '回龙观', {name: 'jw'}];
let [, address, {name}] = arr;
console.log(address, name);
