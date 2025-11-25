// 3110. Score of a String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string s. The score of a string is defined as the res of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

 

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:

// Input: s = "zaz"

// Output: 50

// Explanation:

// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

 

// Constraints:

// 2 <= s.length <= 100
// s consists only of lowercase English letters.

//string -> always lowercase english letters, length of string is 2 or more than 2, no uppercase, no numbers in it 
//return -> score -> score is the res of absolute difference between the ascii value of letters



/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    // let asciiVal = [...s].map((x,i)=>s.charCodeAt(i))
    // let arr = []
    // for(let i=0; i<asciiVal.length-1; i++){
    //    arr.push(Math.abs(asciiVal[i] - asciiVal[i+1]))

    // }
    // return arr.reduce((a,b)=>a+b,0)
    let res = 0
    for(let i=0; i<s.length-1; i++){
        res+= Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    }
    return res
};

//Test cases

console.log(scoreOfString('hello'),'13')