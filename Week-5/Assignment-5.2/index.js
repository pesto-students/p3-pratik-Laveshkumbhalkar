// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;

//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }

//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));

function vowel_list(char) {
  return "aeiouAEIOU".includes(char);
}

function vowel_count(str1) {
  const vowelMap = new Map();
  var count = 0;
  for (let char of str1) {
    let str = char;
    if (vowel_list(str)) {
      count++;
      if (vowelMap.has(str)) {
        vowelMap.set(str, vowelMap.get(str) + 1);
      } else {
        vowelMap.set(str, 1);
      }
    }
  }

  return vowelMap;
}

console.log(vowel_count("The quick A brown fox"));

// ans: 5