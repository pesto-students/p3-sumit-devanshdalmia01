const sortColors = (num) => {
	// Approach 1 O(2n)
	// let size = num.length;
	// let arr = [[], [], []];
	// for (let i = 0; i < size; i++) {
	// 	if (num[i] === 0) {
	// 		arr[0].push(num[i]);
	// 	}
	// 	if (num[i] === 1) {
	// 		arr[1].push(num[i]);
	// 	}
	// 	if (num[i] === 2) {
	// 		arr[2].push(num[i]);
	// 	}
	// }
	// let nums = [];
	// for (let i = 0; i < arr[0].length; i++) {
	// 	nums.push(arr[0][i]);
	// }
	// for (let i = 0; i < arr[1].length; i++) {
	// 	nums.push(arr[1][i]);
	// }
	// for (let i = 0; i < arr[2].length; i++) {
	// 	nums.push(arr[2][i]);
	// }
	// return nums;

	// Approach 2 O(2n)
	// let size = num.length;
	// let j = 0,
	// 	k = 0,
	// 	l = 0;
	// for (let i = 0; i < size; i++) {
	// 	if (num[i] === 0) {
	// 		j++;
	// 	}
	// 	if (num[i] === 1) {
	// 		k++;
	// 	}
	// 	if (num[i] === 2) {
	// 		l++;
	// 	}
	// }
	// let nums = [];
	// for (let i = 0; i < j; i++) {
	// 	nums.push(0);
	// }
	// for (let i = 0; i < k; i++) {
	// 	nums.push(1);
	// }
	// for (let i = 0; i < l; i++) {
	// 	nums.push(2);
	// }
	// return nums;

	// Approach 3 O(n) -> Dutch National Flag Algorithm
	let low = 0,
		mid = 0,
		high = num.length - 1;
	while (mid <= high) {
		if (num[mid] === 0) {
			[num[low], num[mid]] = [num[mid], num[low]];
			low++;
			mid++;
		} else if (num[mid] === 1) {
			mid++;
		} else if (num[mid] === 2) {
			[num[high], num[mid]] = [num[mid], num[high]];
			high--;
		}
	}
	return num;
};
const nums = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0];
console.log(sortColors(nums));
