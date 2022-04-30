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
    let numsPlaced = 0
    let isSorted = false;
    let temp;
    while (!isSorted) {
        isSorted = true;
        let i = 0;
        for (let j = 1; j < arr.length - numsPlaced; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                isSorted = false;
            }
            i++;
        }
        numsPlaced++;
    }
    return arr;
}
```

## Selection Sort

- Find smallest number, place it at beginning of the array
- Swapping takes place once the array has been iterated through
- Swap the first element with the smallest
- Go to next element in array
- Less efficient than bubble sort

- Big O:
  - Time Complexity: O(n^2)

```JS
function selectionSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
```

## Insertion Sort

- Optimal when data is nearly sorted
- Builds up the sort by gradually creating a larger left half, which is always sorted
- Unsorted elements are sorted into the left half of the array
- Taking each element and inserting it in the correct spot in the left half of the array
