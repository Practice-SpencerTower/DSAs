// N-Choose-K

function factorialize(num) {
	if (num <= 1) return 1;
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
}
return num;
}
factorialize(7);

7-choose-3:

factorialize(n) / (factorialize(k) * factorialize(n - k))
