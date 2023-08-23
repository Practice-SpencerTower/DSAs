// Two Number Sum - AlgoExpert

function twoNumberSum(array, targetSum) {
    // get difference between curr num and target, check if diff in set
    // if in set return the two nums in an array
    // if not, add curr num to set
    const numSet = new Set();
    for (let i = 0; i < array.length; i++) {
        const currNum = array[i];
        const diff = targetSum - currNum;
        if (numSet.has(diff)) return [diff, currNum];
        numSet.add(currNum);
    }
    return [];
}

function twoSum(nums, target) {
    // using an object
    const numObj = {};
    let diff;
    // find difference of current element and target
    // check if difference in object
    // make sure not same index as current element
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (diff in numObj && numObj[diff] !== i) {
            return [i, numObj[diff]];
        }
        // add current element to object, key = element, value = index
        numObj[nums[i]] = i;
    }
}
