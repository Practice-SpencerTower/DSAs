# Problem Soving Patterns

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Know where you are going before you start typing code
- Simplify the problem, solve one part of it, then solve more
- Look back and refactor

- Approaching new problems:
  - Devise a plan
  - Master common problem solving patterns
- May help for 1/10 or 1/5 problems

## Frequency Counter

- Example 1:
  - Given two arrays of integers
  - Does array 2 contain the squares of the integers in array 1?
- Solution:
  - Use two objects to count the frequency of integers in each list
    - `frequencyConter1[val] = (frequencyCounter1[val] || 0) + 1`
  - Iterate over each array once
    - Two separate loops
  - Check if the square of each key of object 1 is present in the keys of object 2
    - If not, return false
  - Check if correspoinding keys of both objects have the same frequency count
    - If not, return false

```JS
function containsSquares(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}
```

- Example 2:
  - Given two strings
  - Are the strings anagrams?
    - Do they consist of the same letters
  
- Solution:
  - If length of strings not the same, return false
  - Count frequency of letters in

```JS
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let i = 0; i < str1.length; i++) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
    }
    for (let i = 0; i < str2.length; i++) {
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
```

## Multiple Pointers

- Creating poiners/values that correspond to an index position
- Move towards the beginning, end, or middle, depending on a certain condition
- Very efficient for solving problems with minimal space complexity

Example 1: Two Pointers Starting on Opposite Ends

- Write a function called sumZero:
  - Accepts a sorted array of integers
  - The function should find the first pair where the sum is 0
  - Return an array that includes both values that sum to zero of undefined if a pair does not exist

Solution:

```JS
function sumZero(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}
```

- Big O:
  - Time Complexity: O(n)
  - Space Complexity: O(1)

Example 2: Two Pointers Starting at the Same End

- Implement a function called countUniqueValues:
  - Accepts a sorted array
  - Counts the unique values in the array
  - There can be negative numbers in the array
  - The array will always be sorted

Solution:

```JS
    function countUniqueValues(array) {
        if (!array.length) return 0;
        let i = 0;
        let uniqueValues;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i ++;
                array[i] = array[j];
            }
        };
        // i is equal to the number of unique values
        // add 1 becuase i starts at index 0
        return i + 1;
    };
```

## Sliding Window

- Creating a window which can be an array or number from one position to another
- Window increases or closes (and a new window is created), depending on a condition
- Useful for tracking a subset of data in an array or string

## Divide and Conquer

## Dynamic Programming

## Greedy Algorithm

## Backtracking
