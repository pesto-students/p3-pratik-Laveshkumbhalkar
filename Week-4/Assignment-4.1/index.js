//  Promises are used to handle asynchronous operations in JavaScript.
//  They are easy to manage when dealing with multiple asynchronous operations where
//  callbacks can create callback hell leading to unmanageable code.

// A Promise has four states:
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

const getNumber = new Promise((resolve, reject) => {
  const randomNumber = parseInt(Math.random() * 100);
  setTimeout(() => {
    if (randomNumber % 5 === 0) {
      reject(`Reject : ${randomNumber}`);
    }
    resolve(`Resolve: ${randomNumber}`);
  }, 2000);
});

getNumber
  .then((data) => {
    console.log(data); // prints 'All things went well!'
  })
  .catch((error) => {
    console.log(error); // Promise3 rejected
  });
  
