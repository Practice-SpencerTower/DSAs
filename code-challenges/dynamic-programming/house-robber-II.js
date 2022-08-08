// House Robber II

function houseRobberII(nums) {
    if (nums.length === 1) return nums[0];
    const nums1 = nums.slice(0, nums.length - 1);
    const nums2 = nums.slice(1, nums.length);
    return Math.max(robHouses(nums1), robHouses(nums2));
}

function robHouses(nums) {
    let nonAdj = 0;
    let adj = 0;

    for (const num of nums) {
        let currProfit = Math.max(nonAdj + num, adj);
        nonAdj = adj;
        adj = currProfit;
    }
    return adj;
}