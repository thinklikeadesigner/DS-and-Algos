const treeify = require('treeify');

function print(x) {
    console.log(x)
}
// linked list is a degenerate binary tree

/*
   20 
 17   23
4 18 22 29

*/

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
      // print(this.count)
    return this.count;
  }

  insert(val) {
    this.count++;
    let newNode = new Node(val);

    const searchTree = (node) => {
      // if val < node.val, go left
      if (val < node.val) {
        // if no left child , append val
        if (!node.left) {
          node.left = newNode;
        }
        // else, look left again
        else {
          searchTree(node.left);
        }
      }

      // if val > node.val, go right
      if (val > node.val) {
        // if no right child , append val
        if (!node.right) {
          node.right = newNode;
        }
        // else, look right again
        else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    // set current node to left child until no child nodes left
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    // print(currentNode.val)
    return currentNode.val;
  }

  max() {
    let currentNode = this.root;
    // set current node to right child until no child nodes right
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    // print(currentNode.val)
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

  // DEPTH FIRST SEARCH (branch by branch, uses stack)

  // NLR PREORDER
  // LNR INORDER
  // LRN POSTORDER

  /*
  
  IN ORDER

  left, root (IN), right

  RESULT
  2, 3, 12, 15, 28, 36, 39

  */

  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // capture root node value
      result.push(node.val);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root)
    // print(result)
    return result;
  }

  /*
  
  PRE ORDER

  root (PRE), left, right

  RESULT
15, 3, 2, 12, 36, 28, 39

  */

  dfsPreOrder() {
    let result = [];
    const traverse = (node) => {
      // capture root node value
      result.push(node.val);

      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root)
// print(result)
    return result;
  }

  /*
  
 POST ORDER

left node, right node, root (POST) node

  RESULT
2, 12, 3, 28, 39, 15

  */

  dfsPostOrder() {
    let result = [];
    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);
      // if right child exists, go right again
      if (node.right) traverse(node.right);

      // capture root node value
      result.push(node.val);
    };
    traverse(this.root)
// print(result)
    return result;
  }

  // BREADTH FIRST SEARCH (level by level, uses queue)

  /*

RESULT 

15, 3, 36, 2, 12, 28, 39

*/

  bfs() {
    let result = [];
    let queue = [];

    // push the root node into the queue to start
queue.push(this.root)

// while there is stuff in the queue
    while (queue.length) {
        // takes the first item out of the queue
      let currentNode = queue.shift();
// adds first item from queue to the result
      result.push(currentNode.val);

      // if the current node has left children, push the left child onto the queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      // if the current node has right children, push the right child onto the queue
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    print(`bfs ${result}`)
    return result;
  }
}

const bst = new BST(26)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)


// print(bst)
bst.size()
// RESULT
// 2, 3,12,15,28,36,39
bst.dfsInOrder()
// RESULT
// 15, 3,2,12,36,28,39
bst.dfsPreOrder()
// RESULT
// 2,12,3,28,39,36,15
bst.dfsPostOrder()


// RESULT 

// 15, 3, 36, 2, 12, 28, 39
bst.bfs()

// const treeify = require('treeify');

print(treeify.asTree(bst, true))