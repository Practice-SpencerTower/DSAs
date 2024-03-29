// Palindrome Check

// while loop
// two pointers
// if pointers values differ, return false
// return true by default at end of loop

function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left <= right) {
        if (string[left] !== string[right]) return false;
        left++;
        right--;
    }
    return true;
}
