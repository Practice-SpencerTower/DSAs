// Caesar Cipher Encryptor - AlgoExpert

// 26 letters in alphabet
// modulus key in case its greater than 26
// alpha keycode range is 97-122
// loop through each letter in string
// determine position in alphabet
// add key to position
// if position greater than 122, subtract by 26
// determine letter at that number in alphabet
// add new letter to output string
// use charCodeAt and fromCharCode to convert letters to/from keycodes

function caesarCipherEncryptor(string, key) {
    const newString = [];
    for (let i = 0; i < string.length; i++) {
        // get num of letter
        let position = string[i].charCodeAt();
        // if key is greater than 26
        const newKey = key % 26;
        // add key
        position += newKey;
        // if outside range of alphabet, modulus to keep in range
        if (position > 122) {
            position = position - 26;
        }
        // determine letter at new position
        const newLetter = String.fromCharCode(position);
        newString.push(newLetter);
    }
    return newString.join('');
}
