// Generate Document - AlgoExpert

// O(n + m) Time | Space O(n)
function generateDocument(characters, document) {
    const charObj = {};

    for (const char of characters) {
        if (charObj[char]) {
            charObj[char]++;
        } else {
            charObj[char] = 1;
        }
    }

    for (const char of document) {
        if (!charObj[char]) {
            return false;
        } else {
            charObj[char]--;
        }
    }

    return true;
}
