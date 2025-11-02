
// Code


// Testcase
// Testcase
// Test Result
// 500. Keyboard Row
// Easy
// Topics
// premium lock icon
// Companies
// Given an array of strings words, 
// return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

 

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]

// Output: ["Alaska","Dad"]

// Explanation:

// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:

// Input: words = ["omk"]

// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]

// Output: ["adsdf","sfd"]

 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 


//we have an array named -> words --> contains strings, no char, no numeric val, cannot be empty, no special char or anything like that, strings can be in 
//both uppercase and lowercase, 
//need to return the word ie string from the array words which can be formed with the letters of only one  row in American keyboard
// row one ->qwertyuiop
//row two ->asdfghjkl
//row three -> zxcvbnm

//example 
// words = ['help','Alaska','no']
//output -> 'Alaska

//solution
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = 'qwertyuiop'
    let row2 =  'asdfghjkl'
    let row3 = 'zxcvbnm'
    let result = []

    //convert the word of words to lowercase
    for(let word of words){
    let lowerCasedWord =  word.toLowerCase()

    //to check the first letter of the word belongs to which low
    let row
    if(row1.includes(lowerCasedWord[0])){
        row = row1
    }else if(row2.includes(lowerCasedWord[0])){
        row = row2
    }else if(row3.includes(lowerCasedWord[0])){
        row = row3
    }
    //check all belongs to the same row
    let belonged = true
    for(let char of lowerCasedWord){
        if(!row.includes(char)){
            belonged = false
            break;
        }
    }
    if(belonged){
        result.push(word)
    }
    }
    return  result
};

//TEST CASES

console.log(findWords(['help','Alaska','no']), 'its output should be Alaska')