// 1347. Minimum Number of Steps to Make Two Strings Anagram
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
// Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams. 
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s.length == t.length
// s and t consist of lowercase English letters only.

//-----------------------------------------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
   	 //use hashmap to solve this problem
	//create a hash table of s
	//use a loop on t
	//if key present in table remove the val by 1
	//find the sum of remaining values of the keys

	let map = new Map()
    let res = 0
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let char of t) {
        if (map.get(char)>0) {
            map.set(char,map.get(char)-1)
        }
    }
    for (let [k, v] of map) {
        res += v
    }
    return res
	
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let arr = new Array(26).fill(0)
    let res = 0
    for(let ch of s){
        arr[ch.charCodeAt(0)-97]++
    }
     for(let ch of t){
        arr[ch.charCodeAt(0)-97]--
    }
    for(let i of arr){
        if(i>0){
            res+=i
        }
    }
    return res
};