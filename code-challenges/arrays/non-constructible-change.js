// Non Constructible Change - AlgoExpert

// Sort coins
// If current coin is greater than sum of all previous coins + 1,
// return sum of previous coins + 1

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    currChange = 0;
    for (const coin of coins) {
        if (coin > currChange + 1) return currChange + 1;
        currChange += coin;
    }
    return currChange + 1;
}
