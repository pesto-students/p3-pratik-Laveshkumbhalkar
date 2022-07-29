
const maxSubArraySum = (a, n) =>
{
	let maxint = Math.pow(2, 53)
    // console.log(-maxint-1);
	let max_so_far = -maxint - 1
	let max_ending_here = 0
	
	for (let i = 0; i < n; i++)
	{
		max_ending_here = max_ending_here + a[i]
        // console.log( max_ending_here);w

		if (max_so_far < max_ending_here)
        {
			max_so_far = max_ending_here
        }

		if (max_ending_here < 0)
        {
			max_ending_here = 0
        }
	}
	return max_so_far
}

let a = [ 2, 1, -3, 4, -1, 2, 1, -5, 4];


console.log(maxSubArraySum(a, a.length));



// Time Complexity: O(n)
// Space Complexity: O(1)

//https://leetcode.com/submissions/detail/760010558/

// TESTING


