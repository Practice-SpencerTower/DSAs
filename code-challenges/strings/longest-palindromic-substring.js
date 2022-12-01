// Longest Palindromic Substring - AlgoExpert

function longestPalindromicSubstring(string) {
    // loop through string
    // check the two types of palindromes - even and odd
    // separate function to check if palindrome
    let longest = [0, 1];
    for (let i = 1; i < string.length; i++) {
      const oddPalin = isPalindrome(string, i - 1, i + 1);
      const evenPalin = isPalindrome(string, i, i + 1);
      const longerPalin = oddPalin[1] - oddPalin[0] > evenPalin[1] - evenPalin[0] ? oddPalin : evenPalin;
      longest = longerPalin[1] - longerPalin[0] > longest[1] - longest[0] ? longerPalin : longest;
    }
    return string.slice(longest[0], longest[1]);
  }
  
  function isPalindrome(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
      if (string[leftIdx] !== string[rightIdx]) break;
      leftIdx--;
      rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
  }