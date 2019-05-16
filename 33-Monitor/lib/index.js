/**
 * 1. 监控页面的性能 - 算时间差 Performance Api
 * 2. 监控页面静态资源的加载情况
 * 3. 监控ajax的发送情况
 * 4. 监控页面的错误进行捕获
 * 5. 监控用户的行为
 */

// 1. 监控页面性能
import perf from './performance.js';

let formatObj = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }
  return arr.join('&');
};

perf.init((data) => {
  // 图片可能没大小 空的图片
  new Image().src = '/p.gif?' + formatObj(data);
  console.log(data);
});

// 发送到服务端，1. ajax 2. img