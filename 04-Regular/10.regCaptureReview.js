// exec 正则用来捕获的一个方法

// ? 的作用
// 1. 跟在元字符后面当做量词使用，表示出现0次或1次  /\d?/，表示匹配0或者1个数字
// 2. 跟在量词后面表示取消正则匹配的贪婪性，匹配最短， /\d+?/，表示匹配1个数字
// 3. 跟在分组里面，表示只匹配不捕获，/(?:\d)/，只匹配，不捕获

// 在正则捕获的时候，加修饰符 'g'，可以取消捕获时候的懒惰性，
// 原理：正则中有一个lastIndex属性，它代表下一次正则捕获的开始索引，默认永远是0，也就是不管执行几次exec，
// 都是从索引0开始捕获，所以获取的都是同一个结果
// 而加了修饰符'g'，每一次exec执行完之后，lastIndex属性的值都等于当前捕获内容的后一个索引，下一次从这之后继续查找捕获
// 这样就可以一次次的执行，把想要的结果都捕获到了

var reg = /\d+?/g; 
var str = 'tianjin2015huiwang2014';
var ary = reg.exec(str);
console.log(ary);    // [ '2', index: 7, input: 'tianjin2015huiwang2014' ]
var ary = reg.exec(str);
console.log(ary);    // [ '0', index: 8, input: 'tianjin2015huiwang2014' ]


var reg = /\d+?/g; 
var str = 'tianjin2015huiwang2014';
var res = reg.exec(str);
var ary = [];

while (res) {
  ary.push(res[0]);
  res = reg.exec(str);
}

console.log(ary);     // [ '2', '0', '1', '5', '2', '0', '1', '4' ]

// match 字符串用来匹配正则的一个方法，替代 while (reg.exec)
var reg = /\d+?/g; 
var str = 'tianjin2015huiwang2014';
var ary = str.match(reg);
console.log(ary);   // [ '2', '0', '1', '5', '2', '0', '1', '4' ]
// match 一次性把符合大正则的都存放在一个数组中，如果也需要捕获小分组中的内容，match是捕获不到的
String.prototype.myMatch = function(reg) {
  var ary = [];
  var res = reg.exec(this);
  // this -> str 我们想操作的那个字符串 -> 原型上的方法，里面的this都是我们要操作的当前的实例
  while (res) {
    ary.push(res[0]);
    res = reg.exec(this);
  }

  return ary;
};
console.log(str.myMatch(reg));    // [ '2', '0', '1', '5', '2', '0', '1', '4' ]



// 分组捕获
// 在正则捕获的时候，我们添加分组，不仅仅可以把大正则匹配的内容捕获，而且还可以把小分组代表的子正则匹配的内容一起捕获到

var str = 'my name is {0}, my age is {1}, i come from {2}, i love {3}~~';
var ary = ['易文', 28, '湖南', 'javascript'];
console.log(/{(\w)}/.exec(str));  // [ '{0}','0',index: 11,input: 'my name is {0}, my age is {1}, i come from {2}, i love {3}~~' ]
// (?:)  只匹配，不捕获，因为分组还有改变优先级的作用，不仅仅是用来捕获
console.log(/{(?:\w)}/.exec(str));  // [ '{0}',index: 11,input: 'my name is {0}, my age is {1}, i come from {2}, i love {3}~~' ]

str = str.replace(/{(\w)}/g, function() {
  console.log(arguments);
  return ary[arguments[1]];
});
console.log(str);

// replace 字符串实现替换的一个方法，但是一般情况下，执行一次只替换一个，我们为了替换所有符合的，需要用正则来处理
var str = 'tianjin2015tianjin2016';
var str2 = str.replace('tianjin', 'beijin');
console.log(str2);      // 'beijin2015tianjin2016'

// 在整个字符串中，把符合正则的都替换成 beijin
var str3 = str.replace(/tianjin/g, 'beijin');
console.log(str3);    // 'beijin2015beijin2016'

// 如果你想替换的话，首先你先要把'tianjin'获取到，然后再替换
// 如果replace第一参数是一个正则，那么涉及到了正则的捕获
// lastIndex = 0
// 首先捕获'tianjin'，捕获一次，replace就执行一次替换的操作
// lastIndex = 7
// 再次捕获'tianjin'，捕获一次，replace就执行一次替换的操作
// lastIndex = 18
// 捕获不到内容了，结果为null，replace就不再执行替换的操作了

// 如上述所说的，我们当前replace执行两次，相当于第二个参数function也执行两次
// 在每一次function执行的时候，在函数中return后面返回的是啥，就把捕获的内容替换成啥
var str4 = str.replace(/tianjin/g, function() {
  console.log(arguments);
  // arguments当前函数的参数集合，我们发现和正则exec捕获的是很类似的，这个函数默认会有三个参数
  // arguments[0]: 每一次捕获的内容
  // arguments[1]: 每一次捕获的开始索引
  // arguments[2]: 原始字符串

  return '~~~';
});
console.log(str4);