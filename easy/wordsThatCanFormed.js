// 1160. Find Words That Can Be Formed by Characters
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
        const charCount = {};

    for (let ch of chars) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    let totalLength = 0;

    for (let word of words) {
        const wordCount = {};
        let isGood = true;

        for (let ch of word) {
            wordCount[ch] = (wordCount[ch] || 0) + 1;

            // If word needs more chars than available
            if (!charCount[ch] || wordCount[ch] > charCount[ch]) {
                isGood = false;
                break;
            }
        }

        if (isGood) {
            totalLength += word.length;
        }
    }

    return totalLength;
};