// Tournament Wnner - AlgoExpert

function tournamentWinner(competitions, results) {
    let highestScore = 0;
    let tourneyWinner;
    const scoresObj = {};

    for (let i = 0; i < results.length; i++) {
        let winner;
        if (results[i] === 1) {
            winner = competitions[i][0];
        } else {
            winner = competitions[i][1];
        }
        if (scoresObj[winner]) {
            scoresObj[winner]++;
        } else {
            scoresObj[winner] = 1;
        }
        if (scoresObj[winner] > highestScore) {
            highestScore = scoresObj[winner];
            tourneyWinner = winner;
        }
    }
    return tourneyWinner;
}
