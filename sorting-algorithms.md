# Sorting Algorithms

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Sorting is a common task
- Important to know what algorithms methods are using
- May want to implement your own sort rather than relying on one that is built-in
- Worth understanding the pros and cons

- .sort() without arguments for strings sorts alphabetically
- .sort() without arguments for numbers sorts by Unicode values
Can specify how the sort method should compare values:
- .sort((a, b) => return a - b)
  - Comparator looks at pairs of elements (a and b), determines sort order based on the return value
  - If it returns a negative number, a comes before b (a is smaller)
  - If it returns a positive number, a comes after b (b is smaller)
  - If if returns 0, a and b are the same

## Bubble Sort

```JS
function bubbleSort(arr) {
    
}
```

## Selection Sort

## Insertion Sort

- Optimal when data is nearly sorted
