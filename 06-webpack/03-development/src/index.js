import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个script脚本引入）对于执行这一行是必须的
  // Lodash，now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], '');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());