// House Robber

// O(n) Time | O(n) Space
function houseRobber(nums) {
	if (nums.length === 1) return nums[0];
	const maxProfit = new Array(nums.length).fill(0);
	maxProfit[0] = nums[0];
	maxProfit[1] = Math.max(nums[0], nums[1]);
	// loop through nums, calculate max profit up to current house, push to maxProfit array
	for (let i = 2; i < nums.length; i++) {
		maxProfit[i] = Math.max(maxProfit[i - 1], maxProfit[i - 2] + nums[i]);
}
return Math.max(...maxProfit);
}

// O(n) Time | O(1) Space
function houseRobber(nums) {
	if (nums.length === 1) return nums[0];
	// loop through nums, calculate max profit up to current house
	let nonAdjHouse = nums[0];  // n - 2
	let adjHouse = Math.max(nums[0], nums[1]);  // n - 1

	for (let i = 2; i < nums.length; i++) {
		let currProfit = Math.max(adjHouse, nonAdjHouse + nums[i]);
		nonAdjHouse = adjHouse;
		adjHouse = currProfit;
}
return adjHouse;
}
