// 检测数据类型的四种方式

// 1. typeof 用来检测数据类型的运算符
// 2. instanceof 检测某一个实例是否属于某个类
// 3. constructor 构造函数
// 4. Object.prototype.toString.call()

console.log(typeof 'aa');               // "string"
console.log(typeof 11);                 // "number"
console.log(typeof true);               // "boolean"
console.log(typeof undefined)           // "undefined"
console.log(typeof null);               // "object"
console.log(typeof {a: 2});             // "object"
console.log(typeof [1,2]);              // "object"
console.log(typeof function aa() {});   // "function"


console.log(Object.prototype.toString.call('aa'));                    // "[object String]"
console.log(Object.prototype.toString.call(11));                      // "[object Number]"
console.log(Object.prototype.toString.call(true));                    // "[object Boolean]"
console.log(Object.prototype.toString.call(undefined));               // "[object Undefined]"
console.log(Object.prototype.toString.call(null));                    // "[object Null]"
console.log(Object.prototype.toString.call({a: 2}));                  // "[object Object]"
console.log(Object.prototype.toString.call([1,2]));                   // "[object Array]"
console.log(Object.prototype.toString.call(function aa() {}));        // "[object Function]"


console.log([1,2,3].toString());                      // "1,2,3"
console.log((123).toString());                        // "123"
console.log((123).toString(10));                      // "123"
console.log((123).toString(2));                       // "1111011"
console.log((123).toString(8));                       // "173"
console.log(function aa() {}.toString());             // "function aa() {}"              