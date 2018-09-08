function currying(fn) {
  let allArgs = [];

  return function next(...args) {
    if (args.length > 0) {
      allArgs = allArgs.concat(args);
      return next;
    } else {
      return fn.apply(null, allArgs);
    }
  }
}

function add(...args) {
  let sum = 0;

  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

let curryAdd = currying(add);

console.log(curryAdd(1)(2, 3)(4)());

