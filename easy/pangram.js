// 1832. Check if the Sentence Is Pangram
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

//in pangram each letter of eng aplha must 

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    //split the sentence into an array
    let sentenceArray = sentence.split('')
    //convert sentence to set 
    let set = new Set(sentence)
    //size of set must be 26 there as 26 alphabets
    return set.size === 26
};

//test cases

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram('leetcode'))