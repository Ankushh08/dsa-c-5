class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTreeNode(10);
const leftChild = new BinaryTreeNode(20);
// const rightChild = new BinaryTreeNode(30);

root.left = leftChild;

// root.right = rightChild;

const lc2 = new BinaryTreeNode(40);
leftChild.left = lc2;

// const rc2 = new BinaryTreeNode(50);
// rc2.left = new BinaryTreeNode(100);
// rightChild.right = rc2;

// // Pre order: N L R
// function preOrder(root) {
//   if (!root) return;

//   console.log(root.data);

//   preOrder(root.left);
//   preOrder(root.right);
// }

// // Post: L R N
// function post(root) {
//   if (!root) return;

//   post(root.left);
//   post(root.right);

//   console.log(root.data);
// }

// // Inorder: L N R
// function inOrder(root) {
//   if (!root) return;

//   inOrder(root.left);
//   console.log(root.data);

//   inOrder(root.right);
// }

// inOrder(root);
const maxDepth = (root) => {
  if (root === null) return 0;

  const l = maxDepth(root.left);
  const r = maxDepth(root.right);
  return Math.max(l, r) + 1;
};

let diameter = 0;

var diameterOfBinaryTreeHelper = function (root) {
  if (!root) return;
  if (root.left == null && root.right == null) {
    diameter = Math.max(0, diameter);
    return;
  }
  // console.log(root.data);
  const leftDepth = maxDepth(root.left);
  const rigthDepth = maxDepth(root.right);
  // console.log(leftDepth, rigthDepth, root.data);
  diameter = Math.max(leftDepth + rigthDepth, diameter);

  diameterOfBinaryTreeHelper(root.left);
  diameterOfBinaryTreeHelper(root.right);
};

var diameterOfBinaryTree = function (root) {
  diameter = 0;
  diameterOfBinaryTreeHelper(root);
  return diameter;
  // console.log(diameter);
};

console.log(root);
diameterOfBinaryTree(root);
