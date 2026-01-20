// 567. Permutation in String
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Map = new Map()
    let windowMap = new Map()
    for(let char of s1){
        s1Map.set(char,(s1Map.get(char)||0)+1)
    }
    function mapsEqual(m1, m2) {
        if (m1.size !== m2.size) return false
        for (let [key, val] of m1) {
            if (m2.get(key) !== val) return false
        }
        return true
    }

    let left = 0
    for(let right=0; right<s2.length; right++){
        let char = s2[right]
        windowMap.set(char,(windowMap.get(char)||0)+1)
        if(right-left+1===s1.length){
            if(mapsEqual(s1Map,windowMap)) return true
            let charLeft = s2[left]
            windowMap.set(charLeft,(windowMap.get(charLeft))-1)
            if(windowMap.get(charLeft)===0){
                windowMap.delete(charLeft)
            }
     left++
        }
    }
    return false
};