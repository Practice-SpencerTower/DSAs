# Recursion

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

## Common Recursion Pitfalls

- Not having a base case
  - Without a base case the recursive function will continue indefinitely, and reach the call stack limit / stack overflow

- No return statement or returning the wrong thing
  - Need a return statement in the recursive call and the base case

## Helper Method Recursion

- An outer and inner function
  - Inner function calls itself recursively
  - Useful for collecting values in a data structure such as an array

## Collecting Values Without a Helper Function

## Pure Recursion

- Allows you to collect values in a data structure without a helper function (not necessarily better than using a helper function, just a different way to do it)
- Function is self-contained and recursively calls itself
- Example using an array:
  - Concatinate the result of the recursive call onto the rest of the array

```JS
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
```
