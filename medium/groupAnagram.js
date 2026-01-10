// 49. Group Anagrams
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//-------------

//we have an array strs -> consist of strings, !empty, but strs[i] can be empty, !uppercase, always in lowercase, no any special letter or symbol
//return an array - group the ANAGRAM in an arrays, anagram is a value with all possible rearrangements by using the original letters only once,


//-------------


// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//     //if strs has only one element or it is empty
//     if(strs.length===1){
//         return [[strs[0]]]
//     }
//     let map = new Map();

//     for (let str of strs) {
//         // Sort the string alphabetically
//         let sorted = str.split('').sort().join('');

//         if (!map.has(sorted)) {
//             map.set(sorted, []);
//         }
//         map.get(sorted).push(str);
//     }

//     return Array.from(map.values());
// };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //create a map
    //used sorted value as key 
    //if key present we push the word in strs , []
    //return object values

    let map = {}
    for(let word of strs){
        let key = word.split('').sort().join('')
        if(!map[key]){
            map[key] = []
        }
        map[key].push(word)
    }
    return Object.values(map)
};


//Test Cases
console.log(groupAnagrams( ["eat","tea","tan","ate","nat","bat"]),'it output should be ["bat"],["nat","tan"],["ate","eat","tea"]')
console.log(groupAnagrams(['a']),'its output should be [["a"]]')
console.log(groupAnagrams([""]),'it should be [[""]]')
