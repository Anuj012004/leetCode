// 2185. Counting Words With a Given Prefix
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

 

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length, pref.length <= 100
// words[i] and pref consist of lowercase English letters.


// an array -> words -> string values -> array cannot be empty atleast one element must be there, string values are in lowercase, nothing special symbols
// pref -> string, lowercase, cannot be an empty string

// num -> count of string in an array which starts with pref

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    //counter to count the strings with pref start //0
    //loop through the each string of words 
    //if current string length>pref 
    //slice the substring from words as per the length of pref
    // compare the substring and pref if both equals count++
    //return the counter 

    let counter = 0
    let prefLen = pref.length
    for(let word of words){
        if(word.length>=prefLen){
            let substring = word.slice(0,prefLen)
            if(substring===pref){
                counter++
            }
        }
    }
    return counter
};

//test cases

console.log(prefixCount(["leetcode","win","loops","success"], "code"),'0')
console.log(prefixCount( ["pay","attention","practice","attend"],"at"),'2')