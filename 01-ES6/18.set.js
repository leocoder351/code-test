// 1. 使用构造函数方式创建set实例
// 2. 参数是个数组，返回值是个Set实例，去重后的

let set1 = new Set([1,2,3,NaN,NaN,1,2,3,4,5]);
console.log(set1);

// set实例是一个类数组对象
console.log([...set1]);
console.log(Array.from(set1));

// 利用Set实现数组去重
function fn(arr) {
  return [...new Set(arr)];
}

console.log(fn([1,1,2,2,3,4,5]));



let set2 = new Set([1,2,3,1,2,3]);
console.log(set2);

// size 长度
// 1. add() 增加，之前没有才能加上，加在最后面
// 返回值当前实例，实现链式写法
console.log(set2.add(5));

// 2. has() 判断有没有某一项
// 返回值true/false
console.log(set2.has(3));   // true
console.log(set2.has(7));   // false

// 3. delete() 删除某一项
// 返回值是true/false
console.log(set2.delete(3));  // true
console.log(set2.delete(7));  // false

// 4. clear() 清空
// 返回 undefined
console.log(set2.clear())
console.log(set2);

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,8,10];

// 并集
function bj(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(bj(arr1, arr2));

// 交集
function jj(arr1, arr2) {
  return arr1.filter((item) => {
    return arr2.includes(item);
  });
}
console.log(jj(arr1, arr2));

// 差集
function cj(arr1, arr2) {
  return bj(arr1, arr2).filter((item) => {
    return !jj(arr1, arr2).includes(item);
  });
}
console.log(cj(arr1, arr2));