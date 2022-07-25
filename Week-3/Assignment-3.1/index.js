// Memoize :- Memoizing in simple terms means memorizing or storing in memory. 
//            A memoized function is usually faster because if the function is 
//            called subsequently with the previous value(s), then instead of 
//            executing the function, we would be fetching the result from the cache.




// a simple function to add something
const add = (n) => (n + 10);
add(10);
// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {}; //initial cache object.
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached
console.log(newAdd(10)); // cached
console.log(newAdd(20)); // cached




