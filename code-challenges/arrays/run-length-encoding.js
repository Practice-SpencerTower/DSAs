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
