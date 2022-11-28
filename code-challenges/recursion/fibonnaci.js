// Fibonacci

function getNthFib(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    const fibArr = [0, 1];
    for (let i = 1; i <= n - 2; i++) {
        const nextNum = fibArr[i] + fibArr[i - 1];
        fibArr.push(nextNum);
    }
    return fibArr[n - 1];
}
