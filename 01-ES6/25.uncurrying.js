// 有以下轻提示类，现在想要单独使用其show方法，输出新对象obj中的内容
// 轻提示
function Toast(option){
  this.prompt = '';
}
Toast.prototype = {
  constructor: Toast,
  // 输出提示
  show: function(){
    console.log(this.prompt);
  }
};

// 新对象
var obj = {
    prompt: '新对象'
};

function uncurrying(fn) {
  return function(...args) {
    let that = args.shift();
    return fn.apply(that, args);
  }
}

let objShow = uncurrying(Toast.prototype.show);

objShow(obj);   // "新对象"