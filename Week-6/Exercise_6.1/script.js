const maxSubArray = (nums) => {
	// O(n[cube]) Solution
    // let maxSum = Number.NEGATIVE_INFINITY;
    // if (nums.length == 1)
    // {
    //     return nums[0];
    // }
    // for (let i = 0; i < nums.length; i++)
    // {
    //     for (let j = i; j < nums.length; j++)
    //     {
    //         let sum = 0;
    //         for (let k = i; k <= j; k++)
    //         {
    //             sum += nums[k];
    //         }
    //         maxSum = max(sum, maxSum);
    //     }
    // }
    // return maxSum;

    // O(n[square])
    // let maxSum = Number.NEGATIVE_INFINITY;
    // if (nums.length == 1)
    // {
    //     return nums[0];
    // }
    // for (let i = 0; i < nums.length; i++)
    // {
    //     let sum = 0;
    //     for (let j = i; j < nums.length; j++)
    //     {
    //         sum += nums[j];
    //         maxSum = max(sum, maxSum);
    //     }
    // }
    // return maxSum;

    // O(n) Solution
	let sum = 0;
	let maxSum = Number.NEGATIVE_INFINITY;
	if (nums.length === 1) {
		return nums[0];
	}
	for (let i of nums) {
		sum += i;
		maxSum = Math.max(sum, maxSum);
		if (sum < 0) {
			sum = 0;
		}
	}
	return maxSum;
};
const nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));
// Ans - 23
