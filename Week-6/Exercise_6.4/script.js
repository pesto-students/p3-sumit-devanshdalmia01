const maxProfit = (prices) => {
	// Approach 1 O(n[square])
	// let profit = 0;
	// let maxProfit = 0;
	// if (prices.length === 1)
	// {
	//     return 0;
	// }
	// for (let i = 0; i < prices.length; i++)
	// {
	//     for (let j = i; j < prices.length; j++)
	//     {
	//         profit = prices[j] - prices[i];
	//         maxProfit = Math.max(profit, maxProfit);
	//         if (profit < 0)
	//         {
	//             profit = 0;
	//         }
	//     }
	// }
	// return maxProfit;

	// Approach 2 O(n[sqaure])
	// let profit = 0;
	// let maxProfit = 0;
	// if (prices.length === 1)
	// {
	//     return 0;
	// }
	// for (let i = 0; i < prices.length; i++)
	// {
	//     for (let j = i; j < prices.length; j++)
	//     {
	//         if (prices[i] < prices[j])
	//         {
	//             profit = prices[j] - prices[i];
	//             maxProfit = Math.max(profit, maxProfit);
	//         }
	//     }
	// }
	// return maxProfit;

	// Approach 3 O(n)
	let profit = 0;
	let minima = Number.POSITIVE_INFINITY;
	if (prices.length === 1) {
		return 0;
	}
	if (prices.length === 2) {
		return Math.max(prices[1] - prices[0], 0);
	}
	for (let i = 0; i < prices.length; i++) {
		minima = Math.min(minima, prices[i]);
		profit = Math.max(prices[i] - minima, profit);
	}
	return profit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
