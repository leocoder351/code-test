import { sync } from './components/sync';
import(/* webpackChunkName: "async-test" */'./components/async').then(_ => {
  console.log('webpackChunkName: "async-test"')
  console.log(_);
  _.default.init();
});

console.log('hello webpack');
sync();