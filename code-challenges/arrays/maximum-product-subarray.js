// Maximum Product Subarray

function maxProduct(nums) {
    let result = Math.max(...nums);
    let max = 1;
    let min = 1;
    
    for (let num of nums) {
        if (num === 0) {
            max = 1;
            min = 1;
            continue;
        }
        let temp = max;
        max = Math.max(num * max, num * min, num);
        min = Math.min(num * temp, num * min, num);
        result = Math.max(result, max);
    }
    return result;
};