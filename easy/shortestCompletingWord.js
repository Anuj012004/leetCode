// 748. Shortest Completing Word
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

 

// Example 1:

// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.
// Example 2:

// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
 

// Constraints:

// 1 <= licensePlate.length <= 7
// licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 15
// words[i] consists of lower case English letters.


//---------------------------------------------------

//we have a string liscencePlate and an array words 
//liscencePlate -> contains digit, letters or white space, letters can be in any case, upper or lower, cannot be empty
//words -> contain english letters, letters are in lowercase only, words cannot be empty

//find shortest completing word ->  completing word is a word which contain all the letters that are in liscense string
//there is always existance of a word 
//if multiple completing word found return the shortest one
//treat all the letters of string case insensitive, means str = abBc, word can be abbc



/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    //remove white spaces and digits from license plate
    let newStr = licensePlate.replace(/[\s\d]/g, "").toLowerCase()
    //create a map
    let map = new Map()
    for(let char of newStr){
        map.set(char, (map.get(char)||0)+1)
    }
    let answer = null
    //create a function to check if the word satisfy conditions
    function isComplete(word){
        //create a map of word
        let mapWord = new Map()

        for(let char of word){
            mapWord.set(char, (mapWord.get(char)||0)+1)
        }

        //conditions
        for(let [char, freq] of map){
            if(!mapWord.has(char) || mapWord.get(char) < freq){
                return false
            }
        }
        return true
    }
    //iterate word of words
    for(let word of words){
        if(isComplete(word)){
            if(answer === null || word.length<answer.length){
                answer = word
            }
        }
    }
    return answer
};

//TEST CASES

console.log(shortestCompletingWord("1s3 PSt",["step","steps","stripe","stepple"]),'steps')
console.log(shortestCompletingWord("1s3 456",["looks","pest","stew","show"]),'pest')