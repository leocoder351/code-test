// 用代码实现二叉搜索树，并写出相关方法查找最小值
function BinarySearchTree() {
  function Node(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  var root = null;

  this.insert = function (key) {
    var newNode = new Node(key, null, null);  // 定义一个新节点

    function insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (newNode.key > node.key) {
          if (node.right === null) {
            node.right = newNode;
          } else {
            insertNode(node.right, newNode);
          }
        }
      }
    }

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  // 获取BST树的最小值
  this.min = function () {
    var miniNode = function (node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }

        return node.key;
      }

      return null;
    }

    return miniNode(root);
  }

  // 获取BST树的最大值
  this.max = function () {
    var maxNode = function (node) {
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }

        return node.key;
      }

      return null;
    }

    return maxNode(root);
  };
}

