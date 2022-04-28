# Searching Algorithms

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

## Linear Search

- Look at every element an check if it is what we are looking for
- Useful for unordered arrays
- JS methods that use linear search: indexOf, includes, find, findIndex

## Binary Search

- Only works on sorted arrays
- Pick a pivot point in the middle of the array
- Set left and right pointers to first and last indices of array
- If pivot > value, search left half
  - change right pionter to be pivot - 1
- If pivot < value, search right half
  - change left pionter to be pivot + 1

```JS
    function binarySearch(arr, val) {
        let pivot = Math.floor((arr.length -1)/2);
        let left = 0;
        let right = arr.length -1;
        
        while (true) {
            if (arr[pivot] === val) {
                return pivot;
            }
            // if not found
            if (left === right && left === pivot) {
                return;
            }
            // search right half
            if (arr[pivot] < val) {
                left = pivot + 1;
                pivot = Math.floor((right + left)/2)
            }
            // search left half
            if (arr[pivot] > val) {
                right = pivot - 1;
                pivot = Math.floor((right + left)/2)
            }
        }
    }
```
