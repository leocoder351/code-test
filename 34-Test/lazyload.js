// 获取所有图片标签
const imgs = document.getElementByTagName('img');

// 获取可视区域高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight;

// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let num = 0;

function lazyload () {
  for (let i = num; i < imgs.length; i++) {
    // 用可视区域高度减去元素顶部距离可视区域顶部的高度
    let distance = viewHeight - imgs[i].getBoungingClientRect().top;

    // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
    if (distance >= 0) {
      // 给元素写入真实的src，展示图片
      imgs[i].src = imgs[i].getAttribute('data-src');   // 或者通过dataset.src来获取
      
      // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
      num = i + 1;
    }
  }
}

window.addEventListener('scroll', lazyload, false);

/**
 * 节流
 * 节流是指，在一段时间内，不管你触发几次回调，我只认第一次，并在计时结束时给予响应
 */

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

// 测试用例
let throttleFn = throttle(function (event) {
  console.log('触发了滚动事件');
  console.log(event);
}, 2000);

window.addEventListener('scroll', throttleFn);

/**
 * 防抖
 * 防抖是指，在一段时间内，无论你触发了几次回调，我只认最后一次，即延迟响应
 */

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

/**
 * debounce的问题在于它太有耐心了，如果用户的操作十分频繁，它每次都不等debounce
 * 设置的delay时间结束就进行下一次操作
 */

function throttleDebounce (fn, delay) {
  let timer = null;
  let last = 0;

  return function (...args) {
    let now = +new Date();

    if (now - last > delay) {
      fn.apply(this, args);
      last = now;
    } else {
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      }
    }
  }
}