// 字面量创建正则方式中，我们//之间包起来的所有的内容都是元字符，有的具有特殊的意义，大部分都是代表本身含义的普通元字符


var name = 'tianjin';

var reg1 = /^\d+"+name+"\d+$/;
console.log(reg1.test('2015tianjin2016'));        // false
console.log(reg1.test('2015"""nameeeee"2016'));        // true


// 对于需要进行字符串拼接的需求，我们只能使用实例创建的方式
var reg2 = new RegExp(`^\\d+${name}\\d+$`, 'g');
console.log(reg2.test('2015tianjin2016'));        // true
console.log(reg2.test('2015"""nameeeee"2016'));        // false

// 字面量方式和实例创建方式在正则中的区别：
// 1. 字面量方式中出现的一切都是元字符，所以不能进行变量值的拼接，而实例创建的方式是可以的
// 2. 字面量方式中直接写\d就可以，而在实例中需要把它转义 \\d
