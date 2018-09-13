// 在另一个文件中，将内容解构出来即可使用
// import 拥有声明功能，以及提升效果
// import 放到页面的顶部

// 第一种方式
// import {str, str2, a} from './01.a.js';
// console.log(str);
// console.log(str2);
// a()

// 第二种方式
import * as A from './01.a.js';
import B from './01.b.js';
console.log(A.str);
console.log(A.str2);
console.log(B);
