

const  spiralPrint = (m, n, arr)  => {
	let i, k = 0, l = 0;

	while (k < m && l < n) {
		// print the first row from the remaining rows
		for (i = l; i < n; ++i) {
			console.log(arr[k][i] + ' ');
		}
		k++;

		// print the last column from the remaining columns
		for (i = k; i < m; ++i) {
			console.log(arr[i][n - 1] + ' ');
		}
		n--;

		// print the last row from the remaining rows
		if (k < m) {
			for (i = n - 1; i >= l; --i) {
				console.log(arr[m - 1][i] + ' ');
			}
			m--;
		}

		// print the first column from the remaining columns
		if (l < n) {
			for (i = m - 1; i >= k; --i) {
				console.log(arr[i][l] + ' ');
			}
			l++;
		}
	}
}

// function call
let arr = [[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]];
let rows = arr.length;
console.log(rows)
let columns = arr[0].length;

spiralPrint(rows, columns, arr);


// Time Complexity: O(n^2)
// Space Complexity: O(1) 

