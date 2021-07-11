const treeify = require('treeify');

function print(x) {
  console.log(x);
}

class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  append(val) {
    if (!this.tail) {
      this.head = this.tail = new Node(val);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(val);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(val) {
    if (!this.tail) {
      this.head = this.tail = new Node(val);
    } else {
      let oldHead = this.head;
      this.head = new Node(val);
      this.head.next = oldHead;
      oldHead.prev = this.head;
    }
  }

  deleteHead() {
    if (!this.tail) {
      return null;
    } else {
      let removedHead = this.head;

      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      print(removedHead.val);
      return removedHead.val;
    }
  }

  deleteTail() {
    if (!this.tail) {
      print('null');
      return null;
    } else {
      let removedTail = this.tail;

      if (this.tail === this.head) {
        this.tail = this.head = null;
      } else {
        this.tail = this.tail.prev;

        this.tail.next = null;
      }
      print(removedTail.val);

      return removedTail.val;
    }
  }

  search(val) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    print('null');
    return null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.prepend(-1);

list.search(1);

list.deleteHead();
list.deleteTail();
list.deleteHead();
list.deleteTail();
list.deleteTail();
list.deleteTail();
