// 找出下列正数组的最大差值 输入 [10,5,11,7,8,9] 输出 6
function getMaxDiff(arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    min = Math.min(min, current);

    let diff = current - min;

    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

console.log(getMaxDiff([10, 5, 11, 7, 8, 9]))

// 判断一个单词是否为回文
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('abcba'));

// 数组去重
// 方法一 indexOf
function unique(arr) {
  let result = [];

  arr.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });

  return result;
}

console.log(unique([1, '1', 2, 3, 4, 2, 5, 6]))

// 方法二 hash
function unique(arr) {
  let result = [];
  let hash = {};

  arr.forEach((item) => {
    if (!hash[item] || hash[item] !== typeof item) {
      hash[item] = typeof item;
      result.push(item);
    }
  });

  return result;
}

console.log(unique([1, '1', 2, 3, 4, 2, 5, 6]))

// 方法三 Set
function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique([1, '1', 2, 3, 4, 2, 5, 6]))

// 统计字符串中字母个数或统计最多字母数，输入 afjghdfraaaasdenas，输出 a
function findMaxCharacter(str) {
  let reg;
  let arr;
  let character;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    reg = new RegExp(str[i], 'g');
    arr = str.match(reg);

    if (arr.length > maxLength) {
      maxLength = arr.length;
      character = str[i];
    }
  }

  console.log(`出现最多的字符是：${character}，出现次数为：${maxLength}`);
}

findMaxCharacter('afjghdfraaaasdenas')

// 判断是否为质数
function isPrime(number) {
  // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
  // you can implement your own pretty easily
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    // Alternatively you can throw an error.
    return false;
  }
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
  var squareRoot = Math.sqrt(number);
  for (var i = 3; i <= squareRoot; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 有100格台阶，可以跨1步或者2步，那么一共有多少种走法
function step() {
  this.n1 = 1;
  this.n2 = 2;
  this.total = 100;
}

step.prototype.getFunction = function () {
  let res = 0;

  if (this.total == 1) {
    return 1;
  }

  if (this.total == 2) {
    return 2;
  }

  for (i = 3; i <= this.total; i++) {
    res = this.n1 + this.n2;
    this.n1 = this.n2;
    this.n2 = res;
  }
  return res;
};

var stairs = new step();
var totalStairs = stairs.getFunction();
console.log(totalStairs)