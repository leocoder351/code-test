// 实现单向链表的添加和删除操作

function SingleChain () {
  function Node (element) {
    this.element = element;
    this.next = null;
  }

  this.head = null;

  this.find = function (item) {
    let currentNode = this.head;

    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
  }

  this.insert = function (newElement, item) {
    let newNode = new Node(element);

  }
}