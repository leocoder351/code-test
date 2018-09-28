// babel-loader

import './index.less';

class School {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let s = new School('bjsz', 9);
console.log(s);

// file-loader的原理 会先生成一张图片 之后把图片的地址给photo
import photo from './public.jpg';
let img = document.createElement('img');
img.src = photo;
document.body.appendChild(img);