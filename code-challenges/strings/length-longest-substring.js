// Length of Longest Substring

function lengthLongestSubstring(s) {
    let subStr = '';
    let maxLength = 0
    
    for (let i = 0; i < s.length; i++) {
        if (subStr.includes(s[i])) {
            let idx = subStr.indexOf(s[i]);
            subStr = subStr.slice(idx + 1, subStr.length);
        }
        subStr += s[i];
        maxLength = Math.max(maxLength, subStr.length);
    }
    return maxLength;
};