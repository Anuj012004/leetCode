// 2000. Reverse Prefix of Word
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

 

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".
 

// Constraints:

// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.


// word -> string -> cannot be an empty string, a lowercased string,  only contain english letters, no symbol,number etc
// ch -> lowercase, english letter 

// return string -> find the index of ch in word, reverse string till index(inclusive), join with rest
// if no ch in word -> do nothing -> return the word 
//if there are two or more ch in word -> reverse it first occurance

// word = 'mango' and ch = 'n'
//output -> namgo

// 'crazyyy' , 'w'
// output -> crazyy


// 'crazyyy' , 'y'
// output -> yzarcyy

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  //if no ch in word return word
  //find the index of ch in word
  //slice the substring till index
  //reverse the substring 
  //find the rest of the string
  //join it with the rest of the string 
  //return it
  
  if(!word.includes(ch)) return word
  let index = word.indexOf(ch) + 1
  let prefixString = word.slice(0,index)
  let rev = prefixString.split('').reverse().join('')
  let restStr = word.slice(index)
  let res = rev + restStr
  return res
};


//test cases
console.log(reversePrefix('crazyyy' , 'y'),'output should yzarcyy')
console.log(reversePrefix('crazyyy' , 'w'),'output should crazyyy')
console.log(reversePrefix('mango', 'n'),'output should namgo')