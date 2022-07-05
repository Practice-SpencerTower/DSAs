// Top K Frequent Elements

function topKFrequent(nums, k) {
    const countMap = {};
    const freq = new Array(nums.length + 1);
    
    for (let num of nums) {
        if (countMap[num]) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    }
    
}