// 虚拟DOM元素的类
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

// 设置属性
function setAttr(node, key, value) {
  switch (key) {
    case 'value':
      if (node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase() === 'TEXTAREA') {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
  
    case 'style':
      node.style.cssText = value;
      break;

    default:
      node.setAttribute(key, value);
      break;
  }
}

// 返回虚拟节点的 返回object
function createElement(type, props, children) {
  return new Element(type, props, children);
}

// render方法可以将Virtual DOM转换为真实DOM
function render(eleObj) {
  let el = document.createElement(eleObj.type);

  for (let key in eleObj.props) {
    // 设置属性的方法
    if (!eleObj.props.hasOwnProperty(key)) return ;

    setAttr(el, key, eleObj.props[key]);
  }

  // 遍历children 如果是虚拟DOM，继续循环 直到文本节点
  eleObj.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child);
    el.appendChild(child);
  });

  return el;
}

function renderDom(el, target) {
  target.appendChild(el);
}

export { createElement, render, renderDom, Element };