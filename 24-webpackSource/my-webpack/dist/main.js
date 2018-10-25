(function (modules) {
  function __webpack_require__ (moduleId) {
    const module = {
      exports: {}
    };

    moduleId.call(module.exports, module, module.exports, __webpack_require__);

    return module.exports;
  }

  return __webpack_require__(modules[0]);
})([
  (function (module, exports, __webpack_require__) {
    __webpack_require__(modules[1]);
    // import test from './test.js';
// test();

console.log('my-webpack');
  }),
  (function (module, exports, __webpack_require__) {
    console.log(123);
  })
])