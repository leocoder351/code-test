// 正则：是一种规则，用来处理字符串的一个规则（正则就是用来处理字符串的）

// 1. 处理
// (1). 匹配    判断一个字符串是否符合我们制定的规则 -> test:  reg.test(str)

var reg = /\d/;   // 包含一个0-9之间的数字
console.log(reg.test('猪'));          // false
console.log(reg.test("1"));           // true
console.log(reg.test("猪1啊"));       // true


// (2). 捕获    把字符串中符合我们正则规则的内容捕获到 -> exec:  reg.exec(str)

var reg = /\d/;   // 包含一个0-9之间的数字
console.log(reg.exec('猪'));          // null
console.log(reg.exec("1"));           // ['1', index: 0, input: '1', groups: undefined]      数组的length 是 1
console.log(reg.exec("猪1啊"));       // ['1', index: 1, input: '猪1啊', groups: undefined]   数组的length 是 1


// 2. 如何创建一个正则
// 字面量方式：
var reg = /\d/;

// 实例创建方式：
var reg = new RegExp(/\d/);
console.log(reg.exec("猪1啊"));

// 正则的两种创建方式是由区别的


// 3. 如何学习正则：
console.dir(RegExp.prototype);
