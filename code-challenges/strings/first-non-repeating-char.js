function firstNonRepeatingCharacter(string) {
    // use object
    // loop through, count number of occurances of each character
    // loop through object, return first one that has 1 occurance
    const charCountObj = {};

    for (const char of string) {
        if (charCountObj[char]) {
            charCountObj[char]++;
        } else {
            charCountObj[char] = 1;
        }
    }

    const keys = Object.keys(charCountObj);

    let firstNonRepChar;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (charCountObj[key] === 1) {
            firstNonRepChar = key;
            break;
        }
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] === firstNonRepChar) return i;
    }
    return -1;
}
