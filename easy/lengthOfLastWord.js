// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


// string -> not empty, contain white spaces, not anything other than string alright
// have to return the length of last number, num, cannot be zero coz the s cannot be empty 

//example : "hey john" -> 4
// "now or never" -> 5

function returnLength(s){
    let trimmedStr = s.trimEnd()
    let arrOfWords =  trimmedStr.split(" ")
    return arrOfWords[arrOfWords.length-1].length
}   

//test cases

console.log(returnLength('hey john'),'should equals to 4') //4
console.log(returnLength("now or never"),'should equals to 5') //5
console.log(returnLength("fly me   to   the moon "),'should equals to 4') //4