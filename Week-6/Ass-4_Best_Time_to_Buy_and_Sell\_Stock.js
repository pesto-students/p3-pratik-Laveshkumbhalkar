

const maxProfit = (prices) => {
	let profit = 0;

	let stockToBuy = prices[0];

	for (let i = 1; i < prices.length; i++) {
		if (stockToBuy > prices[i]) {
			stockToBuy = prices[i];
		}

		const currentProfit = prices[i] - stockToBuy;

		if (currentProfit > profit) {
			profit = currentProfit;
		}
	}

	return profit;
};

prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));

//Time complexity: O(N)