# Merge Sort

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Combines merging and sorting of input data
- Most solutions use recursion
- Takes advantage of fact that arrays that have 0 or 1 elements are always sorted
- Works by breaking an array down into smaller sub-arrays until we get to single element arrays

- Big O:
  - Time: O(n + m)
  - Space: O(n + m)
  - O(n + m) becuase there are two input arrays into the merge sort function
  - n = size of first array
  - m = size of second array

```JS
[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3, 5, 4]  [7, 6, 1, 2]

[8, 3] [5, 4] [7, 6] [1, 2]

[8] [3] [5] [4] [7] [6] [1] [2]

[3, 8] [4, 5] [6, 7] [1, 2]

[3, 4, 5, 8] [1, 2, 6, 7]

[1, 2, 3, 4, 5, 6, 7, 8]
```

- Pseudocode:
  - Create empty/results array, look at smallest values of each input array
  - While still values not looked at:
    - If value in first array smaller than value in second array:
      - Push value of first array into results, move to next value in first array
    - If value in first array is larger than value in second array:
      - Push value in second array to results and move to next value in second array

Example:

### Merge Solution

```JS

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
        results.push(arr2[j]);
        j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

merge([1, 25, 50], [2, 17, 99, 100])
```

### Merge Sort Solution

```JS

function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2); // determine mid of array
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
mergeSort([10,24, 76, 73]);

```
