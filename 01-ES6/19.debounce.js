// 防抖函数一：设置时间内的多次请求，只响应最后一次，等待一定时间再执行目标函数
// 即一个周期内最后一次触发
// func是用户传入的防抖函数
// wait是等待时间
const debounce1 = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0;
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定个定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

// 测试
var debounceFun = debounce1(function() {
  alert('点击按钮啦');
}, 2000);
var fun = function() {
  alert('点击按钮啦');
};
var $btn = document.getElementById('btn');

$btn.addEventListener('click', debounceFun);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/**
 * 防抖函数二，想要在一个周期内第一次触发，就立即执行一次，然后一定时间段内都不能再执行目标函数
 * 这样，在限制函数频繁执行的同时，可以减少用户等待反馈的时间，提升用户体验
 * 
 * @param {function}  func        回调函数
 * @param {number}    wait        表示时间窗口间隔
 * @param {boolean}   immediate   设置为true时，是否立即调用函数
 * @return {function}             返回客户调用函数 
 */
const debounce2 = function(func, wait = 50, immediate = true) {
  let timer = null;
  let called = false;

  return function(...args) {
    if (immediate) {
      // 立即执行的防抖
      if (!called) {
        func.apply(this, args);
        called = true;
        timer = setTimeout(() => {
          called = false;
          timer = null;
        }, wait);
      }
    } else {
      // 非立即执行的防抖
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  }
};

// 测试
var debounceFun = debounce2(function() {
  alert('点击按钮啦');
}, 2000, false);
var fun = function() {
  alert('点击按钮啦');
};
var $btn = document.getElementById('btn');

$btn.addEventListener('click', debounceFun);