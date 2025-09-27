// 1002. Find Common Characters
// Easy
// Topics
// premium lock icon
// Companies
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).
//  You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.


//string -> words, only english alpha, cannot be empty
//return the common characters apprears in all words of string, return duplicate as well

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];
    let firstWord = words[0];

    for (let char of firstWord) {
        for (let i = 1; i < words.length; i++) {
            if (words[i].includes(char)) {
                // remove one occurrence
                words[i] = words[i].replace(char, "");
            } else {
                // if not found in any word → skip this char
                char = "";
                break;
            }
        }
        if (char) result.push(char); // only push if char survived all checks
    }

    return result;
};

//Test cases

console.log(commonChars(["bella","label","roller"]),["e","l","l"])