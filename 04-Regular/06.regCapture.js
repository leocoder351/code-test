// exec -> 正则捕获
// 每一次捕获的时候都是先进行默认的匹配，如果没有匹配成功的，捕获的结果是 null
// 只有有匹配的内容，我们才能捕获到，格式是一个数组

// 捕获的内容格式
// 1. 捕获到的内容是一个数组，数组中的第一项是当前大正则捕获的内容
// index: 捕获内容在字符串中开始的索引位置
// input: 捕获的原始字符串

// 2. 正则捕获的特点
// (1) 懒惰性 -> 每次执行exec只捕获第一个匹配的内容，在不进行任何处理的情况下，执行多次捕获，捕获的还是第一个匹配的内容
// lastIndex: 是正则每一次捕获在字符串中开始查找的位置，默认值是0


var reg = /\d+/;
var str = 'tianjin2015binhai2016';
console.log(reg.lastIndex);   // 0
var res = reg.exec(str);
console.log(res);    // [ '2015', index: 7, input: 'tianjin2015binhai2016' ]

console.log(reg.lastIndex);   // 0  说明我们第二次捕获的时候也是要从字符串索引0处开始查找
res = reg.exec(str);    
console.log(res);         // [ '2015', index: 7, input: 'tianjin2015binhai2016' ]

// (2) 如何解决懒惰性？ 在正则的末尾加一个修饰符 'g'
// 修饰符： g  i  m
// global(g)：     全局匹配
// ignoreCase(i)： 忽略大小写匹配
// multiline(m)：  多行匹配

// 原理：加了全局修饰符g，正则每一次捕获结束后，我们的lastIndex的值都变为了最新的值，下一次捕获从最新的位置开始查找
// 这样，就可以把所有需要捕获的内容都获取到了

reg = /\d+/g;
str = 'tianjin2015binhai2016';
console.log(reg.lastIndex);   // 0
console.log(reg.exec(str));   // [ '2015', index: 7, input: 'tianjin2015binhai2016' ]

console.log(reg.lastIndex);   // 11
console.log(reg.exec(str));   // [ '2016', index: 17, input: 'tianjin2015binhai2016' ]

console.log(reg.lastIndex);   // 21
console.log(reg.exec(str));   // null

// (3) 自己编写程序获取正则捕获的所有内容（一定不要忘记加g）
var array = [];
var reg = /\d+/g;
var str = 'tianjin2015binhai2016';
var res = reg.exec(str);

while (res) {
  array.push(res[0]);
  res = reg.exec(str);
}
 
console.log(array);

// (4) 正则每一次捕获都是按照匹配最长的结果捕获的，例如：2符合正则，2015也符合正则，默认捕获的是2015
reg = /\d+/g;   // 出现1到多个0-9之间的数字
str = 'tianjin2015binhai2016';
console.log(reg.lastIndex);   // 0
console.log(reg.exec(str));   // [ '2015', index: 7, input: 'tianjin2015binhai2016' ]

// (5) 如何解决正则的贪婪性 -> 在量词元字符后面添加一个?号即可
// ?在正则中有很多的作用：
// 放在一个普通的元字符后面代表出现0-1次 /\d?/ -> 数字出现0或1次
// 放在一个量词的元字符后面是取消捕获时候的贪婪性


reg = /\d+?/g; 
str = 'tianjin2015binhai2016';
array = [];
res = reg.exec(str);

while (res) {
  array.push(res[0]);
  res = reg.exec(str);
}
 
console.log(array);     // [ '2', '0', '1', '5', '2', '0', '1', '6' ]

// ......


// 3. 字符串中的match方法，把所有和正则匹配的字符都获取到
// exec一次只能捕获一个，match会自动循环exec，直到捕获结果为null
reg = /\d+?/g; 
str = 'tianjin2015binhai2016d';
arr = str.match(reg);
console.log(arr);    // [ '2', '0', '1', '5', '2', '0', '1', '6' ]

// 虽然在当前的情况下，match比我们的exec更加简便一些，但是match中存在一些自己处理不了的问题：
// 1. 在分组捕获的情况下，match只能捕获到大正则匹配的内容，而对于小正则捕获的内容是无法匹配的              