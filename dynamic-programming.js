// DYNAMIC PROGRAMMING


// Inefficient solution to fibonacci: O(2^n) - two function calls for each call
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

function fibMemoized(n, memo = []) {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    let result = fibMemoized(n-1, memo) + fibMemoized(n-2, memo);
    memo[n] = result;
    return result;
}

// Time: O(n) Space: O(n)
function fibTabulated(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fibMemoized(4));