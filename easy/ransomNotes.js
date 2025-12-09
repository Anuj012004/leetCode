
// Code
// Testcase
// Testcase
// Test Result
// 383. Ransom Note
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


//---------------
//two strings ->ransomNote and magazineLength, always in lowercase letters, only english letters, no symbols || letters, cannot be empty
// return boolean -> if ransomNote can be made from magazine true else false

//each letter in magazine can be used only once

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //map of magazine
    let mapMagaz = new Map()
    for(let letter of magazine){
        mapMagaz.set(letter,(mapMagaz.get(letter)||0)+1)
    }

    for(let i of ransomNote){
        if(!mapMagaz.has(i) || mapMagaz.get(i) ==0 ){
            return false
        }
        mapMagaz.set(i, mapMagaz.get(i) -1)
    }
    return true
};

//test cases

console.log(canConstruct('aa','ab'),'false')
console.log(canConstruct('aa','aab'),'true')