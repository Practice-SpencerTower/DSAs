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
