// Decode String

const decodeString = s => {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }

        let currChar = stack.pop();
        let alphaStr = '';
        while (currChar !== '[') {
            alphaStr = currChar + alphaStr;
            currChar = stack.pop();
        }

        currChar = stack.pop();
        let numStr = '';

        // while char is 0-9, add to numStr
        while (!Number.isNaN(Number(currChar))) {
            numStr = currChar + numStr;
            currChar = stack.pop();
        }

        stack.push(currChar);
        stack.push(alphaStr.repeat(Number(numStr))); // convert numStr to number and multiply alphaStr
    }

    return stack.join('');
};

console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("abc3[cd]xyz"))