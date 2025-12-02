// 387. First Unique Character in a String
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.


// we have a string -> s, in lowercase letters only, no numbers or special symbols in it, cannot be empty || cannot equals to "", 

//find the first non-repeated letter and return its index, if not return -1, return index as a number directly, 

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //use map to set the letters of string with its number of freq
    let map = new Map()
    for(let char of s){
        map.set(char,(map.get(char)||0)+1)
    }

    //use loop on array to check the freq of char from map 
    for(let i=0; i<s.length; i++){
        //if freq ===1 return the index of that char
        if(map.get(s[i]) === 1){
            return i
        }
    }
    return -1
};

//test cases
console.log(firstUniqChar('leetcode'),'output would be 0')
console.log(firstUniqChar('aabb'),'-1')