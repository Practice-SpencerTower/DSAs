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
    // using object
    const obj = {};
    // for diff of number and target
    let diff;
    // make object: key = num, value = index
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }
    // check if difference between target and current value is in object
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (obj[diff] && i !== obj[diff]) {
            return [i, obj[diff]];
        }
    }
}
