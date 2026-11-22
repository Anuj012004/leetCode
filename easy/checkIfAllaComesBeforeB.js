// 2124. Check if All A's Appears Before All B's
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

 

// Example 1:

// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
// Example 2:

// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.
// Example 3:

// Input: s = "bbb"
// Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
 

// Constraints:

// 1 <= s.length <= 100
// s[i] is either 'a' or 'b'.


/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    // string -> a and b char only
    // boolean
    // loop till the end
    // find first b 
    // if a exist after b return false else true

    // let firstB = -1
    // for(let i=0; i<s.length; i++){
    //     if(s[i]==='b'){
    //         firstB = i
    //         break
    //     }
    // }
    // if(firstB==-1) return true
    // for(let i=firstB+1; i<s.length; i++){
    //     if(s[i]==='a'){
    //         return false
    //     }
    // }
    // return true

    let firstB = s.indexOf('b')
    if(firstB===-1) return true
    for(let i=firstB; i<s.length; i++){
        if(s[i]==='a'){
            return false
        }
    }
    return true
};