import { a } from './a';
import './style.css';
import './style1.less';

console.log('main');
console.log(a);

let p = new Promise((resolve, reject) => {
  resolve(22);
});

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

if (module.hot) {
  module.hot.accept();
}