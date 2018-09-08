const throttle = function(func, wait) {
  let timer = null;
  let previous = 0;

  return function(...args) {
    let now = new Date().getTime();
    let remain = wait - (now - previous);
    console.log(remain);

    if (!previous || remain <= 0) {
      previous = now;
      func.apply(this, args);
    }
  };
};

// 测试
var throttleFun = throttle(function() {
  alert('点击按钮啦');
}, 5000);
var fun = function() {
  alert('点击按钮啦');
};
var $btn = document.getElementById('btn');

$btn.addEventListener('click', throttleFun);