// 1796. Second Largest Digit in a String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and digits.

//---------
// alphanum -> alphabets + digits
// we have an alphanumeric string -> not sorted char of strings are random, cannot be empty means s.length !==0, no uppercase char
// if s is like d1ad45d -> digits are 1,2,3
//number -> second largest digit in the s, if there is no any second largest digit return -1

//example 
//let s = 'adf1a4d5f4a5d7fd5'  
//second largest digit is 4 

//let s = 'aaaaaa111dddd111'
// return -1 no second largest digit found

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let digitsOnly = s.replace(/[^0-9]/g, "")

  let S = []
  for(let char of digitsOnly){
    if(!S.includes(Number(char))){
      S.push(Number(char))
    }
  }
  if(S.length<2) return -1
  let sorted = S.sort((a,b)=>b-a)
  return sorted[1]
};

//test cases

console.log(secondHighest('adf1a4d5f4a5d7fd5'),'4')
console.log(secondHighest('aaaaaa111dddd111'),'-1')