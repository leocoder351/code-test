import help from '../common/help';

console.log('async引用', help.version);

const asyncTest = {
  init() {
    console.log('test');
  }
};

export default asyncTest;