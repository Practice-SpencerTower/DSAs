# Find Minimum in Rotated Sorted Array

- Use modified binary search
- Left pointer, right pointer
- If nums[left] < nums[right], the range is in ascending order and nums[left] is the smallest value in the array
- When the array is rotated, the left most value will be larger than the right most value, so if the left val is less than the right, the values are ascending throughout and the left value is the minimum

