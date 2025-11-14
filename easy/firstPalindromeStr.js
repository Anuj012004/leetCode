// 2108. Find First Palindromic String in the Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

 

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists only of lowercase English letters.

//have an array -> words -> contains strings, no numbers, symbols etc, always in lowercase letters, no uppercase, words cannot be empty there is atleast one string present,
//it can have char, 
//have to return the first palindromic string -> palindrome means the string should spells or reads same from forward and backward 
//if !palindromic string found return "" (empty string)

//example :
// words = ["do","car","did","okay"]  its output should be "did"
// words = ["do","yeah"]  its output should be ""

var palindromic = function(words){
    //loop through the each word of words
    for(let word of words){
        //check the word is palindromic if yes return it
        if(word.split('').reverse().join('')===word){
            return word
        }
    }
    return ""
}

//TEST CASES

console.log(palindromic(["do","car","did","okay"]))
console.log(palindromic(["do","yeah"] ))