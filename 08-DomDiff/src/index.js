import { createElement, render, renderDom } from './element.js';
import diff from './diff.js';
import patch from './patch.js';

let virtualDom1 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c'])
]);

let virtualDom2 = createElement('ul', { class: 'list-group' }, [
  createElement('li', { class: 'item' }, ['1']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('div', { class: 'item' }, ['3'])
]);

// 如果平级元素有互换，那会导致重新渲染
// 新增节点也不会被更新
// index

// 将虚拟DOM转换成了真实DOM，渲染到页面上
let el = render(virtualDom1);
renderDom(el, window.root);

let patches = diff(virtualDom1, virtualDom2);

// 给元素打补丁，重新更新视图
patch(el, patches);

// DOM Diff 比较两个虚拟DOM区别 比较两个对象的区别
// DOM Diff作用：根据两个虚拟对象创建出补丁patch，描述改变的内容，将这个补丁用来更新DOM