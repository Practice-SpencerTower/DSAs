// Tournament Wnner - AlgoExpert

function tournamentWinner(competitions, results) {
    const winners = {};

    for (let i = 0; i < results.length; i++) {
        if (results[i] === 1) {
            const teamScore = competitions[i][0];
            if (winners[teamScore]) {
                winners[teamScore] += 3;
            } else {
                winners[teamScore] = 3;
            }
        }
        if (results[i] === 0) {
            const teamScore = competitions[i][1];
            if (winners[teamScore]) {
                winners[teamScore] += 3;
            } else {
                winners[teamScore] = 3;
            }
        }
    }

    // loop through winners and find highest score
    let highScore = 0;
    let winner;
    for (const team in winners) {
        if (winners[team] > highScore) {
            highScore = winners[team];
            winner = team;
        }
    }
    return winner;
}
