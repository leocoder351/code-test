var reg = /\d/;   // 包含一个0-9的数字
console.log(reg.test('zhu2018'));   // true

reg = /^\d$/;   // 只能是一个0-9之间的数字
console.log(reg.test('9'));         // true
console.log(reg.test('012'));       // false
console.log(/^\d\d\d$/.test('012'));  // true

reg = /^\d+$/;
console.log(reg.test('2015'));    // true
// 一个简单的验证手机号的正则： 11位数字，第一位是1
reg = /^1\d{10}$/;

reg = /^0.2$/;    // 以0开头，以2结尾，中间可以是除了\n的任意字符
console.log(reg.test('0.2'));   // true
console.log(reg.test('0-2'));   // true
console.log(reg.test('0黑2'));   // true
reg = /^0\.2$/;
console.log(reg.test('0.2'));   // true
console.log(reg.test('0-2'));   // false
console.log(reg.test('0黑2'));   // false

// 分组 -> 把一个大正则划分成几个小正则
reg = /^(\d+)tianjin(\d+)$/;
console.log(reg.test('2015tianjin2018'));
console.log(reg.exec('2015tianjin2018'));





// 元字符：
// 每一个正则表达式都是由元字符和修饰符组成的

// [元字符] -> 在//之间具有意义的一些字符
// 1. 具有特殊意义的元字符
// \        叫转义字符
// ^        以某一个元字符开始
// $        以某一个元字符结束
// \n       匹配一个换行符
// .        除了\n以外的任意字符
// ()       分组
// x|y      x或者y中的一个 
// [xyz]    x、y、z中的一个
// [^xyz]   除x、y、z以外的任意一个字符      
// [a-z]    a-z之间的任意一个字符
// [^a-z]   除了a-z之间的任意一个字符
// \d       0-9之间的任意一个数字
// \D       除了0-9以外的任意一个字符
// \b       匹配一个边界符 "w1 w2 w3"
// \B       除了边界符以外的任意一个字符
// \w       数字、字母、下划线中的任意一个字符，相当于 [0-9a-zA-Z_]
// \W       除了数字、字母、下划线以外的任意一个字符
// \s       匹配一个空白字符  空格、一个制表符(TAB)、换页符...

// 2. 代表出现次数的量词元字符
// *       出现0到多次
// +       出现1到多次，即至少出现1次
// ?       出现0次或者1次
// {n}     出现n次
// {n,}    出现n到多次
// {n,m}   出现n到m次

// 修饰符： g  i  m
// global(g)：     全局匹配
// ignoreCase(i)： 忽略大小写匹配
// multiline(m)：  多行匹配