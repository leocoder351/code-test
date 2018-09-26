// 规则
// 1. 当节点类型相同时，去看一下属性是否相同，产生一个属性的补丁包 
//    {type: 'ul', attrs: {class: 'list-group'}}
//    {type: 'REMOVE', index: xxx} 新的DOM节点不存在
//    {type: 'REPLACE', newNode: xxx} 节点类型不相同，直接采用替换模式
//    {type: 'TEXT', text: 1} 文本的变化

function diff(oldTree, newTree) {
  let patches = {};
  let index = 0;

  // 递归树，比较后的结果放到补丁包中
  walk(oldTree, newTree, index, patches);

  return patches;
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];   // 有可能是undefined
    }
  }

  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      // 老节点中没有的属性
      patch[key] = newAttrs[key];
    }
  }

  return patch;
}

function diffChildren(oldChildren, newChildren, patches) {
  // 比较老的第一个和新的第一个
  oldChildren.forEach((child, idx) => {
    // 索引不应该是index了
    // index每次传递给walk时，index是递增的
    walk(child, newChildren[idx], ++Index, patches);
  });
}

function isString(node) {
  return Object.prototype.toString.call(node) === '[object String]';
}

const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'REPLACE';
let Index = 0;

function walk(oldNode, newNode, index, patches) {
  let currentPatch = [];
  
  if (!newNode) {
    currentPatch.push({type: REMOVE, index: index});
  } else if (isString(oldNode) && isString(newNode)) {   // 判断文本是否变化
    if (oldNode !== newNode) {
      currentPatch.push({type: TEXT, text: newNode});
    }
  } else if (oldNode.type === newNode.type) {
    // 比较属性是否有更改
    let attrs = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({type: ATTRS, attrs})
    }

    // 如果有子节点，遍历子节点
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    // 说明节点被替换了
    currentPatch.push({type: REPLACE, newNode: newNode});
  }

  if (currentPatch.length > 0) {    // 当前元素确实有补丁
    // 将元素和补丁对应起来，放到大补丁包中
    patches[index] = currentPatch;
    console.log(patches);
  }
}

export default diff;