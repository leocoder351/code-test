/**
 * webpack主运行流程
 * 1. Compile(Tapable) -> Compilation(Tapable) -> Chunk ->
 * 2. Module -> runloaders -> Dependency(AST) -> Template
 */

const fs = require('fs');
const ejs = require('ejs');
let entry = './src/index.js';
let output = './dist/main.js';
const getEntry = fs.readFileSync(entry, 'utf-8');

let template = `(function (modules) {
  function __webpack_require__ (moduleId) {
    const module = {
      exports: {}
    };

    moduleId.call(module.exports, module, module.exports, __webpack_require__);

    return module.exports;
  }

  return __webpack_require__(modules[0]);
})([
  (function (module, exports) {
    <%- getEntry %>
  })
])`;

let result = ejs.render(template, {
  getEntry
});

fs.writeFileSync(output, result, 'utf-8');