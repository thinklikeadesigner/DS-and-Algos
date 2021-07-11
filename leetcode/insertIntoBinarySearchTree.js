function print(x){console.log(x)}

// traverse the tree, and if the value is greater, go right, less go left

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
    
}

//recursive solution
var recursiveInsertIntoBST = function (root, val) {
  if (val >= root.val) {
      
    if (root.right) {

      insertIntoBST(root.right, val);
    } else {
      root.right = new TreeNode(val);
    }
  } else {
    if (root.left) {
      insertIntoBST(root.left, val);
    } else {
      if (root.left) {
        insertIntoBST(root.left, val);
      } else {
        root.left = new TreeNode(val);
      }
    }
  }

  return root;
};

print(recursiveInsertIntoBST([4,2,7,1,3], 0))

// space O(1)
// time O(n)

var iterativeInsertIntoBST = function(root, val) {
let node = root;

while(1) {
    if (val >= node.val) {
        if (node.right) {
            node = node.right;
            continue;
        } else {
            node.right = new TreeNode(val);
            break;
        }

    }
    else {
        if (node.left) {
            node = node.left;
            continue;
        } else {
            node.left = new TreeNode(val)
            break;
        }
    }
}

return root;
}

print(iterativeInsertIntoBST([4,2,7,1,3], 0))