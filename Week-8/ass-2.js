class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
const utilBST = (node, min, max) => {
    if (node == null) {
        return true;
    }

    if (node.value < min || node.value > max) {
        return false;
    }

    return (
        utilBST(node.left, min, node.value - 1) &&
        utilBST(node.right, node.value + 1, max)
    );
};
const isBST = (root) => {
    return utilBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
};

let root = new Node(9);
root.left = new Node(4);
root.right = new Node(12);
root.left.left = new Node(3);
root.left.right = new Node(6);

if (isBST(root)) {
console.log("Valid BST");
} else {
console.log("Not a valid BST");
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(9);
root1.left.left = new Node(3);
root1.left.right = new Node(6);

if (isBST(root1)) {
console.log("Valid BST");
} else {
console.log("Not a valid BST");
}

/*
OUTPUT

--> Valid BST
--> Not a valid BST

*/