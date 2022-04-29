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
  - reassign pivot
- If pivot < value, search right half
  - change left pionter to be pivot + 1
  - reassign pivot

```JS
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let pivot = Math.floor((right + left) / 2);

    while (left <= right) {
        if (arr[pivot] === val) {
            return pivot};
        }
        // search right half
        if (arr[pivot] < val) {
            left = pivot + 1;
            pivot = Math.floor((right + left) / 2)
        }
        // search left half
        if (arr[pivot] > val) {
            right = pivot - 1;
            pivot = Math.floor((right + left) / 2)
        }
    }
    return -1;
}
```

## Naive String Search

- Search a string for a substring

```JS
function stringSearch(str, substr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if(substr[j] !== str[i + j]) break;
            if (j === substr.length -1) count++;
        }
    }
    return count;
}
```
