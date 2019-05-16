// 专门用来写页面性能监控的逻辑

let processData = (p) => {
  let data = {
    prevPage: p.fetchStart - p.navigationStart,   // 上一个页面到当前页面的时长
    redirect: p.redirectEnd - p.redirectStart,    // 重定向的时长
    dns: p.domainLookupEnd - p.domainLookupStart, // DNS解析的时长
    connect: p.connectEnd - p.connectStart,       // TCP连接的时长
    send: p.responseEnd - p.requestStart,         // 从请求到响应的时长
    ttfb: p.responseStart - p.navigationStart,    // 从开始到接收到第一个字节的时长
    domready: p.domInteractive - p.domLoading,    // DOM准备的时长
    whiteScreen: p.domLoading - p.navigationStart,// 白屏时间
    dom: p.domComplete - p.domLoading,           // dom解析时间
    load: p.loadEventEnd - p.loadEventStart,      // onload的执行时间
    total: p.loadEventEnd - p.navigationStart,    // 总时长
  };

  return data;
};

let load = (cb) => {
  let timer;
  let check = () => {
    if (performance.timing.loadEventEnd) {
      clearTimeout(timer);
      cb();
    } else {
      timer = setTimeout(check, 100);
    }
  };

  window.addEventListener('load', check, false);
};

let domready = (cb) => {
  let timer;
  let check = () => {
    if (performance.timing.domInteractive) {
      clearTimeout(timer);
      cb();
    } else {
      timer = setTimeout(check, 100);
    }
  };

  window.addEventListener('DOMContentLoaded', check, false);
};

export default {
  init (cb) {
    domready(() => {
      // 有可能没有触发onload，dom解析完成后先统计一下，可能用户没加载完就把页面关了
      let perfData = performance.timing;
      let data = processData(perfData);
      data.type = 'domready';

      cb(data);
    });

    load(() => {
      let perfData = performance.timing;
      let data = processData(perfData);
      data.type = 'loaded';

      cb(data);
    });
  }
}