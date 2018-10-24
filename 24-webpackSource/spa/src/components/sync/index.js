import {isArray} from 'lodash-es';
import item from './sync.css';
import help from '../common/help';

const sync = function() {
  console.log('sync');
  fetch('/api/test').then(res => {
    console.log(111);
    console.log(res);
    return res.json();
  }).then(data => {
    console.log('fetch结果', data);
  })

  setTimeout(() => {
    document.getElementById('app').innerHTML = `<h1 class="${item.test}">webpack构建单页应用</h1>`;
  }, 2000);
};

const isArrayFun = function(args) {
  console.log(isArray(args));
};

export {
  sync,
  isArrayFun
}