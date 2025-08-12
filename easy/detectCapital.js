//520. Detect Capital 

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.


// word -> string, should be in specific order
// return true if the orders are , all uppercase, all lowercase, first cap rest small, else false

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let lowercasedWord = word.toLowerCase()
    let uppercaseWord = word.toUpperCase()
    let firstCap = lowercasedWord[0].toUpperCase() + lowercasedWord.slice(1)

    if(word === lowercasedWord || word === uppercaseWord || word===firstCap){
        return true
    }
    return false
};

//test cases 
console.log(detectCapitalUse('USA'),'should be true')
console.log(detectCapitalUse('FlaG'),'should be false')