# Merge Sort

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Combines merging and sorting the data
- Takes advantage of fact that arrays are of 0 or 1 elements are always sorted
- Works by breaking an array down into smaller sub-arrays until we get to single element arrays

- Big O:
  - Time: O(n + m)
  - Space: O(n + m)

```JS
[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3, 5, 4]  [7, 6, 1, 2]

[8, 3] [5, 4] [7, 6] [1, 2]

[8] [3] [5] [4] [7] [6] [1] [2]

[3, 8] [4, 5] [6, 7] [1, 2]

[3, 4, 5, 8] [1, 2, 6, 7]

[1, 2, 3, 4, 5, 6, 7, 8]
```