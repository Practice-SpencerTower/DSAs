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
