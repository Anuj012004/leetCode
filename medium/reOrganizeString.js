// 767. Reorganize String
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

 

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.


/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
        let freq = new Map();

    // Count frequency
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    // Impossible check
    let maxFreq = Math.max(...freq.values());

    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }

    let arr = [];

    // Convert map to array
    for (let [char, count] of freq) {
        arr.push([char, count]);
    }

    let result = "";

    while (arr.length > 1) {

        // Sort descending by frequency
        arr.sort((a, b) => b[1] - a[1]);

        let first = arr.shift();
        let second = arr.shift();

        // Add two different chars
        result += first[0];
        result += second[0];

        first[1]--;
        second[1]--;

        // Put back if still remaining
        if (first[1] > 0) {
            arr.push(first);
        }

        if (second[1] > 0) {
            arr.push(second);
        }
    }

    // If one character left
    if (arr.length > 0) {
        result += arr[0][0];
    }

    return result;
};