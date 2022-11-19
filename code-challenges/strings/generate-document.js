// Generate Document - AlgoExpert

// use object to track character count
// loop through document and check if char in character object
// if not in character object - document cannot be created, return false
// if character in object, "use" character by decrementing character count

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
