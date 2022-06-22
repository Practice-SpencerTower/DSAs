# Quick Sort

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Similar to merge sort in that it utilizes the fact that arrays with 0 or 1 elements are already sorted
- Selects a single element to be the "pivot", used to find the index where the pivot should be in the sorted array
- Once pivot is placed, quick sort can be applied to either side of the pivot
- Each side of the pivot is then sorted
  - Elements less than the pivot are placed to the left
  - Elements that are greater than the pivot are placed to the right
- Once the pivot is placed, the same operations are then performed with elements to the left and of the pivot
  - Pick pivot, find place in array, sort the left and right sides of pivot
- Easiest way to solve is through recursion

