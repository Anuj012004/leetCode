// 345. Reverse Vowels of a String
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   //create a set of vowels lower and uppercase as well
   //string to array
   // create two pointers left and right
   //while left<right if left is not vowel left++ 
   //if right is not vowel right++
   //if both vowel swap the vals 
   let set = new Set(['a','e','i','o','u','A','E','I','O','U'])
   let arr = s.split('')
   let left =0
   let right = s.length-1
   while(left<right){
    if(!set.has(arr[left])){
        left++
    }else if(!set.has(arr[right])){
        right--
    }else{
       [ arr[left],arr[right]] = [arr[right],arr[left]]
       left++
       right--
    }
   }
   return arr.join('')


};