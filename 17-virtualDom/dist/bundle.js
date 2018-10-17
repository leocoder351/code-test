/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/ex1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/ex1.js":
/*!************************!*\
  !*** ./example/ex1.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { el } = __webpack_require__(/*! ../index */ \"./index.js\");\n\nconsole.log(11);\nconsole.log(el);\n\nvar tree = el('div', {id: 'container'}, [\n  el('h1', {style: 'color: blue'}, ['Simple virtual dom']),\n  el('p', ['hello, virtual-dom']),\n  el('ul', [el('li')])\n]);\n\nvar root = tree.render()\n\nconsole.dir(tree)\nconsole.dir(root)\n\n//# sourceURL=webpack:///./example/ex1.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.el = __webpack_require__(/*! ./lib/element */ \"./lib/element.js\");\nexports.diff = __webpack_require__(/*! ./lib/diff */ \"./lib/diff.js\");\nexports.patch = __webpack_require__(/*! ./lib/patch */ \"./lib/patch.js\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/diff.js":
/*!*********************!*\
  !*** ./lib/diff.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./lib/diff.js?");

/***/ }),

/***/ "./lib/element.js":
/*!************************!*\
  !*** ./lib/element.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _ = __webpack_require__(/*! ./util */ \"./lib/util.js\");\n\n/**\n * Virtual-dom Element\n * @param {String} tagName\n * @param {Object} props - Element's properties\n *                       - using object to store key-value pair\n * @param {Array<Element|String} - This element's children elements\n *                               - Can be Element instance or just a piece plain text\n */\nfunction Element(tagName, props, children) {\n  if (!(this instanceof Element)) {\n    // 不是通过 new 调用的\n    if (!_.isArray(children) && children != null) {\n      children = _.silce(arguments, 2).filter(_.truthy);\n    }\n    return new Element(tagName, props, children);\n  }\n\n  if (_.isArray(props)) {\n    children = props;\n    props = {};\n  }\n\n  this.tagName = tagName;\n  this.props = props || {};\n  this.children = children || [];\n  this.key = props ? props.key : void 666;\n\n  var count = 0;\n\n  _.each(this.children, function(child, i) {\n    if (child instanceof Element) {\n      count += child.count;\n    } else {\n      children[i] = '' + child;\n    }\n    count ++;\n  });\n\n  this.count = count;\n}\n\n/**\n * Render the hold element tree\n */\nElement.prototype.render = function() {\n  var el = document.createElement(this.tagName);\n  var props = this.props;\n\n  for (var propName in props) {\n    var propValue = props[propName];\n    _.setAttr(el, propName, propValue);\n  }\n\n  _.each(this.children, function(child) {\n    var childEl = (child instanceof Element) ? child.render() : document.createTextNode(child);\n    el.appendChild(childEl);\n  });\n\n  return el;\n};\n\nmodule.exports = Element;\n\n//# sourceURL=webpack:///./lib/element.js?");

/***/ }),

/***/ "./lib/patch.js":
/*!**********************!*\
  !*** ./lib/patch.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./lib/patch.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _ = exports;\n\n_.type = function type(obj) {\n  return Object.prototype.toString.call(obj).replace(/\\[object\\s|\\]/g, '');\n};\n\n_.isArray = function isArray(list) {\n  return _.type(list) === 'Array';\n};\n\n_.silce = function slice(arrayLike, index) {\n  return Array.prototype.slice.call(arrayLike, index);\n};\n\n_.truthy = function truthy(value) {\n  return !!value;\n};\n\n_.isString = function isString(list) {\n  return _.type(list) === 'String';\n};\n\n_.each = function each(array, fn) {\n  for (var i = 0, len = array.length; i < len; i++) {\n    fn(array[i], i);\n  }\n};\n\n_.toArray = function toArray(listLike) {\n  if (!listLike) {\n    return [];\n  }\n\n  var list = [];\n\n  for (var i = 0, len = listLike.length; i < len; i++) {\n    list.push(listLike[i]);\n  }\n\n  return list;\n};\n\n_.setAttr = function setAttr(node, key, value) {\n  switch (key) {\n    case 'style':\n      node.style.cssText = value;\n      break;\n    case 'value':\n      var tagName = node.tagName || '';\n      tagName = tagName.toLowerCase();\n      if (tagName === 'input' || tagName === 'textarea') {\n        node.value = value;\n      } else {\n        node.setAttribute(key, value);\n      }\n      break;\n    default: \n      node.setAttribute(key, value);\n      break;\n  }\n}\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });