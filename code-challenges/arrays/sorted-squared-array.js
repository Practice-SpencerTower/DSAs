// Sorted Squared Array - AlgoExpert

// Time O(nlogn) | Space O(n)
function sortedSquaredArray(array) {
    const squares = [];
    for (let i = 0; i < array.length; i++) {
        const square = array[i] * array[i];
        squares.push(square);
    }
    squares.sort((a, b) => a - b);
    return squares;
}

// Time O(n) | Space O(n)
function sortedSquaredArray(array) {
    const squares = [];
    let smallerIdx = 0;
    let largerIdx = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smaller = array[smallerIdx];
        const larger = array[largerIdx];

        if (Math.abs(smaller) > Math.abs(larger)) {
            squares[i] = smaller * smaller;
            smallerIdx++;
        } else {
            squares[i] = larger * larger;
            largerIdx--;
        }
    }
    return squares;
}
