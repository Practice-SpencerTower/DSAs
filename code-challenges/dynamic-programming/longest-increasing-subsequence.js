// Longest Increasing Subsequence

function lengthOfLIS(nums) {
	// cache repeated work
	const arr = new Array(nums.length).fill(1);  
	
	for (let i = 1; i < nums.length; i++){
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				arr[i] = Math.max(arr[i], arr[j] + 1);
}
}
}
return Math.max(...arr);
}