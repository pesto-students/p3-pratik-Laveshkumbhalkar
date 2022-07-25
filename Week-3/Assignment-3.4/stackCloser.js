
// function createStack() {
//     return {
//         items:[],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5

// stack.items;// => [10]
// stack.items= [10,100,1000];// Encapsulation broken!

// The stack works as expected, but with one small problem. Anyone can modify items array directly because stack.items property is exposed.

// That's an issue since it breaks the encapsulation of the stack: only push() and pop() methods should be public, but stack.items or any other details shouldn't be accessible.

// Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope:



function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  console.log(stack.pop()); // => 5

  console.log(stack.items); // => undefined

// items has been moved to a variable inside createStack() scope.

// Thanks to this change, from the outside of createStack() scope, there is no way to access or modify items array. items is now a private variable, and the stack is encapsulated: only push() and pop() method are public.

// push() and pop() methods, being closures, capture items variable from createStack() function scope.