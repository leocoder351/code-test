/*
1. sourceType: module （不用严格模式 import）、script（严格模式）
*/

const acorn = require('acorn');
// const result = acorn.parse('1+1', {

// });
// console.log(result);
const walk = require('acorn-walk');
walk.simple(acorn.parse('let x = 10;let b = 30;'), {
  Literal(node) {
    console.log(`Found a literal：${node.value}`);
  }
})