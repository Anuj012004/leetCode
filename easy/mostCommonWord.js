// 819. Most Common Word
// Easy
// Topics
// premium lock icon
// Companies
// Given a string paragraph and a string array of the banned words banned, 
// return the most frequent word that is not banned. 
// It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Note that words can not contain punctuation symbols.

 

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"
 

// Constraints:

// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters

//have two given things -> string paragraph and array of banned word -> there can be multiple banned words, i.e more than one, banned array contains strings only, 
//banned array can be empty as well, strings in banned array always in lowercase, paragraph -> can contains english letters, spaces, symbols 

//we have to return the word occured most in the string paragraph which is not banned, return it as a string 

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    let bannedWord = new Set(banned)
    //paragraph to paragraph array and remove symbols and spaces, conversion to lowerCase
    let paragraphArray = paragraph.match(/[A-Za-z]+/g).map((a)=>a.toLowerCase())

    //object to count the number of word
    let mostFreq = {}
    for(let word of paragraphArray){
        if(!bannedWord.has(word))
        mostFreq[word] = (mostFreq[word] || 0) +1
    }

    return Object.keys(mostFreq).reduce((a,b)=>mostFreq[a]>mostFreq[b] ? a :b)
};

//Test cases 

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]),'output should be ball')
console.log(mostCommonWord( "a.",[]),'output should be a')