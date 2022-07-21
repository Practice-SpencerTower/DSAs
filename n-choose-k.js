// N-Choose-K


function nChooseK(n, k) {
    return factorialize(n) / (factorialize(k) * factorialize(n - k))
}

// For Loop
function factorialize(num) {
	if (num <= 1) return 1;
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
}
return num;
}

console.log(nChooseK(7, 3))

// Recursion
function factorializeRec(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorializeRec(num - 1));
    }
  }

console.log(factorializeRec(5));