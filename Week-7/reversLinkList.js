// Reverse Link List

// reverse a linked list
var reverseLinkedList = function (linkedlist) {
  var node = linkedlist;
  var previous = null;

  while (node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous; // Change the list head !!!
};

const linkedlist = [1, 2, 3, 4, 5, 6];
const linkedlistAns = reverseLinkedList(linkedlist);

console.log(linkedlistAns);


// leetCode : https://leetcode.com/submissions/detail/763530218/

const reverseList = (head) => {
  let pre = null;
  let next = null;
  let current = head;

  while (current != null) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return current;
};

const rlist = [1, 2, 3, 4, 5, 6];
const rlistAns = reverseList(rlist);
console.log(rlistAns);
