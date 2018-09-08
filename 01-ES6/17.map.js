// 1. 使用构造函数方式创建一个实例
// 2. 参数是个数组，数组的每一项都是一个数组
// 3. 这个数组有两项，第一项作为key，第二项作为value
// 4. 这里的key可以是任意数据类型

var map1 = new Map([[1, 'a'], ['a', 'A'], [{name: 'zcx'}, "vcx"], [/\d+/, '正则']]);
console.log(map1);

// 方法
// get(key)
console.log(map1.get('a'));

// set(key, value);
map1.set(2, 'js');
console.log(map1);

// delete has clear

let arr = [1,2,3,4,5,6];
// 将数组变成map
var map2 = new Map();
arr.forEach((item, index) => {
  map2.set(index+1, arr.slice(0,index+1));
});
console.log(map2);

// forEach()  keys()  values()  entries()
map2.forEach((val, key, map) => {
  // val: 值
  // key: 间
  // map: 原map实例
});

for (var key of map2.keys()) {
  console.log(key);
}

for (var value of map2.values()) {
  console.log(value);
}

for (var [key, val] of map2.entries()) {
  console.log(key)
  console.log(val)
}