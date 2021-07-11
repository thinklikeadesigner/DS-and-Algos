const treeify = require('treeify');

function print(x) {
  console.log(x);
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(val) {
    this.root = new Node(val);
    this.count = 1;
  }
  size() {
    return this.count;
  }

  insert(val) {
    this.count++;
    let newNode = new Node(val);

    const searchTree = (node) => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }

      if (val > node.val) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.val;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.val;
  }

  contains(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return true;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);

      result.push(node.val);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  dfsPreOrder() {
    let result = [];
    const traverse = (node) => {
      result.push(node.val);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  dfsPostOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      result.push(node.val);
    };
    traverse(this.root);

    return result;
  }

  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    print(`bfs ${result}`);
    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

bst.dfsInOrder();

bst.dfsPreOrder();

bst.dfsPostOrder();

bst.bfs();

print(treeify.asTree(bst, true))