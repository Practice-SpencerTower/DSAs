// Non Constructible Change - AlgoExpert

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    currChange = 0;
    for (const coin of coins) {
        if (coin > currChange + 1) return currChange + 1;
        currChange += coin;
    }
    return currChange + 1;
}
