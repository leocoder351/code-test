var str = '20151213';
var array = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];

str = str.replace(/\d/g, function() {
  var num = arguments[0];
  return array[num];
});

console.log(str);