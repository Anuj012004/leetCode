// 1528. Shuffle String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string s and an integer array indices of the same length. 
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

 

// Example 1:


// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.
 

// Constraints:

// s.length == indices.length == n
// 1 <= n <= 100
// s consists of only lowercase English letters.
// 0 <= indices[i] < n
// All values of indices are unique.




//we have string and indices -> indices and string are of same length, string->always lowercased, 
//indices-> array of num between 0 to 100, all are unique no repetition,

//we have to shuffle the string according to the given indices

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let resArr = new Array(s.length)
    for(let i=0; i<s.length; i++){
        resArr[indices[i]] = s[i]
    }
    return resArr.join('')
};