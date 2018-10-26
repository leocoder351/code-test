// throttle
// 某段时间内，不管你触发几次回调，我只认第一次，并在计时结束时给予响应
function throttle (fn, interval) {
  let last = 0;

  return function (...args) {
    let now = +new Date();

    if (now - last > interval) {
      fn.apply(this, args);
      last = now;
    }
  }
}

let throttleFn = throttle(function (event) {
  console.log('触发了滚动事件');
  console.log(event);
}, 2000);

window.addEventListener('scroll', throttleFn);
