// 680. Valid Palindrome II
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

//---------------------------

//we have a strign s -> s cannot be an empty string i.e s!=="", s only consist lowercase letters

//return boolean -> true || false 
//return true -> if s is a plaindrome string or it can be a palindrome after deleting one letter else return false





/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
      function palindrome(left,right){
    while(left<right){
     if(s[left]!==s[right]) return false
     left++
     right--
    }
    return true
  }
  
  let left = 0
  let right = s.length-1
  while(left<right){
   if(s[left]!==s[right]){
     return palindrome(left+1,right) || palindrome(left,right-1)
     
   }
    left++
     right--
    
  }
  return true

};
