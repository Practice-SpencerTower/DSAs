// First Duplicate Value - AlgoExpert

// Updated solution - O(n) Time | O(n) Space
function firstDuplicateValue(array) {
    // use object to track duplicates
    // track min duplicate index
    // if duplicate found, update min index

    const numObj = {};
    let minIdx = Infinity;

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (numObj[num]) {
            if (numObj[num] === 'first') {
                numObj[num] = 'duplicate';
                i < minIdx ? (minIdx = i) : null;
            }
        } else {
            numObj[num] = 'first';
        }
    }
    return minIdx === Infinity ? -1 : array[minIdx];
}

// Initial solution - brute force
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
