let str = require('./a.js');
import B from './b.js';
console.log(str);
console.log(B);

let a = b => c => d => b+c+d;

let obj = {name: 'liu'};
let obj1 = {age: 20};

let newObj = {...obj, ...obj1};   // ES7语法
console.log(newObj);

// 引入css
import './index.css';

// 引入less
import './style.less';

// 在js中引入图片，需要import，或者写一个线上路径
let img = new Image();
// 这里是写了一个字符串，webpack不会进行查找
// img.src = "./1.jpg";

import imgSrc from './1.jpg';
console.log(imgSrc);    // imgSrc就是打包后图片的路径
img.src = imgSrc;

document.body.appendChild(img);