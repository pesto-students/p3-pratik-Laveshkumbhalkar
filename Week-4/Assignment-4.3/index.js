

var Fib = {
  [Symbol.iterator]() {
    var n1 = 1,
      n2 = 1;

    return {
      // make the iterator an iterable
      [Symbol.iterator]() {
        return this;
      },

      next() {
        var current = n2;
        n2 = n1;
        n1 = n1 + current;
        return { value: current, done: false };
      },

      return(v) {
        console.log("Fibonacci sequence abandoned.");
        return { value: v, done: true };
      },
    };
  },
};

console.log("Fibonacci Series:");
for (var v of Fib) {
  console.log(v);

  if (v > 50) break;
} 

// Answer::
// Fibonacci Series:
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// Fibonacci sequence abandoned.




// simple logic

// const number = 100;
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1
// nextTerm = n1 + n2;
// while (nextTerm <= number) {
//     // print the next term
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }


