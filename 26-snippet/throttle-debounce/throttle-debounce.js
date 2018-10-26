function throttleDebounce (fn, delay) {
  let timer = null;
  let last = 0;

  return function (...args) {
    let now = +new Date();

    if (now - last < delay) {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    } else {
      fn.apply(this, args);
      last = now;
    }
  }
}

let throttleDebounceFn = throttleDebounce(function (event) {
  console.log('触发了滚动事件');
  console.log(event);
}, 2000);

window.addEventListener('scroll', throttleDebounceFn);