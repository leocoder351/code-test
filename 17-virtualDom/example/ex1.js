const { el } = require('../index');

console.log(11);
console.log(el);

var tree = el('div', {id: 'container'}, [
  el('h1', {style: 'color: blue'}, ['Simple virtual dom']),
  el('p', ['hello, virtual-dom']),
  el('ul', [el('li')])
]);

var root = tree.render()

console.dir(tree)
console.dir(root)