// Run-Length Encoding - AlgoExpert

// loop through string
// keep running count of current letter
// if letter exceeds 9 - encode as 9'letter'
// push to encoded array
// reset count
// if next letter is different - restart count
// string concatenation is a O(n) operation because strings are immutible - use array and .join() to create string

function runLengthEncoding(string) {
    const encoded = [];
    let count = 1;
    let runningLetter = string[0];

    for (let i = 1; i < string.length; i++) {
        let currentLetter = string[i];
        if (count === 9 || currentLetter !== runningLetter) {
            encoded.push(`${count}${runningLetter}`);
            count = 0;
            runningLetter = currentLetter;
        }
        count++;
    }
    encoded.push(`${count}${runningLetter}`);
    return encoded.join('');
}
