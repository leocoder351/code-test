class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;

    if (this.el) {
      // 如果这个元素能获取到，才开始编译
      // 1. 先把这些真实的DOM移入到内存中 fragment
      let fragment = this.node2fragment(this.el);

      // 2. 编译 => 提取想要的元素节点 v-model 和文本节点 {{}}
      this.compile(fragment);

      // 3. 把编译好的fragment再塞回到页面里去
      this.el.appendChild(fragment);
    }
  }

  // 辅助方法
  isElementNode(node) {
    return node.nodeType === 1;
  }

  isDirective(name) {
    return name.includes('v-');
  }

  // 核心方法
  node2fragment(el) {  // 需要将el中的内容全部放到内存中去
    // 文档碎片，内存中的DOM节点
    let fragment = document.createDocumentFragment();
    let firstChild;

    while (firstChild = el.firstChild) {
      // appendChild具有转移特性，会把原来的移除
      fragment.appendChild(firstChild);
    }

    // 返回内存中的节点
    return fragment;
  }

  compileElement(node) {
    // 带v-model
    let attrs = node.attributes;    // 取出当前节点的属性
    Array.from(attrs).forEach(attr => {
      // 判断属性名字是不是包含v-指令
      let attrName = attr.name;

      if (this.isDirective(attrName)) {
        // 取到对应的值放到节点中
        let expr = attr.value;
        let [, type] = attrName.split('-');

        // node this.vm.$data expr
        CompileUtil[type](node, this.vm, expr);

        // todo......
      }
    });
    // console.log(attrs);
    // console.log(Array.from(attrs));
  }

  compileText(node) {
    // 带{{}}
    let expr = node.textContent;    // 取文本中的内容
    let reg = /\{\{([^}]+)\}\}/g;

    if (reg.test(expr)) {
      // node this.vm.$data text
      CompileUtil['text'](node, this.vm, expr);

      // todo......
    }
  }

  compile(fragment) {
    // 需要递归
    let childNodes = fragment.childNodes;   // children不包括text节点，childNodes包括text文本节点

    Array.from(childNodes).forEach(node => {
      if (this.isElementNode(node)) {
        // 是元素节点
        // 这里需要编译元素
        this.compileElement(node);
        this.compile(node);
      } else {
        // 是文本节点
        this.compileText(node);
      }
    })
  }
}

CompileUtil = {
  getVal(vm, expr) {    // 获取实例上对应的数据
    expr = expr.split('.');
    return expr.reduce((prev, next) => {
      return prev[next];
    }, vm.$data);
  },

  getTextVal(vm, expr) {    // 获取编译文本后的结果
    return expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
      return this.getVal(vm, args[1]);
    });
  },

  text(node, vm, expr) {    // v-text
    let updateFn = this.updater['textUpdater'];
    // 处理 "{{a}} {{b}}" 情况
    expr.replace(/\{\{([^}]+)\}\}/g, (...args) => {
      new Watcher(vm, args[1], (newValue) => {
        // 如果数据变化了，文本节点需要重新获取依赖的属性更新文本中的内容
        updateFn && updateFn(node, this.getTextVal(vm, expr));
      });
    });

    updateFn && updateFn(node, this.getTextVal(vm, expr));
  },

  setVal(vm, expr, value) {
    expr = expr.split('.');
    return expr.reduce((prev, next, currentIndex) => {
      if (currentIndex === expr.length - 1) {
        return prev[next] = value;
      }
      return prev[next];
    }, vm.$data);
  },

  model(node, vm, expr) {   // v-model
    let updateFn = this.updater['modelUpdater'];
    // 这里应该加一个监控，数据变化了，应该调用这个watch的callback
    new Watcher(vm, expr, (newValue) => {
      // 当值变化后会调用cb，将新值传递过来
      updateFn && updateFn(node, newValue);
    });

    node.addEventListener('input', (e) => {
      let newValue = e.target.value;
      this.setVal(vm, expr, newValue);
    });

    updateFn && updateFn(node, this.getVal(vm, expr));
  },

  html(node, vm, expr) {    // v-html

  },

  updater: {
    // 文本更新
    textUpdater(node, value) {
      node.textContent = value;
    },

    // 输入框更新
    modelUpdater(node, value) {
      node.value = value;
    }
  }
};