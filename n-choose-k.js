// N-Choose-K

function nChooseK(n, k) {
    return factorialize(n) / (factorialize(k) * factorialize(n - k))
}

function factorialize(num) {
	if (num <= 1) return 1;
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
}
return num;
}

console.log(nChooseK(7, 3))
