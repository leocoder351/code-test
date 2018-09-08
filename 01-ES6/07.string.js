// 模板字符串
let str = `
  <ul>
    <li></li>
    <li></li>
  </ul>
`;
console.log(str)

// 实现模板字符串
let name = 'aa';
let age = 9;
let str = '<ul><li>${name}</li><li>${age}</li></ul>';
let newStr = str.replace(/\$\{([^\}]+)\}/g, function () {
  console.log(arguments);
  return eval(arguments[1]);
});
console.log(newStr);

// 带标签的模板字符串
let name = 'aa';
let age = 'ninth';

// let str = `${name.toUpperCase()}今年${age.toUpperCase()}岁了`;

function tag(strings) {
  let args = Array.prototype.slice.call(arguments, 1);
  console.log(strings);
  console.log(args);
  let str = '';
  for (var i = 0; i < args.length; i++) {
    str += (strings[i] + args[i].toString().toUpperCase());
  }
  str += strings[strings.length - 1];
  return str;
}
let str = tag`${name}今年${age}岁了`
console.log(str);

// 字符串的常见方法
let str = 'zfswrgds';
console.log(str.includes('sw'));

let url = 'https://www.baidu.com';
console.log(url.startsWith('https'));

let avatar = '1.png';
console.log(avatar.endsWith('.png'));

let date = new Date();
let h = date.getHours().toString();
let m = date.getMinutes().toString();
let s = date.getSeconds().toString();

let result = `${h.padStart(2, 0)}:${m.padStart(2, 0)}:${s.padStart(2, 0)}`;
console.log(result);