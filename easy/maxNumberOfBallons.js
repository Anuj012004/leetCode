// 1189. Maximum Number of Balloons
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map()
    for(let t of text){
        map.set(t,(map.get(t)||0)+1)
    }
    return Math.min(map.get('a')||0,
    map.get('b')||0,
    map.get('n')||0,
   Math.floor((map.get('l')||0)/2),
   Math.floor((map.get('o')||0)/2))
};