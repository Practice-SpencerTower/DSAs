// Contains Duplicate

// Return true if same element occurs at least twice in array
// Return false if no duplicates

// brute force
for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
        let num2 = nums[j];
        if (num1 === num2) return true;
    }
}
return false;
