/*----------------总结规律---------------*/
// []
// 1. 在[]中出现的所有字符都是代表本身意思的字符，没有特殊含义，比如+、.
var reg = /^[.]$/;
console.log(reg.test('1'));     // false
console.log(reg.test('.'));     // true

// 2. 在[]中不识别两位数
reg = /^[12]$/;     // 1或者2中的一个
reg = /^[12-68]$/;    // 1、2-6、8三者中的一个

// 3. []中的-
reg = /^[\w-]$/;    // 数字、字母、_中的一个


// |
reg = /^18|19$/;
console.log(reg.test('18'));      // true
console.log(reg.test('19'));      // true
console.log(reg.test('189'));     // true
console.log(reg.test('119'));     // true
console.log(reg.test('181'));     // true
console.log(reg.test('1819'));    // true
// 正确
reg = /^(18|19)$/;
console.log(reg.test('18'));      // true
console.log(reg.test('19'));      // true
console.log(reg.test('189'));     // false
console.log(reg.test('119'));     // false
console.log(reg.test('181'));     // false
console.log(reg.test('1819'));    // false

// ()
// 1. 分组的作用一： 改变x|y的默认优先级




/*----------------元字符应用---------------*/
// 1. 有效数字的正则：正数、负数、0、小数
// 是： 12.3、12、-12、+12、0.2  
// 不是：09

// (1) 可以出现小数点.  也可以不出现小数点.   但是一旦出现小数点，后面必须跟至少一位数字
// (2) 最开始可能有+或者-，也可以没有
// (3) 整数部分，一位数可以是0-9之间的一个，多位数不能以0开头
reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;


// 2. 年龄介于18-65之间  18-19  20-59  60-65
reg = /^[18-65]$/;  // wrong
reg = /^(1[8-9]|[2-5]\d|6[0-5])$/;

console.log(reg.test('18'));    // true
console.log(reg.test('21'));    // true
console.log(reg.test('38'));    // true
console.log(reg.test('91'));    // false


// 3. 验证邮箱的正则(简版)
// @左边：数字、字母、下划线、.、-
// 1144709265@qq.com
// 1288654215@163.com.cn
// tianjintianjin@iflytek.com
// zhou_xiao_xian@163.com
// zhou.xiao.xian@163.com
reg = /^[\w.-]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,4}){1,2}$/


// 4. 中国标准真实姓名 2-4位汉字
reg = /^[\u4e00-\u9fa5]{2,4}$/;


// 5. 身份证号码
// 18位
// 最后一位可能是数字，也可能是X
// 13(河北省) 0828(具体市县) 1990(年) 12(月) 04(日) 06(没用) 1(奇数男偶数女) 7(可能是数字，可能是X)
reg = /^\d{17}(\d|X)$/;

// 分组捕获
reg = /^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|X)$/;
/*----------------元字符应用---------------*/