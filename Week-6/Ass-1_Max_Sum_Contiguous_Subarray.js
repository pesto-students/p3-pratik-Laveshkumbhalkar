

//Maximum Subarray


const maxSubArray = (list) => {

	const len = list.length;
	let max = list[0];
	let min = 0;
	let sum = 0;
	for (let i = 0; i < len; i++) {
	  sum += list[i];
	  console.log(sum);
	  if (sum - min > max) max = sum - min;
	  if (sum < min) {
		min = sum;
	  }
	}
  
	return max;
  
  }
  
  const array = [-2,1,-3,4,-1,2,1,-5,4];
  
  const lSubArray = maxSubArray(array);
  
  
  console.log(lSubArray); //6