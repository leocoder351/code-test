// replace: 把原有的字符替换成新的字符
// 在不使用正则的情况下，每执行一次只能替换一个字符
var str = 'tianjin2015tianjin2016';
var str2 = str.replace('tianjin', 'tianjinguangzhou');
console.log(str2);    // 'tianjinguangzhou2015tianjin2016'
str2 = str.replace('tianjin', 'tianjinguangzhou').replace('tianjin', 'tianjinguangzhou');
console.log(str2);    // 'tianjinguangzhouguangzhou2015tianjin2016'
// 多次执行replace还是从0开始

str2 = str.replace(/tianjin/g, 'tianjinguangzhou');
console.log(str2);    // 'tianjinguangzhou2015tianjinguangzhou2016'

// replace的第一项的值是一个正则，它的实现原理
// 首先，我们和exec捕获一样，把所有和我们正则匹配的都捕获到
// 然后，把捕获的内容替换成我们需要替换的新内容
// /tianjin/g 按照这个正则把str中所有可以匹配的都捕获到，然后统一都替换成我们的'tianjinguangzhou'

str = str.replace(/tianjin/g, function() {
  console.log(arguments);
  // 第1次执行匿名函数的结果： { '0': 'tianjin', '1': 0, '2': 'tianjin2015tianjin2016' }
  // 第2次执行匿名函数的结果： { '0': 'tianjin', '1': 11, '2': 'tianjin2015tianjin2016' }

  return 'tianjinguangzhou';
});

// 第二个参数换成一个函数
// (1) 匿名函数执行多少次，取决于正则能在字符串中捕获多少次 -> 这个例子，正则捕获2次，所以匿名函数执行2次
// (2) 每次执行匿名函数，里面传递的参数值arguments和我们自己通过exec捕获到的结果是非常类似的（即使正则有分组，我们同样可以通过arguments获取到分组捕获的内容）
// (3) return：你返回的结果是啥，就相当于把当前这一次大正则捕获的内容替换成你返回的内容

var str = 'tianjin2015tianjin2016';
str = str.replace(/\d+/g, function() {
  console.log(arguments[0]);    // 每次执行匿名函数把我们大正则捕获的内容获取到
  return 1;   // 我返回的1把每次大正则匹配捕获的内容都替换了
});
console.log(str);  // 'tianjin1tianjin1'


var str = 'tianjin2015tianjin2016';
str = str.replace(/(\d+)/g, function() {
  console.log(arguments[1]);    // 获取每次执行匿名函数把我们正则捕获到的第一个分组中的内容
  console.log(RegExp.$1);   // 获取第一个分组捕获的内容  RegExp.$2就是第二个分组捕获到的内容

  return 1;   // 我返回的1把每次大正则匹配捕获的内容都替换了
});
console.log(str);  // 'tianjin1tianjin1'