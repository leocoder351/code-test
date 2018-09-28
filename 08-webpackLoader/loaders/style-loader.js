let loaderUtils = require('loader-utils');

function loader(source) {   // source 是处理好的样式
  let script = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;

  // 返回的结果 会在浏览器中运行
  return script;
}

loader.pitch = function(request) {    // 这个request就是当前路径 没有包含当前less
  // style-loader css-loader less-loader
  console.log(request);
  let script = `
    let style = document.createElement('style');
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + request)});
    document.head.appendChild(style);
  `;

  // 返回的结果 会在浏览器中运行
  return script;
};

module.exports = loader;