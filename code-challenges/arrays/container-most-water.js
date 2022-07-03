// Container With Most Water

function mostWater(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

console.log(mostWater([1,8,9,2,5,4,8,3,7]));
