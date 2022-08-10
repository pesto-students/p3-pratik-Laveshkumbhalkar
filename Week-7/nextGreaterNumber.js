

function nextGreaterElement(arr,n){
    var next, i, j;
        for (i = 0; i < n; i++) 
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] < arr[j]) 
            {
              next = arr[j];
              break;
            }
          }
          console.log(next);
        }
  }
  
  let arr2 = [1,2,3,4,3]
  let number = arr2.length
  nextGreaterElement(arr2, number);
//   console.log(result);