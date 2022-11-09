// First Duplicate Value - AlgoExpert

// Initial solution
function firstDuplicateValue(array) {
    const numObj = {};
    const numSet = new Set();

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === num) {
                if (!numSet.has(num)) {
                    numSet.add(num);
                    numObj[j] = num;
                }
            }
        }
    }

    const keys = Object.keys(numObj);

    if (keys.length) {
        keys.sort((a, b) => a - b);
        console.log(keys);
        return numObj[keys[0]];
    }
    return -1;
}
