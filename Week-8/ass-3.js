class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
  }
  
  function printLevelOrder(root) {
  
    let queue = []
    queue.push(root)
  
    while(queue.length != 0){
  
      let tempNode = queue.shift()
      console.log(tempNode.data)
  
      if(tempNode.left != null){
        queue.push(tempNode.left)
      }
      if(tempNode.right != null){
        queue.push(tempNode.right)
      }
  
    }
    
}
  
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(7)
root.right.left = new Node(6)
printLevelOrder(root)

/*
OUTPUT
1
2
3
4
5
6
7
*/