// Contains Duplicate

// Return true if same element occurs at least twice in array
// Return false if no duplicates

// brute force
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            if (num1 === num2) return true;
        }
    }
    return false;
}

const input1 = [1, 2, 3, 1, 5, 6, 1, 7];
console.log(
    `input: ${input1} | contains duplicate? ${containsDuplicate(input1)}`
);

// using set
// loop through, check if num in set
// if in set, return true, if not in set, add to set
function containsDuplicate2(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}

const input2 = [1, 2, 3, 1, 5, 6, 1, 7];
console.log(
    `input: ${input2} | contains duplicate? ${containsDuplicate2(input2)}`
);
