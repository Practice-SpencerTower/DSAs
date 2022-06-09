# Dynamic Programming

## Notes: Javascript Algorithms and Data Structures Masterclass by Colt Steel

- Allows us to "remember" the results to subproblems so we dont have to repeat the subproblems
- A method for solving a complex problems
  - Breaks the proplem down into subproplems
  - Solves each subproblem once and stores their solutions
  - Reduces duplication of the smaller peices

- Memoization:
  - Storing "remembered" answers to repeated subproblems
  - Eg if we solve for fib(5), we save it, then get that answer if we encounter fib(5) again

Features that need to be present for Dynamic Programming to optimize the solution:

  1. Overlapping subproblems
  1. Optimal substructure

- Overlapping subproblems:
  - There have to be "overlapping subproblems" for dynamic programming to be useful
    - eg the Fibonacci Sequence
    - MergeSort is NOT a good example - it does not have *overlapping* subproblems

- Optimal substructure:
  - If an optimal solution can be constructed from optimal solutions of its subproblems
  - eg a path between nodes where the shortest path from A to D is made up of the shortest paths between A-B B-C and C-D
  - The overall shortest path is made up of the shortest sub-paths

- Common fibonacci solution (that can be optimized with dynamic programming):

```JS
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
```

- Inefficient solution to finding the nth number in the fibonacci sequence
- Big O: O(2^n)
- Involves re-calculating the same fib numbers multiple times

- Memoized version of above fib solution:

```JS
function fibMemoized(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let result = fibMemoized(n-1, memo) + fibMemoized(n-2, memo);
    memo[n] = result;
    return result;
}
```

- Memoization: Top down approach to dynamic programming

- Tabulation: A Bottom Up Approach to Dynamic Programming
  - Storing results in a "table" (an array)
  - Usually done with iteration
  - Better space complexity than recursion

```JS
function fibTabulated(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
```
