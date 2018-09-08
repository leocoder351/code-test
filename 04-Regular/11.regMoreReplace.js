// 正则的捕获有两种：
// 1. 正则的exec
// 2. 字符串的match
// 3. 字符串的replace

// replace：将原有的字符替换成我们新的字符

// 1. 将小写的数字全部替换成大写的中文数字
var str = '全日制第七期学费：9800';
var array = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
str = str.replace(/\d/g, function() {
  return array[arguments[0]];
});
console.log(str);

// 2. 获取一个字符串中出现次数最多的字符，并且获取出现的次数
var str = 'tianjinbinhaizizhiqutianjinnnn';
var obj = {};
// (1) 获取每一字符出现的次数
str.replace(/[a-z]/gi, function() {
  var val = arguments[0];
  
  obj[val] >= 1 ? ++obj[val] : obj[val] = 1;
  
});
console.log(obj);
// (2) 用假设法获取最大值
var maxNum = 0;
var ary = [];
for (var key in obj) {
  obj[key] > maxNum ? maxNum = obj[key] : null;
}
console.log(maxNum);

// (3) 把所有符合maxNum次数的都获取到
var ary = [];
for (var key in obj) {
  obj[key] === maxNum ? ary.push(key) : null;
}
console.log('出现次数最多的字符是： ' + ary.join() + '~出现了' + maxNum + '次~');

// todo : 3个步骤合到一起



// ---------------


// 3. 模板引擎实现的初步原理
var str = 'my name is {0}, my age is {1}, i come from {2}, i love {3}~~';
var ary = ['易文', 28, '湖南', 'javascript'];
str = str.replace(/{(\w)}/g, function() {
  return ary[arguments[1]];
});
console.log(str);

// RegExp.$1 在 IE 下不兼容

// 4. 格式化时间
// '2015-9-22 13:10:0' -> '2015年09月22日 13时10分00秒'
var str = '2015-9-22 13:10:0';
str2 = str.replace(/(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/g, function() {
  console.log(arguments);
  var y = arguments[1];
  var m = arguments[2] < 10 ? ('0' + arguments[2]) : arguments[2];
  var d = arguments[3] < 10 ? ('0' + arguments[3]) : arguments[3];
  var h = arguments[4] < 10 ? ('0' + arguments[4]) : arguments[4];
  var mi = arguments[5] < 10 ? ('0' + arguments[5]) : arguments[5];
  var s = arguments[6] < 10 ? ('0' + arguments[6]) : arguments[6];
  return `${y}年${m}月${d}日 ${h}时${mi}分${s}秒`;
})
console.log(str2);

// 方法2
var str = '2015-9-22 13:10:0';
var resStr = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
var ary = [];
str.replace(/(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/g, function() {
  ary = Array.prototype.slice.call(arguments);
  ary = ary.slice(1, 7);
});

var reg = /{(\d+)}/g;
resStr = resStr.replace(reg, function() {
  var num = arguments[1];
  return ary[num] < 10 ? `0${ary[num]}` : ary[num];
});
console.log(resStr);
// {0} 替换成 2015： 我们首先要获取{0}，而且我们还要获取这个0，这个0相当于我们ary数组中的索引
// 我们要做的就是把对应索引的内容替换成我们{0}


// 5. 把一个字符串中所有单词的首字母大写
// 'tian jin bin hai' -> 'Tian Jin Bin Hai'
var str = 'tian   jin bin hai';
str = str.replace(/\b[a-z]/gi, function() {
  console.log(arguments);
  return arguments[0].toUpperCase();
});
console.log(str);


// 6. 把URL中的参数都获取到，并且保存成对象格式
var str = 'https://www.baidu.com/?mid=10000&cid=1467834&app=1.0';
var reg = /([^?=&]+)=([^?=&]+)/g;
var obj = {};
var res = reg.exec(str);

while (res) {
  obj[res[1]] = res[2];
  res = reg.exec(str);
}

console.log(obj);