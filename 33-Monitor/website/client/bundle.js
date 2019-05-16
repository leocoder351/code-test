(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  // 专门用来写页面性能监控的逻辑
  var processData = function processData(p) {
    var data = {
      prevPage: p.fetchStart - p.navigationStart,
      // 上一个页面到当前页面的时长
      redirect: p.redirectEnd - p.redirectStart,
      // 重定向的时长
      dns: p.domainLookupEnd - p.domainLookupStart,
      // DNS解析的时长
      connect: p.connectEnd - p.connectStart,
      // TCP连接的时长
      send: p.responseEnd - p.requestStart,
      // 从请求到响应的时长
      ttfb: p.responseStart - p.navigationStart,
      // 从开始到接收到第一个字节的时长
      domready: p.domInteractive - p.domLoading,
      // DOM准备的时长
      whiteScreen: p.domLoading - p.navigationStart,
      // 白屏时间
      dom: p.domComplete - p.domLoading,
      // dom解析时间
      load: p.loadEventEnd - p.loadEventStart,
      // onload的执行时间
      total: p.loadEventEnd - p.navigationStart // 总时长

    };
    return data;
  };

  var load = function load(cb) {
    var timer;

    var check = function check() {
      if (performance.timing.loadEventEnd) {
        clearTimeout(timer);
        cb();
      } else {
        timer = setTimeout(check, 100);
      }
    };

    window.addEventListener('load', check, false);
  };

  var domready = function domready(cb) {
    var timer;

    var check = function check() {
      if (performance.timing.domInteractive) {
        clearTimeout(timer);
        cb();
      } else {
        timer = setTimeout(check, 100);
      }
    };

    window.addEventListener('DOMContentLoaded', check, false);
  };

  var perf = {
    init: function init(cb) {
      domready(function () {
        // 有可能没有触发onload，dom解析完成后先统计一下，可能用户没加载完就把页面关了
        var perfData = performance.timing;
        var data = processData(perfData);
        data.type = 'domready';
        cb(data);
      });
      load(function () {
        var perfData = performance.timing;
        var data = processData(perfData);
        data.type = 'loaded';
        cb(data);
      });
    }
  };

  /**
   * 1. 监控页面的性能 - 算时间差 Performance Api
   * 2. 监控页面静态资源的加载情况
   * 3. 监控ajax的发送情况
   * 4. 监控页面的错误进行捕获
   * 5. 监控用户的行为
   */

  var formatObj = function formatObj(obj) {
    var arr = [];

    for (var key in obj) {
      arr.push("".concat(key, "=").concat(obj[key]));
    }

    return arr.join('&');
  };

  perf.init(function (data) {
    // 图片可能没大小 空的图片
    new Image().src = '/p.gif?' + formatObj(data);
    console.log(data);
  }); // 发送到服务端，1. ajax 2. img

})));
