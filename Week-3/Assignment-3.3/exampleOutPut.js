//closer()

// A Closer is the combination of a function and the lexical env. within which that function was declared.
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.
// A function can access all variables defined inside and out side the function, 
// But a function can also access variables defined outside the function

//Encapsulation

//The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data.    



function createIncrement() { 
    let count = 0; 
    function increment() { 
        count++; 
    } 
    
      function log() { 
        let message = `Count is ${count}`;  // message put inside the log function 
        console.log(message); 
    } 
    
    return [increment, log]; 
} 

const [increment, log] = createIncrement(); 

increment(); 
increment(); 
increment(); 
log();// What is logged?


//Describe Output

// :-> Answer of above code 'Count is 0' is written to the console
// :-> Function increment() was called 3 times, eventually increasing count to a value of 3.
// :-> Variable message exists within the function createIncrement(). Its initial value 'Count is 0'… However, even if the variable count has been increased several times, the variable message always matters 'Count is 0'
// :-> log() inner function  Is a closure that grabs the message variable from scope createIncrement() console.log(message) writes down 'Count is 0' to the console.

// .... Accurate answer ...
// for log function to return need incremented value we need to put message variable in the body of log function
// so on every (log) function call a new message variable will be created with latest modification of count variable from outer scope.
