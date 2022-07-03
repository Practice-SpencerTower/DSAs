// Find Minimum in Rotated Sorted Array

const findMin = nums => {
    let min = nums[0];
    let left = 0
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] < nums[right]) {
            min = Math.min(min, nums[left]);
            break;
        }
        let mid = Math.floor((left + right) / 2);
        min = Math.min(min, nums[mid]);
        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return min;
};

console.log(findMin([3,4,5,1,2]));