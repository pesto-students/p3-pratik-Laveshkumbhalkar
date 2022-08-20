class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
}
  
let root;

function maxDepth(node) {
    if (node == null) {
        return 0;
    } 
    else {
        
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        if (lDepth > rDepth) return lDepth + 1;
        else return rDepth + 1;
    }
}
  
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Max height of the tree is : " + maxDepth(root))


/*
OUTPUT

Max height of the tree is : 3

*/