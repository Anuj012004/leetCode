// 290. Word Pattern
// Easy
// Topics
// premium lock icon
// Companies
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let S = s.split(' ')
    if(pattern.length!==S.length) return false

    let mapS = new Map()
    let mapPattern = new Map()

    for(let i=0; i<pattern.length; i++){
        let char = S[i]
        let patternChar = pattern[i]

        if(mapS.has(char)){
            if(mapS.get(char)!==patternChar) return false
        }else{
            mapS.set(char,patternChar)
        }

        if(mapS.has(patternChar)){
            if(mapS.get(patternChar)!==char) return false
        }else{
            mapS.set(patternChar,char)
        }
    }
        return true
};