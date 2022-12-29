// Semordnilap - AlgoExpert

// Brute force
function reverse(words) {
    // list of unique strings
    // return list of "reverse pairs"
    // a set of different strings where reverse of one word is the same as the forward of the other

    // loop through array
    // separate checker function
    // track in set - if match, add to sub array
    const pairs = [];
    const set = new Set();

    for (const word of words) {
        set.add(word);
    }

    for (const word of words) {
        const reverse = checkReverse(word);
        if (set.has(reverse)) {
            pairs.push([word, reverse]);
            set.delete(word);
        }
    }
    return pairs;
}

function checkReverse(word) {
    const reverseWordArr = [];
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWordArr.push(word[i]);
    }
    const reverseWord = reverseWordArr.join('');
    if (word === reverseWord) return null;
    return reverseWord;
}
