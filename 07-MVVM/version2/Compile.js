function Compile(el, vm) {
  // 1. 拿到app DOM根节点
  this.el = this.isElement(el) ? el : document.querySelector(el);
  this.vm = vm; 

  // 2. 将DOM根节点转移到内存中
  let fragment = this.nodeToFragment(this.el);

  // 3. 递归解析所有指令v- 以及模板 {{}}
  this.compileNode(fragment);

  // 4. 返回替换后的DOM节点
  this.el.appendChild(fragment);
}

// 判断是否为DOM元素
Compile.prototype.isElement = function (node) {
  return node.nodeType === 1;
};

// 判断是否为v-指令
Compile.prototype.isDirective = function (attrName) {
  return attrName.includes('v-');
};

// 将DOM元素移入到fragment
Compile.prototype.nodeToFragment = function (node) {
  let fragment = document.createDocumentFragment();
  let firstChild = node.firstChild;

  while (firstChild) {
    // appendChild具有删除特性，原位置节点会被删除
    fragment.appendChild(firstChild);
    firstChild = node.firstChild;
  }

  return fragment;
};

Compile.prototype.compileElement = function(node) {
  let attrs = Array.from(node.attributes);

  attrs.forEach(attr => {
    let attrName = attr.name;

    if (this.isDirective(attrName)) {
      let expr = attr.value;
      let [, type] = attrName.split('-');

      CompileUtil[type](node, this.vm, expr);
    }
  });
};

Compile.prototype.compileText = function(node) {
  let expr = node.textContent;
  let reg = /\{\{([^}]+)\}\}/g;

  if (reg.test(expr)) {
    CompileUtil['text'](node, this.vm, expr);
  }
};

// 解析所有节点的v- 和 {{}}
Compile.prototype.compileNode = function (node) {
  let childNodes = Array.from(node.childNodes);

  childNodes.forEach(child => {
    if (this.isElement(child)) {
      // 是元素节点
      this.compileElement(child);
      this.compileNode(child);
    } else {
      // 文本节点
      this.compileText(child);
    }
  });
};

let CompileUtil = {
  getVal: function(vm, expr) {
    expr = expr.split('.');
    return expr.reduce((prev, next) => {
      return prev[next];
    },vm.$data);
  },

  getTextVal: function(vm, expr) {
    let reg = /\{\{([^}]+)\}\}/g;
    return expr.replace(reg, (...args) => {
      console.log('args', args);
      return this.getVal(vm, args[1]);
    });
  },

  model: function(node, vm, expr) {
    let value = this.getVal(vm, expr);
    this.updater.modelUpdater(node, value);
  },

  text: function(node, vm, expr) {
    let value = this.getTextVal(vm, expr);
    this.updater.textUpdater(node, value);
  },

  updater: {
    modelUpdater: function(node, value) {
      node.value = value;
    },

    textUpdater: function(node, value) {
      node.textContent = value;
    }
  } 
}
