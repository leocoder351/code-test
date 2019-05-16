// 二分查找
function find (arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (high > low) {
    let mid = Math.floor((high+low)/2);

    if (arr[mid] > item) {
      high = mind;
    } else if (arr[mid] < item) {
      low = mid;
    } else {
      return mid;
    }
  }

  return -1;
}

function find (str) {
  for (var i = 0; i < str.length; i++) {
    let char = str[i];
    let reg = new RegExp(char, 'g');
    let l = str.match(reg).length;
    if (l === 1) {
      return char;
    }
  }
}

function find (str) {
  for (var i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
}

function format (num) {
  var str = num + '';

  return str.split('').reverse().reduce((prev, next, index) {
    return (index % 3) ? next : (next + ',') + prev;
  })
}

function exchange (num) {
  var str = num + '';

  if (str.length <= 3) {
    return num;
  }

  str = str.replace(/\d{1,3}(?=(\d{3})+$)/g, (v) => {
    console.log(v);
    return v + ',';
  })

  return str;
}

console.log(exchange(1234567));

function getMaxDiff (arr) {
  let min = arr[0];
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    min = Math.min(current, min);

    let diff = current - min;

    maxDiff = Math.max(diff, maxDiff);
  }

  return maxDiff;
}

function isPrime (number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
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

  let squareRoot = Math.sqrt(number);

  for (let i = 0; i <= squareRoot; i+=2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function Step () {
  this.n1 = 1;
  this.n2 = 2;
  this.total = 100;
}

Step.prototype.getFunction = function () {
  let res = 0;

  if (this.total === 1) {
    return 1;
  }

  if (this.total === 2) {
    return 2;
  }

  for (let i = 3; i <= this.total; i++) {
    res = this.n1 + this.n2;
    this.n1 = this.n2;
    this.n2 = res;
  }

  return res;
}

var stairs = new Step();
var totalStairs = stairs.getFunction();
console.log(totalStairs)


// 1. recurison - 递归
function fib (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  let result = fib(n-1) + fib(n-2);

  return result;
}

// 2. Memoize - 备忘录法
function storeFib (n) {
  let memo = [];

  function fib (n) {
    let result = 0;

    if (memo[n]) {
      return memo[n];
    }

    if (n === 1 || n === 2) {
      result = 1;
    } else {
      retult = fib(n-1) + fib(n-2);
    }

    memo[n] = result;

    return result;
  }

  return fib(n);
}

// 3. bottom-up - 自底向下法
function bottomUp (n) {
  let bottomUp = [];

  bottomUp[1] = 1;
  bottomUp[2] = 1;

  for (let i = 3; i <= n; i++) {
    bottomUp[i] = bottomUp[i-1] + bottomUp[i+1];
  }

  return bottomUp[n];
}

