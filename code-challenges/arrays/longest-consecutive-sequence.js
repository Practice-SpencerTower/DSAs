// Longest Consecutive Sequence

function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        // check if num is start of a sequence
        if (!numSet.has(num - 1)) {
            length = 0;
            while (numSet.has(num + length)) {
                length += 1;
            }
            longest = Math.max(length, longest);
            }
        }
    return longest;
}