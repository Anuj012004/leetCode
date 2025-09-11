// 242. Valid Anagram
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//Anagram is a number,string which formed by rearranging the other number or string,
//have two strings, s and t, both are in lowercases, !uppercase, contains english letters only
// return boolean, if t is an anagram of s, else return false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    //conversion of string into arr and sort and re into string
    // let S = s.split('').sort().join('')
    // let T = t.split('').sort().join('')

    // return S === T? true:false

    if(s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');


};