// Array.from();
// 将类数组转换成数组 arguments dom对象

let obj = {0:1,1:2,2:3,length:3};
let arr = Array.prototype.slice.call(obj);
console.log(arr);

let arr = Array.from({0:1,1:2,2:3,length:3});
console.log(arr);

function a() {
  // let result = Array.from(arguments);
  let result = [...arguments];
  console.log(result);
}
a(1,2,3);

// 用[...]需要当前类数组有迭代器
// 什么是迭代器，迭代器需要返回一个对象，对象上有一个next方法，每次调用next方法会返回一个新对象
// 对象上有两个属性，分别是value和done
let obj = {0:1,1:2,2:3,length:3};
obj[Symbol.iterator] = function () {
  let index = 0;  // 当前迭代到了第几个
  let self = this;  // this指代当前对象
  return {
    next: function () {
      return {
        value: self[index],
        done: index++ === self.length ? true: false
      }
    }
  }
}

console.log([...obj]);  // 迭代器就是有next方法 it.next() 返回直到done为true就结束



let obj = {0:1,1:2,2:3,length:3}
console.log({...obj})


console.log(Array[3]);    // 长度为3
console.log(Array.of(3)); // 数组里有一项叫3的
console.log(Array(3).fill(3));

// copyWithin
console.log([1,2,3,4,5,6].copyWithin(0,2,4))

// reduce map filter some every forEach (findIndex find)

// prev代表数组的第一项
// next代表数组的第二项
// currentIndex代表当前迭代到了第几项
// currentArr是当前数组
// reduce会将执行后的结果作为下一次的prev
// 参数可以多加一项
let result = [1,2,3,4,5].reduce((prev, next, currentIndex, currentArr) => {
  console.log(currentIndex);  // 这里currentIndex从1开始
  return prev + next;
});
console.log(result);

let result = [1,2,3,4,5].reduce((prev, next, currentIndex, currentArr) => {
  if (currentIndex === currentArr.length - 1) {
    return (prev + next) / currentArr.length;
  }
  return prev + next;
});
console.log(result);

let result = [1,2,3,4,5].reduce((prev, next, currentIndex, currentArr) => {
  console.log(currentIndex); // 这里currentIndex从0开始
  return prev + next;
}, 100);  // 传入100作为第一个prev
console.log(result);

// 自己实现reduce
Array.prototype.myReduce = function(callback, initialValue) {
  let prev, index;

  if (initialValue) {
    prev = Number(initialValue);
    index = 0;
  } else {
    prev = this[0];
    index = 1;
  }

  for (var i = index; i < this.length; i++) {
    prev = callback(prev, this[i], i, this);
  }
  return prev;
};

let result = [1,2,3,4,5].myReduce((prev, next, currentIndex, currentArr) => {
  console.log(currentIndex);  // 这里currentIndex从1开始
  return prev + next;
});
console.log(result);

let result = [1,2,3,4,5].myReduce((prev, next, currentIndex, currentArr) => {
  if (currentIndex === currentArr.length - 1) {
    return (prev + next) / currentArr.length;
  }
  return prev + next;
});
console.log(result);

let result = [1,2,3,4,5].myReduce((prev, next, currentIndex, currentArr) => {
  console.log(currentIndex); // 这里currentIndex从0开始
  return prev + next;
}, 100);  // 传入100作为第一个prev
console.log(result);


// reduce(收敛)  
// map(映射) 
// filter(过滤) 
// some(有没有满足的条件) 
// every(有没有不满足的条件，和some相反) 
// forEach 
// findIndex find(看能不能找到)

let newArr = [1,2,3].map((item, index) => {
  return `<li>${item}</li>`;
});
console.log(newArr);

Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}
let newArr = [1,2,3].myMap((item, index) => {
  return `<li>${item}</li>`;
});
console.log(newArr);


// find只会找一个，找到后停止
// 声明式， 编程式， 
let item = [1,2,3,4,5,6,7,8].find((item, index) => {
  return item > 6;
});
console.log(item);

// some 找true，找到后返回true，不继续向下找
let boolean = [1,2,3,4].some((item, index) => {
  console.log(index);
  return item === 3;
});
console.log(boolean);

// every
let boolean = [1,2,3,4].every((item, index) => {
  console.log(index);
  return item === 3;
});
console.log(boolean);

// filter 过滤，callback中返回true保留
let newArr = [1,2,3,4,5,6].filter((item, index) => {
  return item < 4;
});
console.log(newArr);

// for of / for in
// for of 只能遍历数组，iterator可供for of 消费
// for in 能遍历对象和数组

let arr = [1,2,3];
for (let a of arr) {
  console.log(a);
}

// includes ES7的，不能写条件
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(0));