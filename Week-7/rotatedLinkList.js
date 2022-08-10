


var rotateRight = function(head, k) {
    var count = 1;
     var last = head;
     var now = head;
 
     if (!head || !head.next) return head;
 
     while (last.next) {
         last = last.next;
         count++;
     }
 
     k %= count;
 
     if (k === 0) return head;
 
     while (k < count - 1) {
         now = now.next;
         k++;
     }
 
     last.next = head;
     head = now.next;
     now.next = null;
 
     return head;
 };

let list = [1,2,3,4,5];
let k = 3;
let rotatedListAns = rotateRight(list, k);

console.log(rotatedListAns);


// https://leetcode.com/submissions/detail/763545809/