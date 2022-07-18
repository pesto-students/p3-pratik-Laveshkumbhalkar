// function hasDuplicates(array) {
//     var valuesSoFar = Object.create(null);
//     for (var i = 0; i < array.length; ++i) {
//         var value = array[i];
//         if (value in valuesSoFar) {
//             return true;
//         }
//         valuesSoFar[value] = true;
//     }
//     return false;
// }

// console.log(hasDuplicates([1,1,3]));



const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

let result = hasDuplicate([1, 5, -1, 4]); // false
console.log(result);

function hasDupes(arr) {
  const set = new Set(arr);
  if (set.size === arr.length) {
    return false;
  }
  return true;
}

result = hasDupes([1, 2, 3, 4, 5, 6]); // false
console.log(result);

result = hasDupes([1, 1, 3, 1, 2, 3]); // true
console.log(result);