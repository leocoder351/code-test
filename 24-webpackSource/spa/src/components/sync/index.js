import lodash from 'lodash-es';
import item from './sync.css';

const sync = function() {
  console.log('sync');
  document.getElementById('app').innerHTML = `<h1 class="${item.test}">webpack构建单页应用</h1>`;
};

const isArray = function(args) {
  console.log(lodash.isArray(args));
};

export {
  sync,
  isArray
}