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
