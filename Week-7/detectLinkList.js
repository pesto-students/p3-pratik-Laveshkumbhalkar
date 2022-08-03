


var hasCycle = function(head) {
    
    // initial with fast and slow pointers with head
    let slow = head
    let fast = head
    //traverse linked list
    while(fast && fast.next){
        // fast moves by two
        fast = fast.next.next
        // slow moves by one
        slow = slow.next
        // two pointers meet, cycle
        if(fast === slow){
            return true
        }
    }
    
    return false
    
};


let head = [3,2,0,-4];

let detectList = hasCycle(head);

console.log(detectList);

//https://leetcode.com/submissions/detail/763559674/