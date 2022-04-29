# Nth Fibonacci

- First two numbers are given
- The rest of the numbers can be calculated by adding the two previous numbers in the sequence
- For n > 2:
  - fib(n) = fib(n - 1) + fib(n - 2)

- Big O:
  - Time: O(2^n) - because at each call, we are doing two additional calls
  - Space: O(n) - becuase we are adding function calls to the call stack, which takes up memory

```JS
function fib(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n > 2) {
        return fib(n - 1) + fib(n - 2);
    }
}
```

Faster way:

- Using a cache / hash table / memoization to store values
