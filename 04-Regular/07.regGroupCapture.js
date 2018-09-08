// 正则分组：
// 1. 改变优先级
// 2. 分组引用
// \2 代表和第二个分组出现一模一样的内容，\1 代表和第一个分组出现一模一样的内容
// 一模一样：和对应的分组中的内容的值都要一样
var reg = /^(\w)\1(\w)\2$/;
console.log(reg.test('zzff'));    // true
console.log(reg.test('z0f_'));    // false

// 3. 分组捕获 -> 正则在捕获的时候，不仅仅把大正则匹配的内容捕获到，而且还可以把小分组匹配的内容捕获到
// (?:) 表示在分组中，?:的意思是只匹配不捕获
var reg = /^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(?:\d{2})(\d)(?:\d|X)$/;
var str = '142726199009181211';
var array = reg.exec(str);
console.log(array);     // [ '142726199009181211','14','2726','1990','09','18','1',index: 0,input: '142726199009181211' ]
// array[0] -> 大正则匹配的内容
// array[1] -> 第一个分组捕获的内容
// array[2] -> 第二个分组捕获的内容
// ...
console.log(str.match(reg));    // 和exec获取的结果是一样的  [ '142726199009181211','14','2726','1990','09','18','1',index: 0,input: '142726199009181211' ]


var reg = /tianjin(\d+)/g;
var str = 'tianjin1234tianjin3456tianjin5678';

// 我们用exec执行3次，每次不仅仅把大正则匹配的获取到，而且还可以获取第一个分组匹配的内容
console.log(reg.exec(str));   // [ 'tianjin1234','1234',index: 0,input: 'tianjin1234tianjin3456tianjin5678' ]
console.log(reg.exec(str));   // [ 'tianjin1234','3456',index: 0,input: 'tianjin1234tianjin3456tianjin5678' ]
console.log(reg.exec(str));   // [ 'tianjin1234','5678',index: 0,input: 'tianjin1234tianjin3456tianjin5678' ]

// 而match只能捕获大正则匹配的内容
console.log(str.match(reg));  // [ 'tianjin1234', 'tianjin3456', 'tianjin5678' ]