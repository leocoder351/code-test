// debounce
// 在一段时间内，不管你触发了几次回调，我只认最后一次，即延迟响应
function debounce (fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

let debounceFn = debounce(function (event) {
  console.log('触发了滚动事件');
  console.log(event);
}, 2000);

window.addEventListener('scroll', debounceFn);