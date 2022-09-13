// Validate Subsequence - AlgoExpert

function isValidSubsequence(array, sequence) {
    let numIdx = 0;
    for (const num of array) {
        if (num === sequence[numIdx]) numIdx++;
    }
    return numIdx === sequence.length;
}
