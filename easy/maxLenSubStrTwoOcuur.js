// 3090. Maximum Length Substring With Two Occurrences
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.
 

// Example 1:

// Input: s = "bcbbbcba"

// Output: 4

// Explanation:

// The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".
// Example 2:

// Input: s = "aaaa"

// Output: 2

// Explanation:

// The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".
 

// Constraints:

// 2 <= s.length <= 100
// s consists only of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let freq = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {

        // Add current character
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);

        // Window is invalid
        while (freq.get(s[right]) > 2) {
            freq.set(s[left], freq.get(s[left]) - 1);
            left++;
        }

        // Current window is valid
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};