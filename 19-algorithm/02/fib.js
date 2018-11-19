// 第一种：Recursion - 递归法
function fib (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  let result = fib(n-1) + fib(n-2);

  return result;
}

console.log(fib(10));

// 第二种：Store（Memoize）- 备忘录法
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
      result = fib(n-1) + fib(n-2);
    }

    memo[n] = result;
  
    return result;
  }

  return fib(n);
}

console.log(storeFib(5));

// 第三种：Bottom-Up Approach - 自底向上法
function bottomUpFib (n) {
  let bottomUp = [];

  bottomUp[1] = 1;
  bottomUp[2] = 1;

  for (let i = 3; i <= n; i++) {
    bottomUp[i] = bottomUp[i-1] + bottomUp[i-2];
  }

  return bottomUp[n];
}

console.log(bottomUpFib(10));