// O(n) Time | O(n) Space
function firstNonRepeatingCharacter(string) {
    // use object
    // loop through, count number of occurances of each character
    // loop through string, check each chars count in object, return first char in object one that has 1 occurance
    const charCountObj = {};

    for (const char of string) {
        if (charCountObj[char]) {
            charCountObj[char]++;
        } else {
            charCountObj[char] = 1;
        }
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (charCountObj[char] === 1) return i;
    }
    return -1;
}
